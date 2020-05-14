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

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

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