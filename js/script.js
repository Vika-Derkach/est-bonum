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

const detailsItems = document.querySelectorAll(".read-more");
detailsItems.forEach(function (elem) {
  elem.addEventListener("click", function (evt) {
    const number = evt.currentTarget.dataset.number;

    const activeService = document.querySelector(".tab-active");
    if (activeService) {
      activeService.classList.remove("tab-active");
    }

    const newText = document.querySelector(".tab-item__" + number);
    newText.classList.add("tab-active");
  });
});

const openModal = document.querySelector(".donate-btn");
const overlay = document.querySelector(".overlay");
const closeModal = overlay.querySelector(".popup-close");
openModal.addEventListener("click", function () {
  overlay.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeModal.addEventListener("click", function () {
  overlay.style.display = "none";
  document.body.style.overflow = "";
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    overlay.style.display = "none";
    document.body.style.overflow = "";
  }
});

const langBtn = document.querySelector(".change-lang");
const langBlock = document.querySelector(".language");
const langActive = document.querySelector(".lang-active");

langBtn.addEventListener("click", function () {
  langBlock.style.display = "block";
});

langActive.addEventListener("click", function () {
  langBlock.style.display = "none";
});
