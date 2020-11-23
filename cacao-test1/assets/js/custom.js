
/*드롭 더 코인스*/
function dropcoins(){
    let upperCoins = $('.container-coin');
    let bottomCoins = $('.container-bottomCoin');

    upperCoins.addClass('active');
    bottomCoins.addClass('active');
}
dropcoins();

/*시차 효과*/
function parallax(){
    // let parallaxValue = 0;
    $(window).scroll(function(){
        let upperCoins = $('.container-coin');
        let scrollTop = $(window).scrollTop();
        let offsetTop = upperCoins.offset().top;
       
        let parallaxValue = (scrollTop - offsetTop)*0.06;
        if(scrollTop <= 0 ){
            upperCoins.css({transform: "translate(0,0)"});
        }
        upperCoins.css({transform: "translate(0,"+-parallaxValue+"%)"});
        //sol#2 높이 많큼 움직이기
        // let height =  parseInt(upperCoins.height());
        // let offsetBottom = offsetTop + height;
        // if(scrollTop <= 0 ){
        //       upperCoins.css({transform: "translate(0,0%)"});

        // }
        // if(scrollTop > offsetTop && scrollTop <= offsetBottom){
        //     let range = (scrollTop - offsetTop)/height;
        //     upperCoins.css({transform: "translate(0,"+-range+"%)"})
        // }
    })
}
parallax();

/*문 닫기*/
function door(){
    let upperDoor = $('.container-upperDoor');
    let bottomDoor = $('.container-bottomDoor');
    let subButton = $('.container-subButton');
    let tl = new TimelineMax();
    tl.to(upperDoor,{duration: 0.7, bottom: '49.5%', ease:Bounce.easeOut})
      .to(bottomDoor,{duration: 0.7, top: '50%', ease:Bounce.easeOut, delay: -0.7})
      .to(subButton,{duration: 0.7, y: 0, ease: "power4.out"})
}

/*참여하기 버튼 클릭*/
//함수로 다시 하기
let mainButton = $('.container-mainButton');
    mainButton.on('click',function(e){
        e.preventDefault();
        door()
})









