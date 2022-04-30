const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 2,

  breakpoints: {
    "@0.25": {
      slidesPerView: 1,
    },
    "@1.00": {
      slidesPerView: 2,
    },
    "@1.50": {
      slidesPerView: 2,
    },
  },

  navigation: {
    nextEl: ".swiper-next-button",
    prevEl: ".swiper-prev-button",
  },
});

const link = document.querySelector(".menu-link");
const link_active = document.querySelector(".menu-link_active");
const menu_mobile = document.querySelector(".menu-mobile");
const nav_link = menu_mobile.querySelectorAll("a");

link.addEventListener("click", () => {
  link.classList.toggle("menu-link_active");
  menu_mobile.classList.toggle("menu-mobile_active");
});

for (let i = 0; i < nav_link.length; i++) {
  nav_link[i].addEventListener("click", () => {
    link.classList.toggle("menu-link_active");
    menu_mobile.classList.toggle("menu-mobile_active");
  });
}

var serviceItems = document.querySelectorAll(".read-more");
serviceItems.forEach(function (elem) {
  elem.addEventListener("click", function (evt) {
    var number = evt.currentTarget.dataset.number;
    console.log(number);
    var activeService = document.querySelector(".tab-active");
    activeService.classList.remove("tab-active");
    var newText = document.querySelector(".tab-item__" + number);
    newText.classList.add("tab-active");
  });
});
