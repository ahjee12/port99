var mySwiper = new Swiper('#banner .swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 5000,
  }
})

var mySwiper2 = new Swiper('.notice .swiper-container', {
  // Optional parameters 
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.notice .swiper-pagination',
    clickable: true
  }
})

var mySwiper3 = new Swiper('.story .swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView: 'auto',
  // slidesPerView: 5,
  // spaceBetween: 30,
  centeredSlides: true,
  // pagination: {
  //   el: '.story .swiper-pagination',
  //   clickable: true
  // }
})



var mySwiper2 = new Swiper('.footerNav .swiper-container', {
  // Optional parameters 
  loop: false,
  slidesPerView: 3,
  spaceBetween: 0,
  // pagination: {
  //   el: '.footerNav .swiper-pagination',
  //   clickable: true
  // }
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
})

var dragSize = 160;
var swiper = new Swiper('.swiper-container', {
  initialSlide: 0,
  slidesPerView: 'auto',
  spaceBetween: 0,
  scrollbar: {
    el: '#footerNav .swiper-scrollbar',
    dragSize: dragSize,
    draggable: true
  }
});

var mySwiper2 = new Swiper('.farmer .swiper-container', {
  // Optional parameters 
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,
  // pagination: {
  //   el: '.footerNav .swiper-pagination',
  //   clickable: true
  // }
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },
})

