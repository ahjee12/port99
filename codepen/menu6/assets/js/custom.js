//버튼을 클릭하면 사이드 바의 left값을 0으로 변경하세요
let buttonOpen = $("#side-nav >a");

buttonOpen.click(function(event){
  event.preventDefault();
  let target = $("#side-nav");
  
  target.toggleClass("on");
  if(target.hasClass("on")){
    target.animate({"left": "0"},300,"easeInOutExpo");
    $(this).text("Close");
    $(this).css("color","red");
  }else{
    target.animate({"left": "-400"},300, "easeInOutExpo");
    $(this).text("Open");
    $(this).css("color","black");
  }
})



const sideNav= $("#side-nav ul li");
const content= $("#contents >div");  
$(window).scroll(function(){
  let wScroll = $(this).scrollTop();

  if(wScroll >= parseInt($("#section1").offset().top)){
    sideNav.eq(0).addClass("active").siblings().removeClass();
  }
  if(wScroll >= parseInt($("#section2").offset().top)){
    sideNav.eq(1).addClass("active").siblings().removeClass();
  }
  if(wScroll >= parseInt($("#section3").offset().top)){
     sideNav.eq(2).addClass("active").siblings().removeClass();
  }
  if(wScroll >= parseInt($("#section4").offset().top)){
     sideNav.eq(3).addClass("active").siblings().removeClass();
  }
  if(wScroll >= parseInt($("#section5").offset().top)){
     sideNav.eq(4).addClass("active").siblings().removeClass();
  }
  if(wScroll >= parseInt($("#section6").offset().top)){
     sideNav.eq(5).addClass("active").siblings().removeClass();
  }
})