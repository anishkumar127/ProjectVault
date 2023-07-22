var swiper = new Swiper(".fullSwiper", {
  slidesPerView: 5,
  spaceBetween: 50,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetweenSlides: 20,
    },

    450: {
      slidesPerView: 3,
      spaceBetweenSlides: 40,
    },

    999: {
      slidesPerView: 4,
      spaceBetweenSlides: 50,
    },
    1100: {
      slidesPerView: 6,
      spaceBetweenSlides: 50,
    },
  },
  autoplay: {
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".slider-left-arrow-sign",
    prevEl: ".slider-right-arrow-sign",
  },
});
