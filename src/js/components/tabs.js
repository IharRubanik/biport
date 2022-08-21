import GraphTabs from "graph-tabs";
const tabs = new GraphTabs("new-products");

//tabs-hover
const tabBtnDoors = document.querySelectorAll(".tabs__nav-item--doors button");
for (let i = 0; i < tabBtnDoors.length; i++) {
  tabBtnDoors[i].parentNode.nextElementSibling
    .querySelector("button")
    .addEventListener("click", () => {
      tabBtnDoors[i].style.cssText = `
          background-color: var(--light);
          color: var(--main-black);
          border: 0.052vw solid var(--main-black);
      `;
      tabBtnDoors[i].parentNode.nextElementSibling.querySelector(
        "button"
      ).style.cssText = `
          background-color: var(--main-green-dark);
          color: var(--light);
          border: 1px solid transparent;
      `;
    });
}

const tabBtnParquet = document.querySelectorAll(
  ".tabs__nav-item--parquet button"
);

for (let i = 0; i < tabBtnParquet.length; i++) {
  tabBtnParquet[i].parentNode.previousElementSibling
    .querySelector("button")
    .addEventListener("click", () => {
      tabBtnParquet[i].style.cssText = `
          background-color: var(--light);
          color: var(--main-black);
          border: 0.052vw solid var(--main-black);
      `;
      tabBtnParquet[i].parentNode.previousElementSibling.querySelector(
        "button"
      ).style.cssText = `
          background-color: var(--main-green-dark);
          color: var(--light);
          border: 1px solid transparent;
      `;
    });
}
