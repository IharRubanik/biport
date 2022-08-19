import Swiper, { EffectFade, Keyboard, Navigation, Pagination } from "swiper";

//hero-swiper
Swiper.use([Navigation, Pagination, EffectFade]);
const swiper = new Swiper(".hero__swiper", {
  slidesPerView: "auto",
  speed: 500,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",

    renderFraction: function (currentClass, totalClass) {
      return `
         <span class="current">0<span class="${currentClass}"></span></span> / <span class="total">0<span class="${totalClass}"></span></span>
      `;
    },
  },
});

//about-swiper
Swiper.use([Navigation, Pagination, Keyboard]);
const aboutSwiper = new Swiper(".about__swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  loop: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",

    renderFraction: function (currentClass, totalClass) {
      return `
         <span class="current">0<span class="${currentClass}"></span></span> / <span class="total">0<span class="${totalClass}"></span></span>
      `;
    },
  },
});

//info-swiper
Swiper.use([Navigation, Pagination, Keyboard]);
const infoSwiper = new Swiper(".info__swiper", {
  spaceBetween: 20,
  loop: false,
  autoHeight: true,
  centeredSlides: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",

    renderFraction: function (currentClass, totalClass) {
      return `
         <span class="current">0<span class="${currentClass}"></span></span> / <span class="total">0<span class="${totalClass}"></span></span>
      `;
    },
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    376: {
      slidesPerView: 1.7,
      slidesPerGroup: 1,
    },
    1200: {
      slidesPerView: 2.85,
      slidesPerGroup: 2,
    },
  },
});

//services-swiper
Swiper.use([Navigation, Pagination, Keyboard]);
const servicesSwiper = new Swiper(".services__swiper", {
  slidesPerGroup: 1,
  spaceBetween: 20,
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      //autoHeight: true,
    },
    768: {
      slidesPerView: 1.16,
    },
    1200: {
      slidesPerView: 2.65,
    },
  },
});
