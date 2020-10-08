//버튼을 클릭하면 클릭한 색을 빨간색으로 변경하세요
// $("ul li a").click(function(){
//   $("ul li a").css("color","red");
// });
// let tabMenu = $("#tab-menu > ul > li > div");
// tabMenu.hide().eq(0);
let tabMenu = $("#tab-menu");
tabMenu.find("ul > li > div").hide();
tabMenu.find("li.active > div").show();

function show(){
  //버튼을 클릭하면  - div를 보여줌
  //부모의 li태그에 클래스 추가
  //형제의 li태그에 클래스 제거
  //제거한 자식의 div태그를 숨김
  let target = $(this);
  target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("div").hide();
  
}


tabMenu.find("ul > li > a").click(show);