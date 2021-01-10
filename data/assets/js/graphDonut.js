const dims = {height: 300, width: 300, radius: 150};
const center = {x: (dims.width/2 + 5), y: (dims.height/2 + 5)};

const svg = d3.select('.donut.canvas')
.append('svg')
.attr('width', dims.width + 150)
.attr('height', dims.height + 50)

console.log(svg)

const graph = svg.append('g')
.attr('transform', `translate(${center.x}, ${center.y})`)

//pie에 data array 넣으면 cost만 들어가도록 함!
const pie = d3.pie()
.sort(null)
.value(d => d.cost)

// const angles = pie([
//     {name: 'rent', cost: 500},
//     {name: 'bills', cost: 300},
//     {name: 'gaming', cost: 100}
// ])

// console.log(angles)

const arcPath = d3.arc()
.outerRadius(dims.radius)
.innerRadius(dims.radius / 2)
// console.log(arcPath(angles[0]))

const color = d3.scaleOrdinal(d3['schemeSet3'])

//legend setup
const legendGroup = svg.append('g')
.attr('transform', `translate(${dims.width + 40}, 10)`)

const legend = d3.legendColor()
.shape('circle')
.shapePadding(10)
.scale(color)

//tooltip setup
const tip = d3.tip()
.attr('class', 'tip card')
.html( d => {
    // return `<p>Hello There!</p>`
    let content = `<div class="name">${d.data.name}</div>`
    content += `<div class="cost">${d.data.cost}</div>`
    content += `<div class="delete">Click slice to delete</div>`

    return content;
})
 graph.call(tip)


//domain은 update로!
const update = (data) => {
    console.log(data)


    //1. update color scale domain
    color.domain(data.map(d => d.name))
  

    //update and call legend
    legendGroup.call(legend)
    
    legendGroup.selectAll('text')
                .attr('fill', 'white')

    //2. join updated data(pie(data)) to path elements  path data에 pie(data) 넣어야 함!
    const paths = graph.selectAll('path')
                       .data(pie(data))

    // console.log(pie(data))
    // console.log(paths.enter())

    //3. remove exit selection data에서 지워질 때 remove
    paths.exit()
        .transition().duration(2000)
        .attrTween('d', arcTweenExit)
        .remove()
    console.log(paths.exit())

    //4. update current shapes in DOM 데이터 수정될 때 modified
    paths.attr('d', arcPath)
        .transition().duration(2000)
        .attrTween('d', arcTweenUpdate)
        
    //5. append the enter selection to the DOM 처음 data에 들어갈 때 added
    //☆ path data에 pie(data) 넣으면 (data는 array) arcPath에 endAngle, startAngle 생김?
    paths.enter()
        .append('path')
        // .attr('transform', `translate(${center.x}, ${center.y})`) graph, paths 둘 중 하나에 적용하면 됨
        .attr('class', 'arc')
        //.attr('d', d => arcPath(d))대신
        //.attr('d', arcPath)
        .attr('stroke', '#fff')
        .attr('stroke-width', 3)
        .attr('fill', d => color(d.data.name))
        .each(function(d){ this._current = d })
        .transition().duration(2000)
        .attrTween('d', arcTweenEnter)

    const pathEvent = graph.selectAll('path')
                            .on('mouseover', (d, i, n) => {
                                //arrow function안에서 this못 씀 this대신 n[i]
                                tip.show(d, n[i])
                                handleMouseOver(d, i, n) 
                            })
                            .on('mouseout', (d, i, n) => {
                                tip.hide()
                                handleMouseOut(d, i, n)
                            })
                            .on('click', handleClick)

}

const arcTweenEnter = (d) => {
    //interpolate 삽입
    let i = d3.interpolate(d.startAngle, d.endAngle)
    // let i = d3.interpolate(d.endAngle, d.startAngle)

    //0 ~ 1
    return (t) => {
        //endAngle을 계속 바꿔줘야 함 t = 0일 때 endAngle은 startAngle로 
        d.endAngle = i(t)
        // d.startAngle = i(t)
        // console.log(d)
        return arcPath(d)
    }
}

const arcTweenExit = (d) => {
    console.log(d)
    //interpolate 삽입
    let i = d3.interpolate(d.endAngle, d.startAngle)
    // let i = d3.interpolate(d.startAngle, d.endAngle)

    return (t) => {
        d.endAngle = i(t)
        // d.startAngle = i(t)
        return arcPath(d)
    }
}


//use function keyword to allow use of 'this'
function arcTweenUpdate(d) {
    // console.log(d)
    // console.log(this._current)

    //interpolate between the two objects whatever the current angles are and whatever the end angles are
    let i = d3.interpolate(this._current, d);
    //update the current prop with new updated data
    //this._current = d = i(i)
    this._current = i(1);

    return (t) => {
        // console.log(i(t))

        return arcPath(i(t))
    }
}

const handleMouseOver = (d, i, n) => {
    // console.log(n[i])
    // console.log(d)
    d3.select(n[i])
    .transition('changeSliceFill').duration(300)
    .attr('fill', '#fff')
}
const handleMouseOut = (d, i, n) => {
    d3.select(n[i])
    .transition('changeSliceFill').duration(300)
    .attr('fill', color(d.data.name))
}
const handleClick = (d) => {
    // console.log(d)
    const id = d.data.id;
    db.collection('expenses').doc(id).delete()
}

let data = []
db.collection('expenses').onSnapshot(res => {
        res.docChanges().forEach(change => {
            console.log(change)
            const doc = {
                ...change.doc.data(),
                id: change.doc.id
        }
        switch(change.type){
            case 'added': 
                data.push(doc);
                break;

            case 'modified': 
                const index = data.findIndex(item => item.id == doc.id)
                data[index] = doc
                break;

            case 'removed': 
                // 같지않을 때 = true일 때  / false일 때 !
                data = data.filter(item => item.id !== doc.id)
                break;

            default:
                break;
        }
    })
    update(data)
})




