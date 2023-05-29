import displayError from "./displayError.js";

// form validation function
const formValidation = (inputFields, form) => {
  // check if fields are empty
  inputFields.forEach((field) => {
    if (field.value === "") {
      displayError(field.id, "Can't be blank");
      return false;
    } else {
      return true;
    }
  });

  //   Creates an object with the form values
  const formData = new FormData(form);
  const fieldValues = {};
  for (const [key, value] of formData.entries()) {
    fieldValues[key] = value.trim();
  }

  var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  var CVCVal = /^[0-9]{3}$/;

  if (!fieldValues.number.match(cardno) && fieldValues.number.value !== "") {
    displayError("number", "Wrong format, numbers only");
    return false;
  } else if (fieldValues.month < 1 || fieldValues.month > 12) {
    displayError("month", "Must be a valid month");
    return false;
  } else if (fieldValues.year < 0 || fieldValues.year > 99) {
    displayError("year", "Must be a valid year");
    return false;
  } else if (!fieldValues.CVC.match(CVCVal)) {
    displayError("CVC", "Must be a three digit value");
    return false;
  } else {
    return true;
  }
};

export default formValidation;
