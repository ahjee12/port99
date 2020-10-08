// $(window).scroll(function(){
//   let wScroll = $(this).scrollTop();
  
//   if( wScroll > 200 ){
//     $("#header").addClass("on");
//   } else if( wScroll == 0) {
//     $("#header").removeClass("on");
//   }
// });

let wHeight = $(window).height(); //336 브라우저 높이
// console.log(wHeight);
let dHeight = $(document).height(); //2016 콘텐츠 높이
// let hHeight = $("#header").outerHeight(); 64 헤더 높이
// alert(wHeight);
//스크롤값 감지 변수
let moveScroll = 0;
let lastScrollTop = 0;
$(window).scroll(function(){
  moveScroll = true;
  console.log(moveScroll);
});

setInterval(function(){
  if(moveScroll){
    hasScroll();
    moveScroll = false; 
    //Q
  }
  moveScroll = 0;
  // console.log(moveScroll);
}, 250);



function hasScroll(){
  let wScroll = $(this).scrollTop();
  console.log(wScroll);
   //스크롤을 내렸을 때
  if( wScroll > lastScrollTop ){
    let wHeight = $(window).height();
    $("#header").addClass("on");
    if( wScroll + wHeight == dHeight ){
       $("#header").removeClass("on");
      console.log(wScroll);
      console.log(wHeight);
      console.log(dHeight);
    }
  } else {
    //스크롤을 올렸을 때
     $("#header").removeClass("on"); 
  }
  lastScrollTop = wScroll
}

// if(wScroll < lastScrollTop){
        // $("#header").removeClass("on");
    //    }
 //  console.log(wScroll);
     //  console.log(wHeight);
     //  console.log(dHeight);
    // if( wScroll + wHeight < dHeight ){
    //    $("#header").removeClass("on");
    //   console.log(wScroll);
    //   console.log(wHeight);
    //   console.log(dHeight);
    // }


