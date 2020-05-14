

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
  slidesPerView:'auto',
  // slidesPerView: 5,
  // spaceBetween: 30,
  centeredSlides: true,
  // pagination: {
  //   el: '.story .swiper-pagination',
  //   clickable: true
  // }
})