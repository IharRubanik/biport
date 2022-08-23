import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

const btnOpenFilterMenu = document.querySelector(".tabs__nav-btn-filter");

if (btnOpenFilterMenu) {
  const btnCloseFilterMenu = document.querySelector(".filter__show-btn");
  const filter = document.querySelector(".catalog__filter");
  const filterMenu = document.querySelector(".filter__show-menu");

  btnOpenFilterMenu.addEventListener("click", () => {
    filter.classList.add("filter--active");
    filterMenu.classList.add("filter-menu--active");
    disableScroll();
  });

  btnCloseFilterMenu.addEventListener("click", () => {
    filter.classList.remove("filter--active");
    filterMenu.classList.remove("filter-menu--active");
    enableScroll();
  });
}
