var swiper = new Swiper(".fullSwiper", {
  slidesPerView: 6,
  spaceBetween: 20,
   
  loop: true,
  breakpoints: {
    320:{
      slidesPerView: 2,
      spaceBetweenSlides: 20
    },
    
    450: {
        slidesPerView: 3,
        spaceBetweenSlides: 40
    },
    
    999: {
        slidesPerView: 4,
        spaceBetweenSlides: 50
    },
    1100:{
      slidesPerView: 6,
      spaceBetweenSlides: 50

    },
  },
  autoplay: {
      disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});
// var swiper = new Swiper(".fullSwiper1", {
//   slidesPerView: 1,
//   autoplay: {
//       disableOnInteraction: false,
//   }
// });
