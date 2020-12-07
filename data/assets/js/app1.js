const svg = d3.select('svg');
console.log(svg);
svg.attr('width', 600)
   .attr('height', 600)

const width = svg.attr('width');
const height = svg.attr('height');
console.log(width);


const widthG = width/2;                    
const heightG = height/2;                    
const g = svg.append('g')
// .attr('transform', 'translate(200, 200)')
.attr('transform', 'translate('+widthG+','+heightG+')')

//html에 inline으로 넣은 style 속성- 속성값은 string으로 인식!!! 
//string인지 integer인지 구분하려면 console.log(typeof )
//string -> int parseInt string -> float parseFloat * +() +붙이기
const circle = g.append('circle')
                .attr('r', width/2)
                .attr('fill', 'yellow')
                .attr('stroke', 'black')

//대칭일 때 가운데에 놓고 양 옆으로 위치 이동하기!!
const eyeSpacing = 100;
const eyeRadius = 30;
const eyeYoffset = 70;

const eyesG = g.append('g')
.attr('transform', 'translate(0,'+-eyeYoffset+')')

const leftEye = eyesG.append('circle')
                    .attr('r', eyeRadius)
                    .attr('cx',- eyeSpacing)
                   

const rightEye = eyesG.append('circle')
                    .attr('r', eyeRadius)
                    .attr('cx',+ eyeSpacing)
                   

const mouth = g.append('path')
                .attr('d', d3.arc()({ 
                innerRadius: 160,
                outerRadius: 200,
                startAngle: Math.PI/2,
                endAngle: Math.PI*3/2
                }))

const eyebrowWidth = 100;
const eyebrowHeight = 40;
const eyebrowYoffsetPlus = 100;
const eyebrowG = eyesG.append('g')
                      .attr('transform', 'translate(0,'+-eyebrowYoffsetPlus+')');

                eyebrowG.transition()
                        .duration(1000)
                        .attr('transform', 'translate(0,'+(-eyebrowYoffsetPlus-10)+')')
                        .transition()
                        .duration(1000)
                        .attr('transform', 'translate(0,'+-eyebrowYoffsetPlus+')')


const leftEyebrow = eyebrowG.append('rect')
                             .attr('width', eyebrowWidth)      
                             .attr('height', eyebrowHeight)      
                             .attr('x', -eyeSpacing - (eyebrowWidth/2))
                             
                         

const rightEyebrow = eyebrowG.append('rect')
                            .attr('width', eyebrowWidth)      
                            .attr('height', eyebrowHeight)      
                            .attr('x', eyeSpacing - (eyebrowWidth/2))
                 
                          


           
      

