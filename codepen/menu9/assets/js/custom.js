const nav = $("#dot ul li");
const cont = $("#contents > div");

nav.click(function(event){
  event.preventDefault();
  let target = $(this);
  let index = target.index();
  let section = cont.eq(index);
  let offset = section.offset().top;
  $("html, body").animate({ scrollTop: offset }, 600, "easeOutQuart")
});


$(window).scroll(function(){
  let wScroll = $(this).scrollTop();
  
  if(wScroll >= $("#contents > div").eq(0).offset().top){
    $("#dot ul li").eq(0).addClass("active").siblings().removeClass("active");
  }
  if(wScroll >= $("#contents > div").eq(1).offset().top){
    $("#dot ul li").eq(1).addClass("active").siblings().removeClass("active");
  }
  if(wScroll >= $("#contents > div").eq(2).offset().top){
    $("#dot ul li").eq(2).addClass("active").siblings().removeClass("active");
  }
  if(wScroll >= $("#contents > div").eq(3).offset().top){
    $("#dot ul li").eq(3).addClass("active").siblings().removeClass("active");
  }
  if(wScroll >= $("#contents > div").eq(4).offset().top){
    $("#dot ul li").eq(4).addClass("active").siblings().removeClass("active");
  }
  if(wScroll >= $("#contents > div").eq(5).offset().top){
    $("#dot ul li").eq(5).addClass("active").siblings().removeClass("active");
  }
});