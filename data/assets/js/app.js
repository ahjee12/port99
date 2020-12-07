// let a = document.querySelector(".anHello");

// let b = a.parentElement;
// b.classList.add('wrap');
// let c = b.children;
// let d = a.nextSibling;
// let e = a.previousSibling;
// // e.classList.add('active');
// let f = a.nextElementSibling;
// // let g = a.index
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

// let num = document.querySelector(".container.num");
// console.log(num);
//json - javascript object notation transmitting and receiving 

const canvas = d3.select('.canvas');
console.log(canvas);
        
const svg = canvas.select('svg');
const rect = svg.selectAll('rect');
// var dataArray  = [4, 15, 34];
// var dataArray = [
//     {width: 25, height: 144, fill: 'pink'},
//     {width: 25, height: 14, fill: 'purple'},
//     {width: 25, height: 24, fill: 'orange'},
//     {width: 25, height: 114, fill: 'blue'},
//     {width: 25, height: 84, fill: 'green'},
//     {width: 25, height: 54, fill: 'gray'}
// ]
svg.attr('width', 600)
   .attr('height', 600);
console.log(svg);

//json은 상위 폴더 data부터 시작!! 
//화살표 함수 한 줄일 때는 curly brace쓰면 안 됨!!
d3.json('assets/js/text.json')
  .then(data => {
      console.log(data);
      rect.data(data)
      .enter().append('rect')
      .attr('width', 24)
      .attr('height', d => d.height)
      .attr('fill', d =>  d.fill)
      .attr('x', (d, i) => i*30)
      .attr('y',(d, i) => 200 - d.height);
})





                