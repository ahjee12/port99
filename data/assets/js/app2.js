const svg = d3.select('svg');
console.log(svg);
svg.attr('width', 1900)
   .attr('height', 600)
const width = svg.attr('width');
const height = svg.attr('height');
console.log(width);

const render = data =>{
    const xValue = d => d.number;
    const yValue = d => d.name;

    //margin 넣을 때 
    const margin = {top: 20, right: 20, bottom: 20, left: 100}
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    //상위 width * (자신 / 전체)
    //숫자일 때
    //data안에서 element d 중 number 중 최대값
    //range: 전체 width, height값 = 범위
    const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, xValue)])
    .range([0, innerWidth])

    //문자일 때
    const yScale = d3.scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])

    //세로 
    const yAxis = d3.axisLeft(yScale);
    // const xAxis = d3.axisLeft(xScale);

    const g = svg.append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top +')')
    
    g.append('g').call(axisLeft(yScale));
    g.append('g').call(axisBottom(xScale));


    console.log(xScale.domain());
    console.log(yScale.domain());
    //data join 1 enter 2 update 3 exit
    g.selectAll('rect').data(data)
       .enter().append('rect')
       // 순서대로 간격을 띄고 싶음 -> name순서 -> 높이 * (자신1*가중치 순서 / 전체)
       .attr('y', d => yScale(yValue(d)))
       // number만큼 넓이로 하고 싶음 -> number수 
       .attr('width', d => xScale(xValue(d)))
       // 같은 넓이로 -> name수 -> bandwidth(): 높이 * (자신1*가중치1 / 전체)
       .attr('height', yScale.bandwidth())

    
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