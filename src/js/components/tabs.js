import GraphTabs from "graph-tabs";
const graphTabs = document.querySelector("[data-tabs]");
const tabsSize = document.querySelector("[data-size]");

if (graphTabs) {
  const tabs = new GraphTabs("catalog");

  const tabsNav = document.querySelector(".tabs__nav");

  tabsNav.addEventListener("click", function (e) {
    const items = document.querySelectorAll(".active-btn");
    const target = e.target;

    Array.from(items).forEach((item) => {
      item.classList.remove("tabs__nav-btn--active");
    });

    if (target.classList.contains("active-btn")) {
      target.classList.add("tabs__nav-btn--active");
    }
  });
}

if (tabsSize) {
  const sizeNav = document.querySelector(".size__nav");

  sizeNav.addEventListener("click", function (e) {
    const items = document.querySelectorAll(".size__btn-active");
    const target = e.target;

    Array.from(items).forEach((item) => {
      item.classList.remove("size__nav-btn--active");
    });

    if (target.classList.contains("size__btn-active")) {
      target.classList.add("size__nav-btn--active");
    }
  });
}
