import GraphTabs from "graph-tabs";
const tabs = new GraphTabs("new-products");

const tabsNav = document.querySelector(".tabs__nav");

tabsNav.addEventListener("click", function (e) {
  const items = document.querySelectorAll(".tabs__nav-btn");
  const target = e.target;

  Array.from(items).forEach((item) => {
    item.classList.remove("tabs__nav-btn--active");
  });

  if (target.classList.contains("tabs__nav-btn")) {
    target.classList.add("tabs__nav-btn--active");
  }
});
