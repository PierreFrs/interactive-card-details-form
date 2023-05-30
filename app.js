import formValidation from "./utils/formValidation.js";
import displayInfos from "./utils/displayInfos.js";
import resetInfos from "./utils/resetInfos.js";

const inputFields = document.querySelectorAll("input");
const displayFields = document.querySelectorAll(".displayField");
const submitBtn = document.querySelector(".confirm-btn");
const continueBtn = document.querySelector(".continue-btn");
const form = document.querySelector(".form");
const success = document.querySelector(".success");

// add id to display fields
displayFields.forEach((field, index) => {
  if (index === 0) {
    field.id = "displayCVC";
  } else if (index === 1) {
    field.id = "displayNumber";
  } else if (index === 2) {
    field.id = "displayName";
  } else if (index === 3) {
    field.id = "displayDate";
  }
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

  const isValid = formValidation(inputFields, form);
  if (isValid === true) {
    success.classList.remove("hidden");
    form.classList.add("hidden");
  }

  // invoques the function to display the infos on the credit card
  displayInfos(form, displayFields);
};

// handlecontinue
const handleContinue = (e) => {
  e.preventDefault();
  success.classList.add("hidden");
  form.classList.remove("hidden");

  inputFields.forEach((input) => {
    input.value = "";
  });

  // Set focus on the input field with id 'name'
  const nameInput = document.getElementById("name");
  nameInput.focus();

  resetInfos(displayFields);
};

// event listeners
submitBtn.addEventListener("click", handleSubmit);
continueBtn.addEventListener("click", handleContinue);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    if (success.classList.contains("hidden")) {
      submitBtn.click();
    } else {
      continueBtn.click();
    }
  }
});
