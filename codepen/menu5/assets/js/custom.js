$(".ham-wrap").click(function(){
  //sol#1
  $(".ham").toggleClass("show");
  $("nav ul").slideToggle();

   //sol#2 
  // if($(".ham").hasClass('show') == false){
  //   $(".ham").addClass('show')
  //   $("nav ul").css({display: 'block'});

  // }else{
  //   $(".ham").removeClass('show')
  //   $("nav ul").css({display: 'none'});
  // }
   
})
  
  $(window).resize(function(){
    var wWidth = $(window).outerWidth();
    $(".wi").text(wWidth);
    
    //sol#1
    if(wWidth >=800 && $("#nav ul").is(":hidden")){
      $("nav ul").removeAttr("style");
 
    }

    //sol#2
    // if(wWidth >=800){
    //     $("nav ul").removeAttr("style");
    //     $(".ham").removeClass('show')
    //   }
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
    let length = $("#contents > div").length;
    console.log(length);

    // if(wScroll > $("#contents > div").eq(0).offset().top){
    //   $("nav ul li").eq(0).addClass("active").siblings().removeClass("active")
    // }
    // if(wScroll >= $("#contents > div").eq(1).offset().top){
    //   $("nav ul li").eq(1).addClass("active").siblings().removeClass("active")
    // }
    // if(wScroll >= $("#contents > div").eq(2).offset().top){
    //   $("nav ul li").eq(2).addClass("active").siblings().removeClass("active")
    // }
    // if(wScroll >= $("#contents > div").eq(3).offset().top){
    //   $("nav ul li").eq(3).addClass("active").siblings().removeClass("active")
    // }
    // if(wScroll >= $("#contents > div").eq(4).offset().top){
    //   $("nav ul li").eq(4).addClass("active").siblings().removeClass("active")
    // }
    // if(wScroll >= $("#contents > div").eq(5).offset().top){
    //   $("nav ul li").eq(5).addClass("active").siblings().removeClass("active")
    // }

    for(i = 0; i< length; i++){
      if( wScroll >= $("#contents > div").eq(i).offset().top){
        $("nav ul li").eq(i).addClass("active").siblings().removeClass("active")
      }
    }
  })