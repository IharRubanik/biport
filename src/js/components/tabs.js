import GraphTabs from "graph-tabs";
const graphTabs = document.querySelector("[data-tabs]");
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
