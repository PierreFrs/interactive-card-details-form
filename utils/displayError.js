// display errors function
const displayError = (inputId, text) => {
  const input = document.getElementById(inputId);
  input.classList.remove("border-neutralLightGrayishViolet");
  input.classList.remove("focus:border-primaryLinearGradient");
  input.classList.add("border-primaryRed");
  const errorParagraph = document.createElement("p");
  errorParagraph.classList.add("error-paragraph");
  // errorParagraph.classList.add("text-primaryRed", "text-xs"); --> styled from error-paragraph.css
  errorParagraph.textContent = text;
  input.parentElement.appendChild(errorParagraph);
};

export default displayError;
