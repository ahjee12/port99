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

const canvas = d3.select('.canvas');
console.log(canvas);

var dataArray  = [4, 15, 34];
const svg = canvas.append('svg');

const rect = svg.append('rect')
                .attr('width', 24)