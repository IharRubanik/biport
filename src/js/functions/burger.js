import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

(function () {
  const burger = document?.querySelector("[data-burger]");
  const burgerClose = document.querySelector("[data-menu-close]");
  const mobMenu = document.querySelector(".mob-menu");
  const menu = document?.querySelector("[data-menu]");
  const menuItems = document?.querySelectorAll("[data-menu-item]");
  const overlay = document?.querySelector("[data-menu-overlay]");

  burger?.addEventListener("click", (e) => {
    burger?.classList.add("burger--active");
    mobMenu?.classList.add("mob-menu--show");
    menu?.classList.add("menu--active");

    if (menu?.classList.contains("menu--active")) {
      burger?.classList.add("burger--menu");
      burger?.setAttribute("aria-expanded", "true");
      burger?.setAttribute("aria-label", "Закрыть меню");

      disableScroll();
    }
  });

  burgerClose?.addEventListener("click", () => {
    mobMenu?.classList.remove("mob-menu--show");
    burger?.classList.remove("burger--active");
    menu?.classList.remove("menu--active");
    burger?.classList.remove("burger--menu");
    burger?.setAttribute("aria-expanded", "false");
    burger?.setAttribute("aria-label", "Открыть меню");
    enableScroll();
  });

  overlay?.addEventListener("click", () => {
    burger?.setAttribute("aria-expanded", "false");
    burger?.setAttribute("aria-label", "Открыть меню");
    burger.classList.remove("burger--active");
    menu.classList.remove("menu--active");
    enableScroll();
  });

  menuItems?.forEach((el) => {
    el.addEventListener("click", () => {
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");
      burger.classList.remove("burger--active");
      menu.classList.remove("menu--active");
      enableScroll();
    });
  });
})();
