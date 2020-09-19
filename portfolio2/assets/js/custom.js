// var s = skrollr.init();
// skrollr.init({
//   smoothScrolling: false
// });
infoScrollTop = $(".info strong");
$(window).scroll(function () {
  const scrollTop = $(window).scrollTop();
  infoScrollTop.text(parseInt(scrollTop));
})
/*---------------사이트---------------- */
// const pathStripes = $('.item-list-site svg path');
// console.log(pathStripes);
// const itemListSite =  $('.item-list-site');
// let OffsetTopItemListSite = parseInt(itemListSite.offset().top) ;
// console.log(OffsetTopItemListSite);
// let OffsetBottomItemListSite = parseInt(OffsetTopItemListSite + itemListSite.outerHeight());
// console.log(OffsetBottomItemListSite);
// let windowHeight = $(window).innerHeight();
// console.log(windowHeight);

// function scrollChanged(){
//   OffsetTopItemListSite = parseInt(itemListSite.offset().top);
//   for(var i = 0;i<pathStripes.length;i++){
//     console.log(state.scroll.top);
//     console.log(state.size.docY);
//     console.log(state.size.y);
//     pathStripes[i].style.strokeDashoffset = 12599*(1-((state.scroll.top-OffsetTopItemListSite)/(itemListSite.outerHeight() - state.size.y)*1.05));
//     console.log(pathStripes[i].style.strokeDashoffset);
//   }
// }

// const { watchViewport } = tornis;
// const { getViewportState } = tornis;

// const updateValues = ({ size, scroll, mouse, orientation }) => {
//   state = getViewportState();
//   if (scroll.changed) {
//     scrollChanged();
//   }
// };

// watchViewport(updateValues);

//아이패드 사이트 이름 글자를 하나씩 나눠서 div, span 태그에 넣기
const site = $(".item-list-site .site");

site.each(function(){
  let text  = $(this).find('.site-name > h3').text();
  let text2  = $(this).find('.site-name > h4').text();
  let split = text.split("").join("</span></div><div class='spell'><span aria-hidden='true'>");
  let split2 = text2.split("").join("</span></div><div class='spell'><span aria-hidden='true'>");
  // let split = text.split("").join("</span><span aria-hidden='true'>");
  console.log(split);
  split = "<div class='spell'><span aira-hidden='true'>"+ split +"</span></div>";
  split2 = "<div class='spell'><span aira-hidden='true'>"+ split2 +"</span></div>";
  // split = "<span aira-hidden='true'>"+ split +"</span>";
  $(this).find('.site-name > h3').html(split).attr("aria-label", text);
  $(this).find('.site-name > h4').html(split2).attr("aria-label", text2);

})

//sol#2
// pathStripes.attr('data-'+0,"stroke-dashoffset: "+12599)
// pathStripes.attr('data-'+OffsetTopItemListSite,"stroke-dashoffset: "+12599)
// pathStripes.attr('data-'+OffsetBottomItemListSite,"stroke-dashoffset: "+0)



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

    // tl.to(land, {duration: 2, scale: 1, alpha: 1, ease: Elastic.easeOut.config(1, 0.9), delay: 0.15})
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


    // tl.to(land, {duration: 2, scale: 1, alpha: 1, ease: Elastic.easeOut.config(1, 0.9), delay: 0.15})
    //   .to(home, {duration: 1.25 , y : 0 , scaleY: 1 , alpha: 1 , ease:Bounce.easeOut , delay: -1})
    //   .to(table, {duration: 1.25 , y : 0, scaleY: 1 , alpha: 1 , ease:Bounce.easeOut , delay: -1})
    //   .to(hut, {duration: 1.25 , y : 0 ,  scaleY: 1 , alpha: 1 , ease:Bounce.easeOut, delay: -1})
    //   .to(road, {duration: 1.25 , y : 0 , scaleY: 1 , alpha: 1 , ease:Bounce.easeOut, delay: -1})
    //   .to(greenhouse, {duration: 1.25 , y : 0, scaleY: 1 , alpha: 1 , ease:Bounce.easeOut , delay: -1})
    //   .to(field, {duration: 0.4, scale: 1, alpha: 1, delay: -0.6})
    //   .to(jujubeTomato, {duration: 0.4, scale: 1, alpha: 1, delay: -0.25})
    //   .to(watermelon, {duration: 0.4, scale: 1, alpha: 1, delay: -0.25})
    //   .to(sharon, {duration: 0.4, scale: 1, alpha: 1, delay: -0.25})
    //   .to(appletree, {duration: 0.4, scale: 1, alpha: 1, delay: -0.25})
    //   .to(rice, {duration: 0.4, scale: 1, alpha: 1, delay: -0.25})
    //   .to(lavender, {duration: 0.4, scale: 1, alpha: 1, delay: -0.25})
    //   .to(cosmos, {duration: 0.4, scale: 1, alpha: 1, delay: -0.25})
    //   .to(chrysanthemum, {duration: 0.4, scale: 1, alpha: 1, delay: -0.25})
    //   .to(sunflower, {duration: 0.4, scale: 1, alpha: 1, delay: -0.25})
    //   .to(rosemose, {duration: 0.4, scale: 1, alpha: 1, delay: -0.25})
      
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

/* --------패럴럭스------------ */
var swiper = new Swiper('.item-list-parallax .swiper-container', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 50,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/* -----------마우스 효과------------ */
const slideWrap = $('.item-list-mouse .slide-wrap');
const containerOfSlides = $('.item-list-mouse .slide-container');
const slide = $('.item-list-mouse .slide');
const slideBtn = $('.item-list-mouse .slide-btn');
const containerOfDots = $('.item-list-mouse .slide-dots');

let dotIndex = "";

//슬라이드 컨테이너 너비 구하기 (속도가 느림..scss에 바로 넣어버림...)
// let countSlide = slide.length;
// let widthSlide = slideWrap.width();
// let totalWidthSlide = widthSlide*countSlide;
// containerOfSlides.css({width: totalWidthSlide});
let countSlide = slide.length;
let widthSlide = 80;
let totalWidthSlide = (80*countSlide)+'vw';
// containerOfSlides.css({width: totalWidthSlide});

//각 slide에 해당하는 닷버튼 생성 (중첩 if문 사용하기!!)
slide.each(function(i){
  if(i == 0 || i == countSlide -1){
    dotIndex += '';
  }else{
    if(i == 1){
      dotIndex += "<a href ='#' onclick='return false' class='dot dot-active'><span>"+i+"</span></a>";
    }else{
      dotIndex += "<a href ='#' onclick='return false' class='dot'><span>"+i+"</span></a>";
    }
  }
  containerOfDots.html(dotIndex);
})

//Solution #2
//슬라이드 실행
let dot = $('.item-list-mouse .dot');
function runSlider(){
  if(slide.hasClass('slider-active')){
    containerOfSlides.animate({
      left: (-80*($('.slider-active').index()))+'vw'
    },400);
    //dot
    dot.eq($('.slider-active').index()-1).addClass('dot-active').siblings().removeClass('dot-active');
  }
}
runSlider()

//슬라이드 양 옆 next, prev버튼 클릭할 때
slideBtn.on('click',function(){
  $(this).addClass('active').siblings().removeClass('active');
  if($(this).hasClass('btn-prev')){
    if($('.slider-active').prev().is(':first-of-type')){
      $('.slider-active').prev().addClass('slider-active').siblings('div').removeClass('slider-active');
      //맨 뒤 slide 1번으로 바꿔치기
      containerOfSlides.css('left',(-80*(countSlide -1))+'vw');
      slide.last().prev().addClass('slider-active').siblings('div').removeClass('slider-active');
    }else{
      $('.slider-active').prev().addClass('slider-active').siblings('div').removeClass('slider-active');
    }
  }
  if($(this).hasClass('btn-next')){
    if($('.slider-active').next().is(':last-of-type')){
      $('.slider-active').next().addClass('slider-active').siblings('div').removeClass('slider-active');
      containerOfSlides.css('left',0);
      slide.first().next().addClass('slider-active').siblings('div').removeClass('slider-active');
    }else{
      $('.slider-active').next().addClass('slider-active').siblings('div').removeClass('slider-active');
    }
  }
  runSlider();
})

//닷버튼 클릭할 때 
dot.on('click',function(){
  $(this).addClass('dot-active').siblings().removeClass('dot-active');
  console.log($('.dot-active').index() +1);
  containerOfSlides.animate({
    left: (-80*($('.dot-active').index() +1))+'vw'
  }, 400);
  slide.eq($('.dot-active').index()+1).addClass('slider-active').siblings('div').removeClass('slider-active');
})


//Solution #1
//슬라이드 이전, 다음 버튼 클릭할 때
// const btnPrev = $('.slide-btn.btn-prev');
// const btnNext = $('.slide-btn.btn-next');
// btnPrev.click(function(){
//   moveRight();
// })
// btnNext.click(function(){
//   moveLeft();
// })

// $('.slide:last-child').prependTo(containerOfSlides);
//느린 것 같아 scss에 직접 지정함
// containerOfSlides.css({transform: 'translateX('+ -widthSlide +'vw)'})
// containerOfSlides.css({marginLeft: -widthSlide +'vw'})
// function moveRight(){
//   containerOfSlides.animate({left: widthSlide+'vw'}, 400, function(){
//     $('.slide:last-child').prependTo(containerOfSlides);
//     containerOfSlides.css({left: ''});
//   });
//   slide.each()
// }
// function moveLeft(){
//   containerOfSlides.animate({left: -widthSlide+'vw'}, 400, function(){
//     $('.slide:first-child').appendTo(containerOfSlides);
//     containerOfSlides.css({left: ''});
//   });
// }

//슬라이드 요소 안에 제목 글씨를 하나씩 나눠서 span태그에 넣기
slide.each(function(){
  let text = $(this).find('.slide-title > h3').text();
  let split = text.split("").join("</span><span aria-hidden='true'>");
  console.log(split);
  split = "<span aria-hidden='true'>" + split + "</span>";
  $(this).find('.slide-title > h3').html(split).attr("aria-label", text);
  $(this).find('.slide-title > h3 > span').each(function(i){
    $(this).css({'transition-delay': (0.07*(i+1))+'s'});
  })
})

/*------------- 모바일----------------*/
const slideWrapM = $('.item-list-mobile .slide-wrap');
const containerOfSlidesM = $('.item-list-mobile .slide-container');
const slideM = $('.item-list-mobile .slide'); //cells
const slideBtnM = $('.item-list-mobile .slide-btn'); //nav
const containerOfDotsM = $('.item-list-mobile .slide-dots');
let countSlideM = slideM.length;
let selectedSlideIndex = 0;

let dotIndexM = "";

//각 슬라이드에 해당하는 dot버튼 생성
//console.log(slideM);
slideM.each(function(i){
  if(i==0){
    dotIndexM += "<a href ='#' onclick='return false' class='dot dot-active'><span>"+(i+1)+"</span></a>";
  }else{
    dotIndexM += "<a href ='#' onclick='return false' class='dot'><span>"+(i+1)+"</span></a>";
  }
 containerOfDotsM.html(dotIndexM);
})
let dotM = $('.item-list-mobile .dot') //dots

//selectItem 
function selectItem(index){
  selectedSlideIndex = index%countSlideM;

  //버튼 클릭할 때 0부터 4까지만 나오도록 해서 if문 0보다 작을 때 없어도 됨
  // if(selectedSlideIndex < 0){
  //   selectedSlideIndex += countSlideM;
  // }
  slideM.each(function(i){
    let offset = i-selectedSlideIndex;
    if(offset < 0){
      offset += countSlideM;
    }
    let index;
    for(index = 0; index < countSlideM + 1; index++){
      $(this).removeClass('s'+index).addClass('s'+(offset+1));
    }
  })
  dotM.eq(index).addClass('dot-active').siblings().removeClass('dot-active');
}

//각 슬라이드(스마트폰) 클릭할 때
slideM.click(function(){
  selectItem($(this).index());
});

//슬라이드 양 옆 next, prev버튼 클릭할 때
slideBtnM.click(function(){
  const prevOrNext = $(this).hasClass('btn-prev')? -1:1;
  const prevOrNextSlide = slideM.eq((selectedSlideIndex+prevOrNext)%countSlideM);
  //prevOrNextSlide eq가 next클릭해서 마지막 슬라이드 나오면 4나오고 prev클릭해서 마지막 슬라이드 나오면 -1나옴
  //index 따로 구해서 0부터 4까지만 대입할 수 있도록 하기
  const prevOrNextSlideIndex = prevOrNextSlide.index();
  selectItem(prevOrNextSlideIndex);
})

//닷버튼 클릭할 때
dotM.click(function(e){
  selectItem($(this).index());
  // $(this).addClass('dot-active').siblings('div').removeClass('dot-active');
})

/*------------- 모바일----------------*/
