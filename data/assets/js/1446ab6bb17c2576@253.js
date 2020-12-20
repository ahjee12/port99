// https://observablehq.com/@rifqi913/sortable-bar-chart@253
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Sortable Bar Chart

Use the dropdown menu to change the sort order.`
)});
  main.variable(observer("viewof order")).define("viewof order", ["html","Promises"], function(html,Promises)
{
  const select = html`<select>
  <option selected value=name-ascending>Alphabetical 
  <option value=value-descending>Frequency, descending 
  <option value=value-ascending>Frequency, ascending 
</select>`;
  Promises.delay(2000).then(() => {
    select.selectedIndex = 1;
    select.dispatchEvent(new CustomEvent("input"));
  });
  return select;
}
);
  main.variable(observer("order")).define("order", ["Generators", "viewof order"], (G, _) => G.input(_));
  main.variable(observer("chart")).define("chart", ["d3","DOM","width","height","data","x","y","xAxis","yAxis"], function(d3,DOM,width,height,data,x,y,xAxis,yAxis)
{
  const svg = d3.select(DOM.svg(width, height));
  
  // const bar = svg.append("g")
  //     .attr("fill", "steelblue")
  //   .selectAll("rect")
  //   .data(data)
  //   .join("rect")
  //     .style("mix-blend-mode", "multiply")
  //     .attr("x", d => x(d.name))
  //     .attr("y", d => y(d.value))
  //     .attr("height", d => y(0) - y(d.value))
  //     .attr("width", x.bandwidth());
  
  const bar = svg.append("g")
        .attr("fill", "steelblue")
      .selectAll("rect")
      .data(data)
      .join("rect")
        .style("mix-blend-mode","multiply")
        .attr("x", d => x(d.name))
        .attr("y", d => y(d.value))
        .attr("height", d=> y(0)- y(d.value))
        .attr("width", x.bandwidth());
  
  const gx = svg.append("g")
      .call(xAxis);
  
  const gy = svg.append("g")
      .call(yAxis);

//   svg.node().update = () => {
//     const t = svg.transition()
//         .duration(750);

//     bar.data(data, d => d.name)
//         .order()
//       .transition(t)
//         .delay((d, i) => i * 20)
//         .attr("x", d => x(d.name));

//     gx.transition(t)
//         .call(xAxis)
//       .selectAll(".tick")
//         .delay((d, i) => i * 20);
//   };
  
    svg.node().update = () => {
        const t = svg.transition()
            .duration(750);
      
        bar.data(data, d=> d.name)
              .order()
          .transition(t)
              .delay((d,i) => i *20)
              .attr("x", d=> x(d.name));
      
        gx.transition(t)
            .call(xAxis)
           .selectAll(".tick")
            .delay((d,i) => i*20);
    
    
    }

  return svg.node();
}
);
  main.variable(observer()).define(["order","data","x","chart"], function(order,data,x,chart)
{
  switch (order) {
    case "name-ascending": data.sort((a, b) => a.name.localeCompare(b.name)); break;
    case "value-ascending": data.sort((a, b) => a.value - b.value); break;
    case "value-descending": data.sort((a, b) => b.value - a.value); break;
  }
  x.domain(data.map(d => d.name));
  chart.update();
  return order;
}
);
  main.variable(observer("data")).define("data", ["d3"], function(d3){return(
d3.csv("https://gist.githubusercontent.com/mbostock/81aa27912ad9b1ed577016797a780b2c/raw/3a807eb0cbb0f5904053ac2f9edf765e2f87a2f5/alphabet.csv", ({letter, frequency}) => ({name: letter, value: +frequency}))
)});
  main.variable(observer("x")).define("x", ["d3","data","margin","width"], function(d3,data,margin,width){return(
d3.scaleBand()
      .domain(data.map(d=> d.name))
      .range([margin.left, width - margin.right])
      .padding(0.2)
)});
  main.variable(observer("y")).define("y", ["d3","data","height","margin"], function(d3,data,height,margin){return(
d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)]).nice()
    .range([height - margin.bottom, margin.top])
)});
  main.variable(observer("xAxis")).define("xAxis", ["height","margin","d3","x"], function(height,margin,d3,x){return(
g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickSizeOuter(0))
)});
  main.variable(observer("yAxis")).define("yAxis", ["margin","d3","y"], function(margin,d3,y){return(
g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .call(g => g.select(".domain").remove())
)});
  main.variable(observer("height")).define("height", function(){return(
500
)});
  main.variable(observer("margin")).define("margin", function(){return(
{top: 20, right: 0, bottom: 30, left: 40}
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@5")
)});
  return main;
}
