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
const isSelf = (elem, classForCheck) => {
  return (
    elem.classList.contains(classForCheck) || elem.closest(`.${classForCheck}`)
  );
};

const closeBlock = (closeEl) => {
  closeEl.style.display = "none";
};

const openModal = document.querySelectorAll(".donate-btn");
const overlay = document.querySelector(".overlay");
const popup = overlay.querySelector(".popup");
const closeModal = popup.querySelector(".popup-close");

const popupBlockCloseEvent = (evt) => {
  if (!isSelf(evt.target, "popup")) {
    closeBlock(overlay);
    document.body.style.overflow = "";
    document.removeEventListener("click", popupBlockCloseEvent);
  }
};

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener("click", function () {
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      document.addEventListener("click", popupBlockCloseEvent);
    }, 0);
  });
}

closeModal.addEventListener("click", function () {
  closeBlock(overlay);
  document.body.style.overflow = "";
  document.removeEventListener("click", popupBlockCloseEvent);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeBlock(overlay);
    document.body.style.overflow = "";
    document.removeEventListener("click", popupBlockCloseEvent);
  }
});

const langBtn = document.querySelector(".change-lang");
const langBlock = document.querySelector(".language");
const langActive = document.querySelector(".lang-active");

const langBlockCloseEvent = (evt) => {
  if (!isSelf(evt.target, "language")) {
    closeBlock(langBlock);
    document.removeEventListener("click", langBlockCloseEvent);
  }
};

langBtn.addEventListener("click", function () {
  langBlock.style.display = "block";
  setTimeout(() => {
    document.addEventListener("click", langBlockCloseEvent);
  }, 0);
});

langActive.addEventListener("click", function () {
  closeBlock(langBlock);
  document.removeEventListener("click", langBlockCloseEvent);
});
