const dims = { height: 500, width: 1100 } 

const svg = d3.select('.container .canvas')
              .append('svg')
              .attr('width', dims.width + 100)
              .attr('height', dims.height + 100)

console.log(svg)

const graph = svg.append('g')
                 .attr('transform', 'translate(50, 50)')

//data strat
const stratify = d3.stratify()
                    .id(d => d.name)
                    .parentId(d => d.parent);

console.log(stratify)
const tree = d3.tree()
               .size([dims.width, dims.height])

//creat ordinal scale
// const color = d3.scaleOrdinal(d3['schemeSet3'])
const color = d3.scaleOrdinal(['#f4511e', '#e91e63', '#e53935', '9c27b0'])

//update function  
const update = (data) => {

    //remove current nodes
    graph.selectAll('.node').remove()
    graph.selectAll('.link').remove()

  console.log(data)

  //get updated root Node data
  const rootNode = stratify(data);
  const treeData = tree(rootNode).descendants();
  
  console.log(rootNode)
  console.log(treeData)

  //get nodes selection and join data
  const nodes = graph.selectAll('.node')
                     .data(treeData)

  console.log()
  const treeDataLink = tree(rootNode).links();

  //get link selection and join data
  const links = graph.selectAll('.link')
                     .data(treeDataLink)

  console.log(links)

  color.domain(data.map(d=>d.department))
  console.log(data.map(d=>d.department))

  //enter new links
  links.enter()
        .append('path')
        .transition().duration(300)
        .attr('class', 'link')
        .attr('fill', 'none')
        .attr('stroke', '#aaa')
        .attr('stroke-width', 2)
        .attr('d', d3.linkVertical().x(d=>d.x).y(d=>d.y))

  //create enter node groups 각 노드를 x, y얼마큼 이동할 것인가가 중요함 그 계산을 tree()가 해줌
  const enterNodes = nodes.enter()
                          .append('g')
                          .attr('class', 'node')
                          //treeData로 전달함!
                          //.attr('transform', d => `translate(${d.x , d.y})`)
                          .attr('transform', d => `translate(${d.x}, ${d.y})`);

  //append reacts to enter nodes
  enterNodes.append('rect')
            .attr('fill', d => color(d.data.department))
            .attr('stroke', '#555')
            .attr('stroke-width', 2)
            .attr('height', 50)
            .attr('width', d => d.data.name.length * 20)
            
            // .attr('transform', d => {
            //     let x = d.data.name.length * 10
            //     return `translate(${-x}, -25)`
            // })
            .attr('transform', d => `translate(${-d.data.name.length * 10}, -25)`)

  enterNodes.append('text')
            .attr('text-anchor', 'middle')
            .attr('fill', 'white')
            .text(d => d.data.name)


};


//data & firebase hook-up
let data = []
db.collection('subjects').onSnapshot(res => {
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



