var swiper = new Swiper(".myHeroSwiper", {
  //   slidesPerView: "auto", // responsive
  slidesPerView: 1,
  //   wrapperClass: "swiper--blog__wrapper",
  //   direction: "horizontal",
  spaceBetween: 50,
  //   centeredSlides: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next ",
    prevEl: ".swiper-button-prev ",
  },
});
