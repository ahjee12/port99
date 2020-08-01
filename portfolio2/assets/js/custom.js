// headerMenu = $(".header-center-nav").find("ul li");
// console.log(headerMenu);

// headerMenu.hover(function(){
//     $(this).css({'display':'block'},{'left':0});
// })

window.onload = function(){
    var tl = new TimelineMax();
    var home = $('.home');
    var table = $('.table');
    var hut = $('.hut');
    var road = $('.road');
    var greenhouse = $('.greenhouse');

    // tl.set(home, {opacity: '0', left: '62.35%', top: '-100%'})
    //   .to(home, {opacity: '1',left: '62.35%', top: '8.75%', duration: '1', ease:Bounce.easeOut})

    tl.to(home, {opacity: '1',left: '62.35%', top: '8.75%', duration: '1', ease:Bounce.easeOut});


}
// var tl = new TimelineMax();
//     var home = $('.home');
//     var table = $('.table');
//     var hut = $('.hut');
//     var road = $('.road');
//     var greenhouse = $('.greenhouse');

//     // tl.set(home, {opacity: '0', left: '62.35%', top: '-100%'})
//     //   .to(home, {opacity: '1',left: '62.35%', top: '8.75%', duration: '1', ease:Bounce.easeOut})

//     tl.to(home, {opacity: '1',left: '62.35%', top: '8.75%', duration: '1', ease:Bounce.easeOut});
