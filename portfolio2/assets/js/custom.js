
// infoScrollTop = $(".info strong");
// $(window).scroll(function () {
//   const scrollTop = $(window).scrollTop();
//   infoScrollTop.text(parseInt(scrollTop));
// })
/*--------------------------------------------- */
/*---------------헤더-네비게이션---------------- */
/*--------------------------------------------- */
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

const hearderNavBg = headerNav.find('a span .bg');
console.log(hearderNavBg);
//네비게이션 아래 슬라이드 막대기, span안에 bg클래스 아래로 내리기
$(window).scroll(function(){
  let scrollTop = $(window).scrollTop();
  //each문 headerNav.each(function(i){})
  for(i=0; i<headerNav.length;i++){
    // console.log(scrollTop);
    // console.log(pageGroup.eq(i).offset().top);

    if(scrollTop<parseInt(pageGroup.eq(0).offset().top)){
      slideNav.css({opacity: 0});
      hearderNavBg.css({transform: 'translateY(-100%)'});
    }
    if(scrollTop>=parseInt(pageGroup.eq(i).offset().top)){
      hearderNavBg.css({transform: 'translateY(0)'});
      slideNav.css({opacity: 1, left: +headerNav.eq(i).position().left, width: headerNav.eq(i).outerWidth()});
    }
  }//for문
})

// $(window).resize(function(){

// })

//오른쪽 상단 버거메뉴 (gsap timeline 토글하는 법 써야 함)
const burgerMenu = $('.burger-menu');
const burgerMenuBtn = $('.burger-menu .button');

const topButton = $('.burger-menu .button .line').eq(0);
const middleButton = $('.burger-menu .button .line').eq(1);
const bottomButton = $('.burger-menu .button .line').eq(2);

const burgerMenuListContainer = $('.burger-list-container');
const burgerMenuList = $('.burger-list');
const burgerMenuList1 = burgerMenuList.eq(0);
const burgerMenuList2 = burgerMenuList.eq(1);
const burgerMenuList3 = burgerMenuList.eq(2);

let tlTopAndBottomBurger = new TimelineMax();
let tlMiddleBurger = new TimelineMax();
let tlBurgerList = new TimelineMax();

//각 timeline끝에 .reverse()붙여서 애니메이션 작동 전 상태를 애니메이션 작동 준비 상태로 정함
let topAndBottomR = tlTopAndBottomBurger.to(topButton,{duration: 0.15, rotation: 15, delay: 0})
                                        .to(bottomButton,{duration: 0.15, rotation: -15, delay: -0.15})
                                        .to(topButton,{duration: 0.3, rotation: -60, x: '-0.35vw', delay: 0})
                                        .to(bottomButton,{duration: 0.3, rotation: 60, x: '-0.35vw', delay: -0.3})
                                        .to(topButton,{duration: 0.2, rotation: -45, y: '0.15vw', delay: 0})
                                        .to(bottomButton,{duration: 0.2, rotation: 45, y: '-0.15vw', delay: -0.2}).reverse();

let middleR = tlMiddleBurger.to(middleButton,{duration: 0.45, x: '-2.5vw', delay: 0})
                            .to(middleButton,{duration: 0.2, opacity:0 , delay: 0}).reverse();
         
// sol#1                          
// let listR = tlBurgerList.to(burgerMenuListContainer,{duration: 0.01, scaleY: 1, delay: 0})
//                         .to(burgerMenuList1,{duration: 0.65, opacity: 1, scaleX: 1, y: 0, delay:0})
//                         .to(burgerMenuList2,{duration: 0.65, opacity: 1, scaleX: 1, y: 0, delay:-0.55})
//                         .to(burgerMenuList3,{duration: 0.65, opacity: 1, scaleX: 1, y: 0, delay:-0.45}).reverse();
// sol#2 display block, none하는 수준인 경우에도 duration 조금은 넣어야 함!                         
let listR = tlBurgerList.to(burgerMenuListContainer,{duration: 0.01, scaleY: 1, delay: 0})
                        .to(burgerMenuList,{stagger: 0.3, duration: 0.5, opacity: 1, scaleX: 1, y: 0}).reverse();

burgerMenuBtn.on('click',function(){
  topAndBottomR.reversed(!topAndBottomR.reversed());
  middleR.reversed(!middleR.reversed());
  listR.reversed(!listR.reversed());

  //click함수 안에서 timelineMax정의하고 if문 거치면 처음만 작동하는 이유: 
  //처음 클릭할 땐 타임라인 그대로 작동 but> 두 번째 클릭하면 누적돼서 작동/ timelineMax를 외부에 정의해서 누적
  // if(burgerMenu.hasClass('active') == false){
  //   burgerMenu.addClass('active');
  //   // burgerMenuF(tlTopAndBottomBurger.play(0),tlMiddleBurger.play(0),tlBurgerList.play(0));
  //   // top.play();
  //   // middle.play();
  //   // bottom.play();
  //   // top;
  //   // middle;
  //   // bottom;
  // }else{
  //   burgerMenu.removeClass('active');
  //   // burgerMenuF(tlTopAndBottomBurger.reverse(0),tlMiddleBurger.reverse(0),tlBurgerList.reverse(0));
  //   // top.reverse();
  //   // middle.reverse();
  //   // bottom.reverse();
  // }
})
//함수 써도 문제임. 변수에 to로 움직였던 거 계속 저장됨! 한 번 클릭하면 잘 작동하는 것처럼 보이지만 
//세 번째(?) 클릭할 때부터 바로 play 하는 게 아니라 play, reverse->다시 play함/ 그게 계속 쌓임
// function burgerMenuF(){
//   tlTopAndBottomBurger.to(topButton,{duration: 0.15, rotation: 15, delay: 0})
//         .to(bottomButton,{duration: 0.15, rotation: -15, delay: -0.15})
//         .to(topButton,{duration: 0.3, rotation: -60, x: '-0.35vw', delay: 0})
//         .to(bottomButton,{duration: 0.3, rotation: 60, x: '-0.35vw', delay: -0.3})
//         .to(topButton,{duration: 0.2, rotation: -45, y: '0.15vw', delay: 0})
//         .to(bottomButton,{duration: 0.2, rotation: 45, y: '-0.15vw', delay: -0.2})
    

//   tl1_2.to(middleButton,{duration: 0.45, x: '-2.5vw', delay: 0})
//         .to(middleButton,{duration: 0.2, opacity:0 , delay: 0})  

//   tl2.to(burgerMenuList1,{duration: 0.65, scaleX: 1, y: 0, delay:0})
//      .to(burgerMenuList2,{duration: 0.65, scaleX: 1, y: 0, delay:-0.55})
//      .to(burgerMenuList3,{duration: 0.65, scaleX: 1, y: 0, delay:-0.45})
// }

/*--------------------------------------------- */
/* -------------------메인--------------------- */
/*-------------------------------------------- */

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
    let tl = new TimelineMax();

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
  strawberry.each(function(){
    //strawberry sibling에 딸기 아닌 요소가 있어서 index는 안 됨..!
    //let index = $(this).index();
    let delay = i*0.3;
    sumDelay += delay;
    $(this).css({'opacity' : '1' , 'transition' : 'opacity '+transitionOpa+'s '+delay+'s ease'});
    i++;
  })

  setTimeout(function(){
    strawberryAniEnd()
  },1800)
}

//딸기 애니메이션 시작
function strawberryAniEnd(){
  strawberry.each(function(){
    $(this).css({'opacity' : '0'});
    i++;
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

//구름 
const cloudFront = $('.cloud-front');
const cloudFront1 = $('.cloud-front').eq(0);
const cloudFront2 = $('.cloud-front').eq(1);
const cloudFront3 = $('.cloud-front').eq(2);
const cloudFront4 = $('.cloud-front').eq(3);
$(window).scroll(function(){
  let scrollTop  = $(window).scrollTop();
  let heightWindow = $(window).height();
  // let scrollTop2  = $(window).scrollTop() ;
  cloudFront.each(function(){
    let index = $(this).index();
    let offsetTop = $(this).offset().top;
    let parallax = 0;
    //규칙 없을 때
    switch(index){
      //처음에 마이너스 -> 스크롤탑하고 임의 오프셋탑하고 만날 때 0 -> 스크롤탑이 더 커지면서 플러스
      case 0:
        // parallax = (scrollTop - (offsetTop - (heightWindow)))*0.3;
        // $(this).css({transform: "translate(0,"+-parallax+"px)"});
        parallax = (scrollTop - (offsetTop - (heightWindow)))*0.02;
        $(this).css({transform: "translate(0,"+-parallax+"%)"});
        break;
      case 1:
        // parallax = (scrollTop - (offsetTop - (heightWindow)))*0.2;
        // $(this).css({transform: "translate(0,"+-parallax+"px)"});
        parallax = (scrollTop - (offsetTop - (heightWindow)))*0.05;
        $(this).css({transform: "translate(0,"+-parallax+"%)"});
        break;
      case 2:
        // parallax = (scrollTop - (offsetTop - (heightWindow)))*0.6;
        // $(this).css({transform: "translate(0,"+-parallax+"px)"});
        parallax = (scrollTop - (offsetTop - (heightWindow)))*0.08;
        $(this).css({transform: "translate(0,"+-parallax+"%)"});
        break;
      case 3:
        // parallax = (scrollTop - (offsetTop - (heightWindow)))*0.5;
        // $(this).css({transform: "translate(0,"+-parallax+"px)"});
        parallax = (scrollTop - (offsetTop - (heightWindow)))*0.06;
        $(this).css({transform: "translate(0,"+-parallax+"%)"});
        break;
    }
  })
})

/*----------------------------------- */
/* ----------------메뉴-------------- */
/*----------------------------------- */
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
      tl.to(target,1, {x: newX2 / $(this).width() * movementX, y: newY2 / $(this).height() * movementY , ease: Power2.easeOut});
  });
})

/*----------------------------------*/
/*-----------애니메이션------------ */
/*----------------------------------*/

//타이틀 슬라이드


// let currentIndexAnime = 0;
setInterval(function(){
  titleAnime()
},2000)

function titleAnime(){
  const containertitleAnime = $('.animation-style .title-slide-container');
  let heightTitleAnime =  containertitleAnime.find('p').outerHeight();
  console.log(heightTitleAnime);
  // let lengthTitleAnime = containertitleAnime.find('p').length;
  // console.log(lengthTitleAnime);
  let firstTilte = containertitleAnime.find('p:first-child');


  containertitleAnime.animate({top: -heightTitleAnime},700,function(){
    containertitleAnime.find('p:first-child').appendTo(containertitleAnime);
    containertitleAnime.css({top: ""});
  })

  
  

}


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
//gsap 플러그인 ScrollTrigger 작동 안 함. 유료(?) 멤버만 사용할 수 있는 건지 모르겠음
// gsap.registerPlugin(ScrollTrigger);
//2번째 page-group에 왔을 때 
// const pageGroup = $('#contents .page-group'); 헤더 네비에서 정의
// const pageGroupNumber2 = $('.animation-style');
// pageGroupNumbertwoStart();
// function pageGroupNumbertwoStart(){
// //  gsap.to('.controls',{
// //     scrollTrigger:{
// //       trigger: ".animation-style",
// //       start: "top bottom",
// //       end: "bottom top",
// //       markers: true
// //     },
// //     x: '100%'
// //   })
// }
$(window).scroll(function(){
  const controller = $('.controls');
  const filterContainer =  $('.filter-container');
  let scrollTop = $(window).scrollTop();
  //사이즈 바뀌면 offsetTop값도 자동 바뀜
  let offsetTop = pageGroup.eq(1).offset().top;
  // console.log(offsetTop);
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

/*------------------------- */
/* --------오버------------ */
/*------------------------- */
const itemListHover = $('.hover-style .item-list');
const ContainerItemLeft = $('.hover-style .container-item-left');
const ContainerItemRight = $('.hover-style .container-item-right');
//스크롤 플러그인 작동 안 됨..;
// pageGroupNumber3Scroll()
// function pageGroupNumber3Scroll(){
//   let offsetTop = pageGroup.eq(2).find('.container').offset().top;

//   ContainerItemLeft.eq(0).attr('data-'+0,"transform: translate(0,0)");
//   ContainerItemLeft.eq(0).attr('data-'+parseInt(offsetTop),"transform: translate(-100%,0)");

//   ContainerItemRIght.eq(0).attr('data-'+0,"transform: translate(0,0)");
//   ContainerItemRIght.eq(0).attr('data-'+parseInt(offsetTop),"transform: translate(100%,0)");
// }

// //------------------------------------------------------------------------------------------
// let offsetTopContainerItemLeft2 = parseInt(ContainerItemLeft.eq(2).offset().top);
// let offsetTopContainerItemRight2 = parseInt(ContainerItemRight.eq(2).offset().top);
// // console.log(offsetTopContainerItemLeft2);

// let heightContainerItemLeft2 =  parseInt(ContainerItemLeft.eq(2).outerHeight());
// let heightContainerItemRight2 =  parseInt(ContainerItemRight.eq(2).outerHeight());

// let offsetBottomContainerItemLeft2 = offsetTopContainerItemLeft2 + heightContainerItemLeft2;
// let offsetBottomContainerItemRight2 = offsetTopContainerItemLeft2 + heightContainerItemRight2;
// // console.log(offsetBottomContainerItemLeft2);
// // console.log((scrollTop-offsetTopContainerItemLeft2)/offsetBottomContainerItemLeft2);
// //-------------------------------------------------------------------------------------------
//scroll함수에서 offset값은 resize되면 자동 바뀌지만 translate으로 움직인다고 바뀌지는 않음
$(window).scroll(function(){
  let scrollTop = $(window).scrollTop();
  // console.log(scrollTop);
  //------------------------------------------------------------------------------------------
  let offsetTopContainerItemLeft2 = parseInt(ContainerItemLeft.eq(2).offset().top);
  let offsetTopContainerItemRight2 = parseInt(ContainerItemRight.eq(2).offset().top);
  // console.log(offsetTopContainerItemLeft2);

  let heightContainerItemLeft2 =  parseInt(ContainerItemLeft.eq(2).outerHeight());
  let heightContainerItemRight2 =  parseInt(ContainerItemRight.eq(2).outerHeight());

  let offsetBottomContainerItemLeft2 = offsetTopContainerItemLeft2 + heightContainerItemLeft2;
  let offsetBottomContainerItemRight2 = offsetTopContainerItemLeft2 + heightContainerItemRight2;
  // console.log(offsetBottomContainerItemLeft2);
  // console.log((scrollTop-offsetTopContainerItemLeft2)/offsetBottomContainerItemLeft2);
  //-------------------------------------------------------------------------------------------

  //시작점1 (위치 이상할 때 있어서 확실하게 해줌, 끝까지 왜 안 갈까)
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
    ContainerItemLeft.eq(1).css({transform: "translate(0,"+100*((scrollTop-offsetTopContainerItemLeft2)/heightContainerItemLeft2)+"%)"});
    ContainerItemLeft.eq(0).css({transform: "translate(0,"+100*((scrollTop-offsetTopContainerItemLeft2)/heightContainerItemLeft2)+"%)"});
    //오른쪽
    ContainerItemRight.eq(1).css({transform: "translate(0,"+200*((scrollTop-offsetTopContainerItemLeft2)/heightContainerItemLeft2)+"%)"});
    ContainerItemRight.eq(0).css({transform: "translate(0,"+200*((scrollTop-offsetTopContainerItemLeft2)/heightContainerItemLeft2)+"%)"});

  }
  //끝점1 (위치 이상할 때 있어서 확실하게 해줌, 끝까지 왜 안 갈까 ..)
  if(scrollTop>offsetBottomContainerItemLeft2){

    //스크롤2 
    if(scrollTop>= offsetTopContainerItemRight2+(heightContainerItemRight2*2) && scrollTop<= offsetBottomContainerItemRight2+(heightContainerItemRight2*2)){
      //오른쪽
       //0~600
       let offsetDefference2_1 = scrollTop-(offsetTopContainerItemRight2+(heightContainerItemRight2*2));
      //  console.log(offsetDefference2_1);
       //0~1
       let offsetDefference2_2 =  offsetDefference2_1/heightContainerItemLeft2;
      //  console.log(offsetDefference2_2);
       //0~100
       let offsetDefference2_3 = 100*offsetDefference2_2;
      //  console.log(offsetDefference2_3);
       //200~300
       let offsetDefference2_4 = offsetDefference2_3+200;
      // console.log(offsetDefference2_4);
      ContainerItemRight.eq(0).css({transform: "translate(0,"+offsetDefference2_4+"%)"});
    }
     //스크롤3 바로 
    if(scrollTop> offsetBottomContainerItemRight2+(heightContainerItemRight2*2)){
      ContainerItemRight.eq(0).css({transform:'translate(0,300%)'});
      if(scrollTop> offsetTopContainerItemRight2+(heightContainerItemRight2*3) && scrollTop<= offsetBottomContainerItemRight2+(heightContainerItemRight2*3)){
        //0~600
        let offsetDefference3_1 = scrollTop-(offsetTopContainerItemRight2+(heightContainerItemRight2*3));
        // console.log(offsetDefference3_1);
        //0~1
        let offsetDefference3_2 = offsetDefference3_1/heightContainerItemLeft2;
        // console.log(offsetDefference3_2);
        //0~300
        let offsetDefference3_3 = 300*offsetDefference3_2;
        // console.log(offsetDefference3_3);
        //100~400
        let offsetDefference3_4 = offsetDefference3_3+100;
        // console.log(offsetDefference3_4);
        ContainerItemLeft.eq(0).css({transform: "translate(0,"+offsetDefference3_4+"%)"});
      }
      if(scrollTop> offsetBottomContainerItemRight2+(heightContainerItemRight2*3)){
        ContainerItemLeft.eq(0).css({transform: "translate(0,"+400+"%)"});
      }
    }

    if(scrollTop<offsetTopContainerItemRight2 +(heightContainerItemRight2*2)){
      //왼쪽
      ContainerItemLeft.eq(1).css({transform:'translate(0,100%)'});
      ContainerItemLeft.eq(0).css({transform:'translate(0,100%)'});
      //오른쪽
      ContainerItemRight.eq(1).css({transform:'translate(0,200%)'});
      ContainerItemRight.eq(0).css({transform:'translate(0,200%)'});
    }
    
  }


})

/*------------------------------- */
/* ----------패럴럭스------------ */
/*------------------------------- */
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

/*---------------------------------- */
/* -----------마우스 효과------------ */
/*---------------------------------- */
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
    //dot 처음 runslider() -> slider-active 클래스 있는 슬라이드 인덱스: 1 -> 인덱스 -1 해서 0 
    dot.eq($('.slider-active').index()-1).addClass('dot-active').siblings().removeClass('dot-active');
  }
}
//현재 slider-active 클래스 있는 슬라이드 인덱스: 1 -> -80vw 만큼 왼쪽으로 이동, 닷버튼 인덱스 0에 클래스 dot-active 붙이기
runSlider()

//슬라이드 양 옆 next, prev버튼 클릭할 때
slideBtn.on('click',function(){
  $(this).addClass('active').siblings().removeClass('active');
  if($(this).hasClass('btn-prev')){
    //sol#2 $(this).index() == 0
    if($('.slider-active').prev().is(':first-of-type')){
      // $('.slider-active').prev().addClass('slider-active').siblings('div').removeClass('slider-active');
      //맨 마지막(=slide1번)으로 이동
      containerOfSlides.css('left',(-80*(countSlide -1))+'vw');
      slide.last().prev().addClass('slider-active').siblings('div').removeClass('slider-active');
    }else{
      $('.slider-active').prev().addClass('slider-active').siblings('div').removeClass('slider-active');
    }
  }
  if($(this).hasClass('btn-next')){
    //sol#2 $(this).index() == slide.length -1
    if($('.slider-active').next().is(':last-of-type')){
      // $('.slider-active').next().addClass('slider-active').siblings('div').removeClass('slider-active');
      //맨 처음(=slide8번)으로 이동
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

/*--------------------------------------------- */
/*--------------------사이트-------------------- */
/*--------------------------------------------- */
const pathStripes = $('.item-list-site svg path');
// console.log(pathStripes);
const itemListSite =  $('.item-list-site');
const eachSite =  $('.item-list-site .site');

$(window).scroll(function(){
  let heightWindow = $(window).innerHeight();
  // console.log(heightWindow);
  let offsetTop = parseInt(itemListSite.offset().top);
  // console.log(offsetTop);
  let newOffsetTop = offsetTop - (heightWindow/1.25);
  let heightItemListSite = itemListSite.outerHeight()
  let OffsetBottom = offsetTop + heightItemListSite;
  // console.log(OffsetBottom);
  let newOffsetBottom = newOffsetTop + heightItemListSite
 
  let scrollTop = $(this).scrollTop();
  if(scrollTop < newOffsetTop){
    pathStripes.css({ 'stroke-dashoffset': 12599});
  }
  if(scrollTop >= newOffsetTop && scrollTop <= newOffsetBottom){
    //1.03은 좀 더 빨리 path가 나타나게 하려고 넣음/ 빨리 나타나야 내용물 보는 시간 더 길어짐
    sda = 12600 *(1- ((scrollTop-newOffsetTop)/(heightItemListSite)))
    pathStripes.css({ 'stroke-dashoffset': sda});
    if(sda<=9790){
      eachSite.eq(0).addClass('active');
      if(sda<=9487){
        eachSite.eq(1).addClass('active');
        if(sda<=7880){
          eachSite.eq(2).addClass('active');
          if(sda<=7230){
            eachSite.eq(3).addClass('active');
            if(sda<=5760){
              eachSite.eq(4).addClass('active');
              if(sda<=4353){
                eachSite.eq(5).addClass('active');
                // if(sda<=4352){
                //   eachSite.eq(6).addClass('active');
                // }else{
                //   eachSite.eq(6).removeClass('active');
                // }
              }else{
                eachSite.eq(5).removeClass('active');
              }
            }else{
              eachSite.eq(4).removeClass('active');
            }
          }else{
            eachSite.eq(3).removeClass('active');
          }
        }else{
          eachSite.eq(2).removeClass('active');
       }
      }else{
        eachSite.eq(1).removeClass('active');
      }
    }else{
      eachSite.eq(0).removeClass('active');
    }
  }
  if(scrollTop > newOffsetBottom){
    pathStripes.css({ 'stroke-dashoffset': 0});
  }
  
})
//tornis.js씀 window scroll이랑 같은 거였음 
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

/*---------------------------------- */
/*------------- 모바일----------------*/
/*---------------------------------- */
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

//타이틀 스크롤
//offset기준
const clipPath = $('.mobile-style .title-main svg');
//move 요소
const clipPathWaveShape = $('.mobile-style .title-main svg .clip');
$(window).scroll(function(){
  let scrollTop = $(window).scrollTop();
  let heightWindow  = $(window).height();
  let offsetTop = clipPath.offset().top;
  //주의 offsetTop 위쪽으로 올릴려면 윈도우 높이를 '빼줘야' 함
  let newOffsetTop = offsetTop - (heightWindow/1.5);
  let heightClipPath = clipPath.outerHeight();
  let newOffsetBottom = newOffsetTop + heightClipPath;
  if(scrollTop < newOffsetTop){
    clipPathWaveShape.css({transform: "scaleY(0)"});
  }
  if(scrollTop >= newOffsetTop && scrollTop <= newOffsetBottom){
    //0~1
    let parallax1_1 = (scrollTop-newOffsetTop)/heightClipPath;
    //0~1.5
    let parallax1_2 = 1.5*parallax1_1;
    clipPathWaveShape.css({transform: "scaleY("+parallax1_2+")"});
  }
  if(scrollTop > newOffsetBottom){
    clipPathWaveShape.css({transform: "scaleY(1.5)"});
  }
})

/*------------------------------------ */
/*------------- contact----------------*/
/*------------------------------------ */
//타이틀 스크롤
//offset기준
const titleContact = $('.contact-style .title-main svg');
//move 요소
const maskCloud = $('.contact-style .title-main svg .cloud1');
const txtThank = $('.contact-style .title-main .text-thankyou');
const txtContact = $('.contact-style .title-main .text-contact');

//구름 위로
$(window).scroll(function(){
  let scrollTop = $(window).scrollTop();
  let heightWindow  = $(window).height();
  let offsetTop = titleContact.offset().top;
  //주의 offsetTop 위쪽으로 올릴려면 윈도우 높이를 '빼줘야' 함
  let newOffsetTop = offsetTop - (heightWindow/1.5);
  // let newOffsetTop2 = offsetTop - (heightWindow/3);
  let heighttitleContact = titleContact.outerHeight();
  let newOffsetBottom = newOffsetTop + heighttitleContact;
  // let newOffsetBottom2 = newOffsetTop2 + heighttitleContact;
  //------------------------------------------------------------
  if(scrollTop < newOffsetTop){
    maskCloud.css({transform: "translateY(0)"});
  }
  if(scrollTop >= newOffsetTop && scrollTop <= newOffsetBottom){
    //0~1
    let parallax1_1 = (scrollTop-newOffsetTop)/heighttitleContact;
    //0~50
    let parallax1_2 = 50*parallax1_1;
    maskCloud.css({transform: "translateY("+-parallax1_2+"%)"});
  }
  if(scrollTop > newOffsetBottom){
    maskCloud.css({transform: "translateY(-50%)"});
  }
})

//텍스트 아래로
$(window).scroll(function(){
  let scrollTop = $(window).scrollTop();
  let heightWindow  = $(window).height();
  let offsetTop = titleContact.offset().top;
  //주의 offsetTop 위쪽으로 올릴려면 윈도우 높이를 '빼줘야' 함
  // let newOffsetTop = offsetTop - (heightWindow/1.5);
  //구름보다 늦게 움직이도록 offsetTop값을 조금만 위로 옮김
  let newOffsetTop2 = offsetTop - (heightWindow/4);
  let heighttitleContact = titleContact.outerHeight();
  // let newOffsetBottom = newOffsetTop + heighttitleContact;
  //bottom값을 줄여서(height값 줄이기) 빨리 정해진 위치로 가도록 함
  let newOffsetBottom2 = newOffsetTop2 + heighttitleContact*0.8;
  //------------------------------------------------------------
  if(scrollTop < newOffsetTop2){
    txtThank.css({transform: "translateY(0)"});
    txtContact.css({transform: "translateY(0)"});
  }
  if(scrollTop >= newOffsetTop2 && scrollTop <= newOffsetBottom2){
    let parallax2_1 = (scrollTop-newOffsetTop2)/(heighttitleContact*0.8);
    //0~70
    let parallax2_2 = 87*parallax2_1;
    txtThank.css({transform: "translateY("+parallax2_2+"%)"});
    txtContact.css({transform: "translateY("+parallax2_2+"%)"});
  }
  if(scrollTop > newOffsetBottom2){
    txtThank.css({transform: "translateY(87%)"});
    txtContact.css({transform: "translateY(87%)"});
  }
})

//send버튼 클릭했을 때 
const envelope = $('.contact-style .envelope-wrap .envelope');

const frontFlap = $('.contact-style .envelope-wrap .front-flap');
const backFlap = $('.contact-style .envelope-wrap .back-flap');
const frontPocket = $('.contact-style .envelope-wrap .front-pocket');
const paper = $('.contact-style .envelope-wrap .paper');


const formContact = $('.contact-style .envelope-wrap .email-form');
const inputTextEnvelope  = $('.email-form input[type="text"]');
const textareaEnvelope  = $('.email-form textarea');


formContact.submit(function(e){
  e.preventDefault();
  inputTextEnvelope.addClass('sending');
  textareaEnvelope.addClass('sending');

  let tl = new TimelineMax();

  tl.to(paper, {duration: 1, y: '-110%' ,ease: "power4.out", delay: 0.5})
    .to(frontPocket, {duration: 0.1, zIndex: 4 , delay: 0})
    .to(paper, {duration: 1, y: 0 ,ease: "power4.out", delay: -0.1})
    .to(paper, {duration: 0.1, zIndex: 1 , delay: 0}) //아니면 paper를 1로, pocket을 2, back front flap을 3으로 
    .to(frontPocket, {duration: 0.1, zIndex: 2 , delay: -0.1})
    .to(frontFlap, {duration: 0.1, zIndex: 3 , delay: -0.1})
    .to(backFlap, {duration: 0.1, zIndex: 3 , delay: -0.1})
    .to(frontFlap, {duration: 1, rotationZ: "-180deg" ,ease: "power4.out", delay: 0})
    .to(backFlap, {duration: 1, rotationZ: "-180deg" ,ease: "power4.out", delay: -1})
    .to(envelope, {duration: 1.5, left: "120%" ,ease: "power4.out", delay: 0})
    
    setTimeout(function(){
      inputTextEnvelope.removeClass('sending');
      textareaEnvelope.removeClass('sending');
      inputTextEnvelope.val("");
      textareaEnvelope.val("");
      tl.reverse();
    }, 5000)

})

// function rewindSubmitAnimation(){
//   inputTextEnvelope.removeClass('sending');
//   textareaEnvelope.removeClass('sending');
//   inputTextEnvelope.val("");
//   textareaEnvelope.val("");

//   // let tl = new TimelineMax();
//   // tl.to(envelope, {duration: 1.5, left: "120%" ,ease: "power4.out", delay: 0})

//   tl.reverse();
// }