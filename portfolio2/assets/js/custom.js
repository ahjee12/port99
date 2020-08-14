/* -----------메인------------ */
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

/* ------------메뉴------------ */


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
  
  //pick클래스가 붙어있지 않을 때(아무것도 붙어있지 않음 OR hide클래스 붙어있음)
  if (boxCorrespondingToTheInput.hasClass('pick') == false){
     // 이미 클릭돼서 hide 클래스 붙은 박스일 때는 hide클래스 제거, pick클래스 붙임
     boxCorrespondingToTheInput.removeClass('hide');
     boxCorrespondingToTheInput.addClass('pick');
     console.log($('.box.pick'));
     //클릭한 input에 해당하는 박스가 아닌 박스 중 pick클래스 붙은 박스가 아닐 경우만 hide클래스 붙임
     $(".box").each(function () {
         if ($(this).hasClass('pick') == false) {
             $(this).addClass('hide');
         }
     })

  //pick클래가 붙어있을 때
  }else{
    // 이미 클릭돼서 pick 클래스 붙은 박스일 때는 pick클래스 제거, hide클래스 붙임
    boxCorrespondingToTheInput.removeClass('pick');
    boxCorrespondingToTheInput.addClass('hide');
  }

  //margin 조정
  let boxPicked = $(".box.pick");
  console.log(boxPicked);
  boxPicked.each(function(i){
      //index값은 html 순서대로 정해져 있어서 못 씀! pick클래스 붙은 박스(display block인 박스)끼리의 순서가 필요! 
      // let index = $(this).index();
      // console.log(index);
      console.log(i);
      if((i+1) % 4 == 0){
          $(this).css({'margin-right': '0'});
      }else{
          $(this).css({'margin-right': '2%'});
      }
  })

  //input 체크 원상 복귀될 때 (체크 모두 안 했을 때)
  let count = 0;
        //각 input의 체크여부 검사
        inputBtn.each(function(){
            console.log($(this).is(":checked"));
            //체크 안 된 경우 count +1
            if(!$(this).is(":checked")){
                count ++;
            }
        })
        // console.log(inputBtn.is(":checked").length);
        //
        if(count == inputBtn.length){
          ResetAllBoxs()
        }
})

clearFilterBtn.click(function(){
  ResetAllBoxs()
})

function ResetAllBoxs(){
  $(".box").removeClass("hide");
  $(".box").removeClass("pick");
 
  $('.box').each(function(){
      let boxIndex = $(this).index();
      console.log(boxIndex);
      if((boxIndex+1) % 4 == 0){
          $(this).css({'margin-right': '0'});
      }else{
          $(this).css({'margin-right': '2%'});
      }
  })
}
