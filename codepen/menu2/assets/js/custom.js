//서브메뉴(선택자)를 숨기기(메서드)

// let submenu = $(".accordion > ul > li > ul > li");
// submenu.hide();

$(".sub-menu ul").hide();
$(".sub-menu a").click(function(){
  // $(this).parent(".sub-menu").children("ul").show();
  // $(this).next("ul").show();
  // $(this).next("ul").toggle();
  $(this).next("ul").slideToggle(200);
  $(this).find(".fas").toggleClass("fa-caret-down fa-caret-up");
});