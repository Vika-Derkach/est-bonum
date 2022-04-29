const swiper = new Swiper(".swiper", {
  // Optional parameters
  //   direction: "vertical",
  loop: true,
  // grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    // currentClass: 'swiper-pagination-current'
  },
  slidesPerView: 2,
  // slidesPerGroup: 2,
  // autoHeight: true,

  //   loopedSlides: 2,
  //   spaceBetween: 10,
  // using "ratio" endpoints
  breakpoints: {
    "@0.25": {
      slidesPerView: 1,
      //   spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 2,
      //   spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 2,
      //   spaceBetween: 50,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-next-button",
    prevEl: ".swiper-prev-button",
  },
});
