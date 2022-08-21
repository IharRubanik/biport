const accordionHeader = document.querySelectorAll(".filter__accordion-header");

accordionHeader.forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", () => {
    const currentlyActiveAccordionHeader = document.querySelector(
      ".filter__accordion-header .active"
    );

    accordionHeader.querySelector("svg").classList.toggle("filter__icon--active");

    if (currentlyActiveAccordionHeader) {
      currentlyActiveAccordionHeader.classList.toggle("active");
      currentlyActiveAccordionHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionHeader.classList.toggle("active");
    const accordionBody = accordionHeader.nextElementSibling;
    if (accordionHeader.classList.contains("active")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    } else {
      accordionBody.style.maxHeight = 0;
    }
  });
});
