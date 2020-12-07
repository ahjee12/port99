const svg = d3.select('svg');
console.log(svg);
svg.attr('width', 600)
   .attr('height', 600)
const width = svg.attr('width');
const height = svg.attr('height');
console.log(width);

const render = data =>{
    
    const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, d=> d.number)])
    console.log(xScale.domain());

    //data join 1 enter 2 updat 3 exit
    svg.selectAll('rect').data(data)
       .enter().append('rect')
       .attr('width', 300)
       .attr('height', 300)
}

d3.csv('assets/js/text.csv')
.then(data =>{
    data.forEach(d =>{
        d.number = +(d.number)*1000;
    })
    console.log(data)
    render(data)
})

// console.log(d3.csv('data.csv'));