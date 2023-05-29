import formValidation from "./utils/formValidation.js";

const inputFields = document.querySelectorAll("input");
const submitBtn = document.querySelector(".confirm-btn");
const continueBtn = document.querySelector(".continue-btn");
const form = document.querySelector(".form");
const success = document.querySelector(".success");

// add id to input-fields
inputFields.forEach((field, index) => {
  if (index === 0) {
    field.id = "name";
  } else if (index === 1) {
    field.id = "number";
  } else if (index === 2) {
    field.id = "day";
  } else if (index === 3) {
    field.id = "month";
  } else if (index === 4) {
    field.id = "CVC";
  }
  window[field.id] = field;
});

// handleSubmit function
const handleSubmit = (e) => {
  e.preventDefault();
  //   reset errors and values
  inputFields.forEach((field) => {
    field.classList.add("border-neutralLightGrayishViolet");
    field.classList.add("focus:border-primaryLinearGradient");
    field.classList.remove("border-primaryRed");
    const errorParagraph = field.parentElement.querySelector("p");
    if (errorParagraph) {
      errorParagraph.remove();
    }
  });
  if (formValidation(inputFields, form) === true) {
    success.classList.remove("hidden");
    form.classList.add("hidden");
  }
};

// handlecontinue
const handleContinue = (e) => {
  e.preventDefault();
  success.classList.add("hidden");
  form.classList.remove("hidden");
};

// event listeners
submitBtn.addEventListener("click", handleSubmit);
continueBtn.addEventListener("click", handleContinue);
document.addEventListener("keydown", (e) => {
  if (e.key === "enter") {
    submitBtn.click();
  }
});
