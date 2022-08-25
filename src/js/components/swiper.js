import Swiper, {
  EffectFade,
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
} from "swiper";

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
    600: {
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

//door-swiper
Swiper.use([Navigation, Pagination, Keyboard, Thumbs, Scrollbar]);
const doorSwiper = new Swiper(".door__swiper", {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,

  speed: 1000,

  scrollbar: {
    el: ".door__scrollbar",
    draggable: true,
  },

  thumbs: {
    swiper: {
      el: ".door__swiper-mini",
      slidesPerView: 3,
      spaceBetween: 10,
      breakpoints: {
        0: {
          direction: "horizontal",
          slidesPerView: 2,
        },
        600: {
          direction: "vertical",
          slidesPerView: 3,
        },
        1200: {
          direction: "horizontal",
        },
      },
    },
  },

  breakpoints: {
    0: {
      direction: "horizontal",
    },
    600: {
      direction: "vertical",
    },
    1200: {
      direction: "horizontal",
    },
  },
});

//recent-swiper
Swiper.use([Navigation, Pagination, Keyboard]);
const recentSwiper = new Swiper(".recent__swiper", {
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

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    600: {
      slidesPerView: 1.9,
      slidesPerGroup: 1,
      centeredSlides: true,
      loop: true,
    },
    1200: {
      slidesPerView: 2.85,
      slidesPerGroup: 2,
      centeredSlides: false,
      loop: false,
    },
  },
});
