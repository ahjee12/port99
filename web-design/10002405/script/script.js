const menuBtn = $(".menuIn > li");
const subMenu = $(".submenu");
const navWrap = $(".navWrap");

menuBtn.mouseover(function () {
//       subMenu.stop().slideDown(400);
//       navWrap.stop().slideDown(400);
     $(this).find(".submenu").stop().slideDown(500);
})
menuBtn.mouseout(function () {
//       subMenu.stop().slideUp(400);
//       navWrap.stop().slideUp(400);
     $(this).find(".submenu").stop().slideUp(500);
})

const sliderList = $(".sliderList");
//const sliderImg = $(".sliderImg");

sliderList.children("div:gt(0)").hide();
//let current = 0;
function autoPlay(){
//    let next = (current+1)%3;
//    sliderList.find("div").eq(current).fadeOut();
//    sliderList.find("div").eq(next).fadeIn();
//    current = next ;
 
 $(".sliderImg:first-child").fadeOut().next("div").fadeIn().end().appendTo(sliderList);
 
//    console.log($(".sliderImg:first-child"));
}

setInterval(function(){
 autoPlay();
},3000);

const notice1 = $(".tab > ul >li:first-child");
console.log(notice1);
const modalBtn = $(".modalBtn");
notice1.click(function(){
 $("#modal").addClass("active");
})
modalBtn.click(function(){
 $("#modal").removeClass("active");
})




























