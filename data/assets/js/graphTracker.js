const margin = {top: 40, right: 20, bottom: 50, left: 100}
const graphWidth = 560 - margin.left - margin.right;
const graphHeight = 400 - margin.top - margin.bottom;

const svg = d3.select('.canvas')
                .append('svg')
                .attr('width', graphWidth + margin.left + margin.right)
                .attr('height', graphHeight + margin.top + margin.bottom)

const graph = svg.append('g')
                 .attr('width', graphWidth)
                 .attr('height', graphHeight)
                 .attr('transform', `translate(${margin.left}, ${margin.top})`)

//scales
const xScale = d3.scaleTime()
                  .range([0, graphWidth])
const yScale = d3.scaleLinear()
                 .range([graphHeight, 0])
 

const xAxisGroup = graph.append('g')
                        .attr('class', 'x-axis')
                        .attr('transform', `translate(0, ${graphHeight})`)
const yAxisGroup = graph.append('g')
                        .attr('class', 'y-axis')

//d3 line path generator
const line = d3.line()
               .x( function(d){ return xScale(new Date(d.date)) })
               .y( function(d){ return yScale(d.distance)})

//line path element
const path = graph.append('path')

//create dotted line group and append to graph
const dotLineG  = graph.append('g')
                        .attr('class', 'lines')
                        .style('opacity', 0)

//create x dotted line and append to dotted line group
const xDotLine = dotLineG.append('line')
                         .attr('stroke', '#aaa')
                         .attr('stroke-width', 1)
                         .attr('stroke-dasharray', 4)
//create y dotted line and append to dotted line group
const yDotLine = dotLineG.append('line')
                        .attr('stroke', '#aaa')
                        .attr('stroke-width', 1)
                        .attr('stroke-dasharray', 4)

const update = (data) =>{
    console.log(data);

    //같은 것만 뽑음
    data = data.filter(item => item.activity == activity);

    //sort data based on date objects
    data.sort((a,b) => new Date(a.date) - new Date(b.date))

    //set scale domains
    xScale.domain(d3.extent(data, d => new Date(d.date)))
    yScale.domain([0, d3.max(data, d => d.distance)])

    console.log(yScale(800))

    //update path data We need to pass it in as an array data자체가 array 0번이 됨
    console.log([data]);
    path.data([data])
        .attr('fill', 'none')
        .attr('stroke', '#00bfa5')
        .attr('stroke-width', 2)
        .attr('d', line)

    //create axes 
    const xAxis = d3.axisBottom(xScale)
                    .ticks(4)
                    .tickFormat(d3.timeFormat('%b %d'))

    const yAxis = d3.axisLeft(yScale)
                    .ticks(4)
                    .tickFormat(d => d +'m')
         
    const circles = graph.selectAll('circle')
                          .data(data)
    
    //remove
    circles.exit()
           .remove()

    //modified 
    circles.attr('cx', d => xScale(new Date(d.date)))
           .attr('cy', d => yScale(d.distance))

    //added                  
    circles.enter()
           .append('circle')
           .attr('r', 4)
           .attr('cx', d => xScale(new Date(d.date)))
           .attr('cy', d => yScale(d.distance))
           .attr('fill', '#ccc')
    
    graph.selectAll('circle')
         // circle을 보냈을 때 
         .on('mouseover', (d, i, n) => {
            handleMouseOver(d, i, n)
            handleDotLineOver(d, i, n)
         })
         .on('mouseleave', (d, i, n) => {
            handleMouseOut(d, i, n)
            handleDotLineOut(d, i, n)
         })
         .attr('cursor','pointer')

    //call axis
    xAxisGroup.call(xAxis)
    yAxisGroup.call(yAxis)

    //rotate axis text
    xAxisGroup.selectAll('text')
                .attr('transform', 'rotate(-40)')
                .attr('text-anchor', 'end')

}

const handleMouseOver = (d, i, n) => {
    console.log(d)
    console.log(n[i])
    d3.select(n[i])
        .transition().duration(100)
        .attr('r', 8)
        .attr('fill', '#fff')
}

const handleMouseOut = (d, i, n) => {
    // console.log(d)
    // console.log(n[i])
    d3.select(n[i])
        .transition().duration(100)
        .attr('r', 4)
        .attr('fill', '#ccc')
}

const handleDotLineOver = (d, i, n) => {
    //set x dotted line cords (x1, x2, y1, y2)
    xDotLine.attr('x1', xScale(new Date(d.date)))
             .attr('x2', xScale(new Date(d.date)))
             .attr('y1', yScale(0))
             .attr('y2', yScale(d.distance))

    //set y dotted line cords (x1, x2, y1, y2)
    yDotLine.attr('x1', 0)
            .attr('x2', xScale(new Date(d.date)))
            .attr('y1', yScale(d.distance))
            .attr('y2', yScale(d.distance))

    //show the dotted line group (.style, opacity)
    dotLineG.style('opacity', 1)
}

const handleDotLineOut = (d, i, n) => {
    dotLineG.style('opacity', 0)
}
//data and firestore
let data = [];

db.collection('activities')
  .onSnapshot(res => {
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
                // 같지 않은 것만 뽑음
                data = data.filter(item => item.id !== doc.id)
                break;

            default:
                break;
        }
    })
    update(data);

})
