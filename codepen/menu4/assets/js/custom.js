//첫 번째 박스의 높이 값을 구하세요
// let height = $("#section1").height();
// alert(height);

// for(i=0; i<6; i++){
//   let s = $("#section"+(i+1)).offset().top;
//   $(".info ul li").eq(i).find("span").text(s+"px");

// }

// let s1 = $("#section1").offset().top;
// let s2 = $("#section2").offset().top;
// let s3 = $("#section3").offset().top;
// let s4 = $("#section4").offset().top;
// let s5 = $("#section5").offset().top;
// let s6 = $("#section6").offset().top;

// $(".info ul li .s1Offset").text(s1);
// $(".info ul li .s2Offset").text(s2);
// $(".info ul li .s3Offset").text(s3);
// $(".info ul li .s4Offset").text(s4);
// $(".info ul li .s5Offset").text(s5);
// $(".info ul li .s6Offset").text(s6);

//srollTop
// $(window).scroll(function(){
//   let scroll = $(window).scrollTop();
//   $(".st").text(scroll);
// })

// $("html, body").animate({scrollTop:s4},1000)

// //parallax
// let nav = $("#nav ul li");
// let cont = $("#contents > div");

// nav.click(function(){
//   let target = $(this);
//   let index = target.index();
//   //alert(index)
//   let section = cont.eq(index);
//   let offset = section.offset().top;
//   $("html, body").animate({ scrollTop:offset }, 600);
// });
const nav = $("#nav ul li");
const cont = $("#contents > div");

nav.click(function(event){
  event.preventDefault();
  let target = $(this);
  let index = target.index();
  //alert(index);
  console.log(index);
  let section = cont.eq(index);
  let offset = section.offset().top;
  $("html, body").animate({ scrollTop : offset }, 600,"swing")
});

// $(window).scroll(function(){
//   let wScroll = $(this).scrollTop();
  
//   $(".st").text(parseInt(wScroll));
  
// });

// for(i=0; i<6; i++){
//   let sTop = $("#section"+(i+1)).offset().top;
//   $(.info ul li).eq(i).find("span").text(parseInt(sTop));
//   // let sTop+(i+1) = sTop;
// }

for(i=0; i<6; i++){
  let sTop = $("#section"+(i+1)).offset().top;
  $(".info ul li").eq(i).find("span").text(sTop+"px");
  // let s_top = [];
  // s_top[i] = sTop;
}

$(window).scroll(function(){
  let wScroll = $(this).scrollTop();
  $(".st").text(parseInt(wScroll));
  // for(i=0; i<6; i++){
  //    if(wScroll >= parseInt($("#section"+(i+1)).offset().top) ){
  //   $(".s"+(i+1)+"Offset").css("color"."red")
  //  }
  // }
  if(wScroll > parseInt($("#section1").offset().top)){
    $(".s1Offset").css("color","red");
    nav.eq(0).addClass("active").siblings().removeClass();
  }else{
     $(".s1Offset").css("color","white");
  }
  if(wScroll >= parseInt($("#section2").offset().top)){
    $(".s2Offset").css("color","red");
    nav.eq(1).addClass("active").siblings().removeClass();
  }else{
     $(".s2Offset").css("color","white");
  }
  if(wScroll >= parseInt($("#section3").offset().top)){
    $(".s3Offset").css("color","red");
     nav.eq(2).addClass("active").siblings().removeClass();
  }else{
     $(".s3Offset").css("color","white");
  }
  if(wScroll >= parseInt($("#section4").offset().top)){
    $(".s4Offset").css("color","red");
     nav.eq(3).addClass("active").siblings().removeClass();
  }else{
     $(".s4Offset").css("color","white");
  }
  if(wScroll >= parseInt($("#section5").offset().top)){
    $(".s5Offset").css("color","red");
     nav.eq(4).addClass("active").siblings().removeClass();
  }else{
     $(".s5Offset").css("color","white");
  }
  if(wScroll >= parseInt($("#section6").offset().top)){
    $(".s6Offset").css("color","red");
     nav.eq(5).addClass("active").siblings().removeClass();
  }else{
     $(".s6Offset").css("color","white");
  }
})