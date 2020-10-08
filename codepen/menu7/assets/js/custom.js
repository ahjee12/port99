$("#header").each(function(){
    let header = $(this);
    let headerOffset = header.offset().top; 
    $(window).scroll(function(){
      let wScroll = $(this).scrollTop();
  
      if(wScroll > headerOffset){
        header.addClass("on");
      } else {
        header.removeClass("on");
      }
    });
  });
  
  // let headerTop = $("#header").offset().top;
  // let header = $("header");
  // console.log(headerTop);
  // $(window).scroll(function(){
  //     let wScroll = $(this).scrollTop();
  
  //     if(wScroll > headerTop){
  //       header.addClass("on");
  //     } else {
  //       header.removeClass("on");
  //     }
  //   });