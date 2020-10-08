$(".ham-wrap").click(function(){
    $(".ham").toggleClass("show");
    
    $("nav ul").slideToggle();
  })
  
  $(window).resize(function(){
    var wWidth = $(window).outerWidth();
    $(".wi").text(wWidth);
    
    if(wWidth >=800 && $("#nav ul").is(":hidden")){
      $("nav ul").removeAttr("style");
    }
  })
  
  $("#nav ul li").click(function(e){
    e.preventDefault();
    let target = $(this);
    let index = target.index();
    let section = $("#contents > div").eq(index);
    let offset = section.offset().top;
    $("html, body").animate({scrollTop: offset},600,"easeInOutExpo");
  })
  
  $(window).scroll(function(){
    let wScroll = $(this).scrollTop();
    
    if(wScroll > $("#contents > div").eq(0).offset().top){
      $("nav ul li").eq(0).addClass("active").siblings().removeClass("active")
    }
    if(wScroll >= $("#contents > div").eq(1).offset().top){
      $("nav ul li").eq(1).addClass("active").siblings().removeClass("active")
    }
    if(wScroll >= $("#contents > div").eq(2).offset().top){
      $("nav ul li").eq(2).addClass("active").siblings().removeClass("active")
    }
    if(wScroll >= $("#contents > div").eq(3).offset().top){
      $("nav ul li").eq(3).addClass("active").siblings().removeClass("active")
    }
    if(wScroll >= $("#contents > div").eq(4).offset().top){
      $("nav ul li").eq(4).addClass("active").siblings().removeClass("active")
    }
    if(wScroll >= $("#contents > div").eq(5).offset().top){
      $("nav ul li").eq(5).addClass("active").siblings().removeClass("active")
    }
  })