var s = skrollr.init();
skrollr.init({
  smoothScrolling: false
});
infoScrollTop = $(".info strong");
$(window).scroll(function () {
  const scrollTop = $(window).scrollTop();
  infoScrollTop.text(parseInt(scrollTop));
})
/*---------------헤더-네비게이션---------------- */
const headerNav = $('.header-center-nav ul li');
console.log(headerNav);

//네비게이션 클릭할 때
const pageGroup = $('#contents .page-group');
console.log(pageGroup);

const slideNav = $(".header-center-nav .slide");
console.log(slideNav);

headerNav.on('click',function(e){ 
  e.preventDefault();
  let index = $(this).index();
  console.log(index);
  //heaerNav에 <div class="slide">포함돼 있어서 그것부터 index 1로 시작함. 
  let eachPage = pageGroup.eq(index-1);
  console.log(eachPage);
  let offset = eachPage.offset().top;
  $('html, body').animate({scrollTop: offset},1200,'swing');

  //클릭만 하는 경우
  // let positionNav =  $(this).position();
  // let width = $(this).outerWidth();
  // slideNav.css({opacity: 1, left: +positionNav.left, width: width});
})

$(window).scroll(function(){
  let scrollTop = $(window).scrollTop();
  //each문 headerNav.each(function(){})
  for(i=0; i<headerNav.length;i++){
    // console.log(scrollTop);
    // console.log(pageGroup.eq(i).offset().top);
    if(scrollTop<parseInt(pageGroup.eq(0).offset().top)){
      slideNav.css({opacity: 0});
    }
    if(scrollTop>=parseInt(pageGroup.eq(i).offset().top)){
      slideNav.css({opacity: 1, left: +headerNav.eq(i).position().left, width: headerNav.eq(i).outerWidth()});
    }
  }//for문
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

// function scrollChangedInPageSite(){
//   OffsetTopItemListSite = parseInt(itemListSite.offset().top);
//   for(var i = 0;i<pathStripes.length;i++){
//     console.log(state.scroll.top);
//     console.log(state.size.docY);
//     console.log(state.size.y);
//     pathStripes[i].style.strokeDashoffset = 12599*(1-((state.scroll.top-OffsetTopItemListSite)/(itemListSite.outerHeight() - state.size.y)*1.05));
//     console.log(pathStripes[i].style.strokeDashoffset);
//   }
// }

// function scrollChangedInPageHover(){
  
// }

// const { watchViewport } = tornis;
// const { getViewportState } = tornis;

// const updateValues = ({ size, scroll, mouse, orientation }) => {
//   state = getViewportState();
//   if (scroll.changed) {
//     scrollChangedInPageSite();
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

const nameOfButtons = $(".container-button-name .name");
const buttonsInTheLand = $(".container-button .button");
// const buttonInTheLand1 = $(".container-button .button").eq(0);

mainStart();
function mainStart(){
    var tl = new TimelineMax();

    //transform translate(0.9,0)/ x: 0.9, y: 0-> x: 1, y: 1 적용하려면 scss animation 따로 클래스 만들어서 빼야 함..;
    tl.to(land, {duration: 2, scale: 1, alpha: 1, ease: Elastic.easeOut.config(1, 0.9), delay: 0.15})
      .to(home, {duration: 1.25 , y : 0 , scaleY: 1 , alpha: 1 , ease:Bounce.easeOut , delay: -1})
      .to(table, {duration: 1.25 , y : 0, scaleY: 1 , alpha: 1 , ease:Bounce.easeOut , delay: -1})
      .to(hut, {duration: 1.25 , y : 0 ,  scaleY: 1 , alpha: 1 , ease:Bounce.easeOut, delay: -1})
      .to(road, {duration: 1.25 , y : 0 , scaleY: 1 , alpha: 1 , ease:Bounce.easeOut, delay: -1})
      .to(greenhouse, {duration: 1.25 , y : 0, scaleY: 1 , alpha: 1 , ease:Bounce.easeOut , delay: -1})
      .to(field, {duration: 0.4, scale: 1, opacity: 1, delay: -0.6})
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
      .to(rosemose, {duration: 0.4, scale: 1, alpha: 1, delay: -0.25})
      .to(buttonsInTheLand, {duration: 0.4, alpha: 1, delay: -0.25})
      .to(nameOfButtons, {duration: 0, alpha: 1, delay: -0.4})

    //딸기 애니메이션 시작
    setTimeout(function(){
      strawberryAniStart();
    },5000);
}

const strawberry = $('.uiux-land .strawberry');
//딸기 애니메이션 시작
function strawberryAniStart(){
  let i = 0;
  let sumDelay = 0;
  let transitionOpa = 0.4;
  let sumTransitionOpa = 0;
  strawberry.each(function(){
    //strawberry sibling에 딸기 아닌 요소가 있어서 index는 안 됨..
    //let index = $(this).index();
    let delay = i*0.3;
    sumDelay += delay;
    $(this).css({'opacity' : '1' , 'transition' : 'opacity '+transitionOpa+'s '+delay+'s ease'});
    i++;
    sumTransitionOpa = i*transitionOpa;
  })

  setTimeout(function(){
    strawberryAniEnd()
  },1800)
}

//딸기 애니메이션 시작
function strawberryAniEnd(){
  let i = 0;
  let sumDelay = 0;
  let transitionOpa = 0.4;
  let sumTransitionOpa = 0;
  strawberry.each(function(){
    let delay = i*0.3;
    sumDelay += delay;
    $(this).css({'opacity' : '0' , 'transition' : 'opacity '+transitionOpa+'s '+delay+'s ease'});
    i++;
    sumTransitionOpa = i*transitionOpa;
  })

  setTimeout(function(){
    strawberryAniStart()
  },1800)
}


//버튼 이름 글자를 하나씩 나눠서 div, span 태그에 넣기
nameOfButtons.each(function(){
  let text = $(this).find('h4').text();
  let split = text.split("").join("</span><span aria-hidden='true'>");
  split = "<span aira-hidden='true'>"+ split +"</span>";
  $(this).find('h4').html(split).attr("aria-label", text);
  $(this).find('h4 > span').each(function(){
    let index = $(this).index();
    $(this).css({'animation-delay': (0.05*(index))+'s'});
  })
})

// 버튼 오버 했을 때 버튼에 대응되는 이름에 active클래스 추가
// const buttonsInTheLand = $(".container-button .button");
buttonsInTheLand.hover(function(){
  let index = $(this).index();
  let name = nameOfButtons.eq(index);
  // name.addClass('active').siblings().removeClass('active');
  name.addClass('active');
},function(){
  let index = $(this).index();
  let name = nameOfButtons.eq(index);
  name.removeClass('active');
})

//heaer에서 선언 const pageGroup = $('#contents .page-group');
// 버튼 클릭했을 때 해당 페이지로 이동
buttonsInTheLand.on('click',function(e){
  e.preventDefault();
  let index = $(this).index();
  let offsetTop = pageGroup.eq(index).offset().top;
  $('html, body').animate({scrollTop: offsetTop},1200,'swing')
})
/* ------------메뉴------------ */
const dragAreaInTheMenu = $('.drag-menu');

//hover만 하면 안 됨! 제자리로 안 돌아가 감
// dragAreaInTheMenu.hover(function(e){
//   let tl = new TimelineMax();
//   let target = $(this).find('a');
//   tl.to(target,1.8,{ x: 0, y: 0 , ease: Elastic.easeOut});
// },function(e){
//   let tl = new TimelineMax();
//   let target = $(this).find('a');
//   let movementX = $(this).width() / 2;
//   let movementY = $(this).height() / 3;
//   let relX = e.pageX - $(this).offset().left;
//   let relY = e.pageY - $(this).offset().top;
//   tl.to(target,1,{ x: (relX - $(this).width() / 2) / $(this).width() * movementX, y: (relY - $(this).height() / 2) / $(this).height() * movementY , ease: Power2.easeOut});
// })

//each문 필요
dragAreaInTheMenu.each(function(){
  //오버 안 했을 때
  $(this).on('mouseleave', function(e) {
    let tl = new TimelineMax();
      let target = $(this).find('a');
      tl.to(target,1.8,{ x: 0, y: 0 , ease: Elastic.easeOut});
  });

  //오버했을 때
  $(this).on('mousemove', function(e) {
    let tl = new TimelineMax();
      let target = $(this).find('a');
      let movementX = $(this).width() /1.5;
      let movementY = $(this).height() /1.5;
      //각 dragArea 박스 맨위 왼쪽을 마우스 위치 (0,0)으로 만들기 
      let newX = e.pageX - $(this).offset().left;
      let newY = e.pageY - $(this).offset().top;
      //각 dragArea 박스 정가운데를 마우스 위치 (0,0)으로 만들기 
      let newX2 = newX - $(this).width() / 2;
      let newY2 = newY - $(this).height() / 2;
      tl.to(target,1,{ x: newX2 / $(this).width() * movementX, y: newY2 / $(this).height() * movementY , ease: Power2.easeOut});
  });
})

/* --------애니메이션------------ */
//input 버튼
let inputBtn = $(".animation-style input");
console.log(inputBtn);
let inputBtnValue = '';
let boxCorrespondingToTheInput = '';



inputBtn.click(function(){
  
  inputBtnValue = $(this).attr('value');
  console.log(inputBtnValue);
  boxCorrespondingToTheInput = $(inputBtnValue).parent('.box');
  console.log(boxCorrespondingToTheInput);
  
  //input 클릭했을 때 label안에 dot 생기기, 사라지기 
  let index  = $(this).parent('.checkbox').index();
  console.log(index);
  let dot = $('.controls .dot').eq(index);
  let dotDisplay = dot.css('display');
  if(dotDisplay == "none"){
    dot.css({display: 'block'});
  }else{
    dot.css({display: 'none'});
  }

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
        if(count == inputBtn.length){
          ResetAllBoxs()
        }
})

//클리어 버튼
const clearFilterBtn = $("#reset");
clearFilterBtn.click(function(){
  ResetAllBoxs()
})

function ResetAllBoxs(){
  $('.controls label .dot').css({display:'none'});
  $(".filter-container .box").removeClass("hide");
  $(".filter-container .box").removeClass("pick");
 
  $('.filter-container .box').each(function(){
      let boxIndex = $(this).index();
      console.log(boxIndex);
      if((boxIndex+1) % 4 == 0){
          $(this).css({'margin-right': '0'});
      }else{
          $(this).css({'margin-right': '2%'});
      }
  })
}

//필터 폼 
gsap.registerPlugin(ScrollTrigger);
//2번째 page-group에 왔을 때 
// const pageGroup = $('#contents .page-group'); 헤더 네비에서 정의
// const pageGroupNumber2 = $('.animation-style');
pageGroupNumbertwoStart();
function pageGroupNumbertwoStart(){
//  gsap.to('.controls',{
//     scrollTrigger:{
//       trigger: ".animation-style",
//       start: "top bottom",
//       end: "bottom top",
//       markers: true
//     },
//     x: '100%'
//   })

}
$(window).scroll(function(){
  const controller = $('.controls');
  const filterContainer =  $('.filter-container');
  let scrollTop = $(window).scrollTop();
  //사이즈 바뀌면 offsetTop값도 자동 바뀜
  let offsetTop = pageGroup.eq(1).offset().top;
  console.log(offsetTop);
  //필터 컨테이너 기준
  // let offsetBottom = filterContainer.offset().top + filterContainer.outerHeight();
  //페이지 기준
  let offsetBottom = offsetTop + pageGroup.eq(1).outerHeight();
  let end = offsetBottom - ($(window).height()/2);
  var tl = new TimelineMax();
  if(scrollTop>=parseInt(offsetTop) && scrollTop<=end){
    tl.to(controller,{duration: 0.5, x: 0, ease: "power4.out"});
  }else{
    tl.to(controller,{duration: 0.5, x: '100%',ease: "power4.out"});
  }
})

/* --------오버------------ */
const itemListHover = $('.hover-style .item-list');
const ContainerItemLeft = $('.hover-style .container-item-left');
const ContainerItemRight = $('.hover-style .container-item-right');
// pageGroupNumber3Scroll()
// function pageGroupNumber3Scroll(){
//   let offsetTop = pageGroup.eq(2).find('.container').offset().top;

//   ContainerItemLeft.eq(0).attr('data-'+0,"transform: translate(0,0)");
//   ContainerItemLeft.eq(0).attr('data-'+parseInt(offsetTop),"transform: translate(-100%,0)");

//   ContainerItemRIght.eq(0).attr('data-'+0,"transform: translate(0,0)");
//   ContainerItemRIght.eq(0).attr('data-'+parseInt(offsetTop),"transform: translate(100%,0)");
// }

// pathStripes.attr('data-'+0,"stroke-dashoffset: "+12599)
// pathStripes.attr('data-'+OffsetTopItemListSite,"stroke-dashoffset: "+12599)
// pathStripes.attr('data-'+OffsetBottomItemListSite,"stroke-dashoffset: "+0)
//---------------------------------------------------------------------------------
let offsetTopContainerItemLeft2 = parseInt(ContainerItemLeft.eq(2).offset().top);
let offsetTopContainerItemRight2 = parseInt(ContainerItemRight.eq(2).offset().top);
// console.log(offsetTopContainerItemLeft2);

let containerItemLeft2Height =  parseInt(ContainerItemLeft.eq(2).outerHeight());
let containerItemRight2Height =  parseInt(ContainerItemRight.eq(2).outerHeight());

let offsetBottomContainerItemLeft2 = offsetTopContainerItemLeft2 + containerItemLeft2Height;
let offsetBottomContainerItemRight2 = offsetTopContainerItemLeft2 + containerItemRight2Height;
// console.log(offsetBottomContainerItemLeft2);
// console.log((scrollTop-offsetTopContainerItemLeft2)/offsetBottomContainerItemLeft2);

//---------------------------------------------------------------------------------
let offsetTopContainerItemLeft1 = parseInt(ContainerItemLeft.eq(1).offset().top);
let offsetTopContainerItemRight1 = parseInt(ContainerItemRight.eq(1).offset().top);

let containerItemLeft1Height =  parseInt(ContainerItemLeft.eq(1).outerHeight());
let containerItemRight1Height =  parseInt(ContainerItemRight.eq(1).outerHeight());

let offsetBottomContainerItemLeft1 = offsetTopContainerItemLeft1 + containerItemLeft1Height;
let offsetBottomContainerItemRight1 = offsetTopContainerItemLeft1 + containerItemRight1Height;
//-------------------------------------------------------------------------------------------
//scroll함수에서 offset값은 resize되면 자동 바뀌지만 translate으로 움직인다고 바뀌지는 않음
$(window).scroll(function(){
  let scrollTop = $(window).scrollTop();
  // console.log(scrollTop);
  
  

  //시작점1 (위치 이상할 때 있어서 확실하게 해줌)
  if(scrollTop< offsetTopContainerItemLeft2){
    //왼쪽
    ContainerItemLeft.eq(1).css({transform:'translate(0,0)'});
    ContainerItemLeft.eq(0).css({transform:'translate(0,0)'});
    //오른쪽
    ContainerItemRight.eq(1).css({transform:'translate(0,0)'});
    ContainerItemRight.eq(0).css({transform:'translate(0,0)'});
  }
  //스크롤1 
  if(scrollTop>= offsetTopContainerItemLeft2 && scrollTop<= offsetBottomContainerItemLeft2){
    //왼쪽
    ContainerItemLeft.eq(1).css({transform: "translate(0,"+100*((scrollTop-offsetTopContainerItemLeft2)/containerItemLeft2Height)+"%)"});
    ContainerItemLeft.eq(0).css({transform: "translate(0,"+100*((scrollTop-offsetTopContainerItemLeft2)/containerItemLeft2Height)+"%)"});
    //오른쪽
    ContainerItemRight.eq(1).css({transform: "translate(0,"+200*((scrollTop-offsetTopContainerItemLeft2)/containerItemLeft2Height)+"%)"});
    ContainerItemRight.eq(0).css({transform: "translate(0,"+200*((scrollTop-offsetTopContainerItemLeft2)/containerItemLeft2Height)+"%)"});

    // offsetTopContainerItemRight1 += (2*((scrollTop-offsetTopContainerItemLeft2)/containerItemLeft2Height))*containerItemLeft2Height ;
    // console.log(offsetTopContainerItemRight1);
    // offsetBottomContainerItemRight1 += (2*((scrollTop-offsetTopContainerItemLeft2)/containerItemLeft2Height))*containerItemLeft2Height ;
  }
  //끝점1 (위치 이상할 때 있어서 확실하게 해줌)
  if(scrollTop>offsetBottomContainerItemLeft2){

    //스크롤2
    if(scrollTop>= offsetTopContainerItemRight1+(containerItemRight1Height*2) && scrollTop<= offsetBottomContainerItemRight1+(containerItemRight1Height*2)){
      //오른쪽
      ContainerItemRight.eq(0).css({transform: "translate(0,"+(100*((scrollTop-offsetTopContainerItemRight1)/containerItemRight1Height))+200+"%)"});
      
    }
    if(scrollTop<offsetTopContainerItemRight1 +(containerItemRight1Height*2)){
      //왼쪽
      ContainerItemLeft.eq(1).css({transform:'translate(0,100%)'});
      ContainerItemLeft.eq(0).css({transform:'translate(0,100%)'});
      //오른쪽
      ContainerItemRight.eq(1).css({transform:'translate(0,200%)'});
      ContainerItemRight.eq(0).css({transform:'translate(0,200%)'});
    }
    
  }


})
/* --------패럴럭스------------ */
var swiper = new Swiper('.item-list-parallax .swiper-container', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: '2%',
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
