/* --------메인--------- */
// window.onload = function(){
//     mainStart();
// }
mainStart();
function mainStart(){
    var tl = new TimelineMax();
    const land = $('.land');

    const home = $('.home');
    const table = $('.table');
    const hut = $('.hut');
    const road = $('.road');
    const greenhouse = $('.greenhouse');

    const field= $('.field');
    const jujubeTomato= $('.jujubeTomato');
    const watermelon= $('.watermelon');
    const sharon= $('.sharon');
    const appletree= $('.appletree');
    const rice= $('.rice');
    const lavender= $('.lavender');
    const cosmos= $('.cosmos');
    const chrysanthemum= $('.chrysanthemum');
    const sunflower= $('.sunflower');
    const rosemose= $('.rosemose');


    tl.to(land, {duration: 2, scale: 1, alpha: 1, ease: Elastic.easeOut.config(1, 0.9), delay: 0.15})
      .to(home, {duration: 1.25 , y : 0 , scaleY: 1 , alpha: 1 , ease:Bounce.easeOut , delay: -1})
      .to(table, {duration: 1.25 , y : 0, scaleY: 1 , alpha: 1 , ease:Bounce.easeOut , delay: -1})
      .to(hut, {duration: 1.25 , y : 0 ,  scaleY: 1 , alpha: 1 , ease:Bounce.easeOut, delay: -1})
      .to(road, {duration: 1.25 , y : 0 , scaleY: 1 , alpha: 1 , ease:Bounce.easeOut, delay: -1})
      .to(greenhouse, {duration: 1.25 , y : 0, scaleY: 1 , alpha: 1 , ease:Bounce.easeOut , delay: -1})
      .to(field, {duration: 0.4, scale: 1, alpha: 1, delay: -0.6})
      .to(jujubeTomato, {duration: 0.4, scale: 1, alpha: 1, delay: -0.25})
      .to(watermelon, {duration: 0.4, scale: 1, alpha: 1, delay: -0.25})
      .to(sharon, {duration: 0.4, scale: 1, alpha: 1, delay: -0.25})
      .to(appletree, {duration: 0.4, scale: 1, alpha: 1, delay: -0.25})
      .to(rice, {duration: 0.4, scale: 1, alpha: 1, delay: -0.25})
      .to(lavender, {duration: 0.4, scale: 1, alpha: 1, delay: -0.25})
      .to(cosmos, {duration: 0.4, scale: 1, alpha: 1, delay: -0.25})
      .to(chrysanthemum, {duration: 0.4, scale: 1, alpha: 1, delay: -0.25})
      .to(sunflower, {duration: 0.4, scale: 1, alpha: 1, delay: -0.25})
      .to(rosemose, {duration: 0.4, scale: 1, alpha: 1, delay: -0.25})
    //   .to(field, {duration: 0.4, scale: 1, delay: -0.1})     
}

/* --------애니메이션------------ */
//input 버튼
let inputBtn = $("input");
console.log(inputBtn);
let inputBtnValue = '';
let boxCorrespondingToTheInput = '';

//클리어 버튼
const clearFilterBtn = $("#reset");

inputBtn.click(function(){
  inputBtnValue = $(this).attr('value');
  console.log(inputBtnValue);
  boxCorrespondingToTheInput = $(inputBtnValue).parent('.box');
  console.log(boxCorrespondingToTheInput);
  
  //pick이 붙어있지 않을 때
  if (boxCorrespondingToTheInput.hasClass('pick') == false) {

  }else{
    
  }
})





