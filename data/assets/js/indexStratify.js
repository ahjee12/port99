//Hierarchy
const data = [
    { name: 'Me', parent: '' },
    { name: 'food', parent: 'Me' },
    { name: 'study', parent: 'Me' },
    { name: 'music', parent: 'Me' },
    { name: '치킨', parent: 'food', amount: 7 },
    { name: '피자', parent: 'food', amount: 5 },
    { name: '새우튀김', parent: 'food', amount: 4 },
    { name: '휠렛버거', parent: 'food', amount: 6 },
    { name: 'd3', parent: 'study', amount: 3 },
    { name: 'three', parent: 'study', amount: 3 },
    { name: 'javascript', parent: 'study', amount: 6 },
    { name: 'react', parent: 'study', amount: 3 },
    { name: 'web', parent: 'study', amount: 5 },
    { name: 'blender', parent: 'study', amount: 6 },
    { name: 'infinity', parent: 'study', amount: 1 },
    { name: 'the vamps', parent: 'music', amount: 3 },
    { name: 'bobby', parent: 'music', amount: 2 },
    { name: 'rap', parent: 'music', amount: 5 },
    { name: 'jazz', parent: 'music', amount: 2 },
    { name: 'rihanna', parent: 'music', amount: 3 },
    { name: 'classical', parent: 'music', amount: 5 },
  ];
  
const svg = d3.select('.canvas')
                .append('svg')
                .attr('width', 1060)
                .attr('height', 800)

const graph = svg.append('g')
                .attr('transform', `translate(50,50)`)

// id, parentId, value....
const stratify = d3.stratify()
                    .id(d => d.name)
                    .parentId(d => d.parent);

const rootNode = stratify(data)
                    .sum(d => d.amount)
                    
console.log(rootNode);

// pack
const pack = d3.pack()
                .size([960, 700])
                .padding(5)

console.log(pack(rootNode))
console.log(pack(rootNode).descendants())

const bubbleData = pack(rootNode).descendants()

//create ordinal scale
const color = d3.scaleOrdinal(['#d1c4e9', '#b39ddb', '#9575cd'])

// join data and add group for each node
const nodes = graph.selectAll('g')
                    .data(bubbleData)
                    .enter()
                    .append('g')
                    .attr('transform', d => `translate(${d.x}, ${d.y})`)

nodes.append('circle')
        .attr('r', d => d.r)
        .attr('stroke', 'white')
        .attr('stroke-width', 2)
        .attr('fill', d  => color(d.depth))
        

nodes.filter(d => !d.children)
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.3em')
      .attr('fill', 'white')
      .style('font-size', d => d.value * 5)
      .text(d => d.data.name)

