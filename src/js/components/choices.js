import Choices from "choices.js";

const defaultSelect = () => {
  const element = document.querySelector(".lang-choice");
  const choices = new Choices(element, {
    searchEnabled: false,
  });
};

defaultSelect();
