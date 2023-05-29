import displayError from "./displayError.js";

// form validation function
const formValidation = (inputFields, form) => {
  let validate = true;
  // check if fields are empty
  inputFields.forEach((field) => {
    if (field.value === "") {
      displayError(field.id, "Can't be blank");
      validate = false;
      return validate;
    }
  });

  //   Creates an object with the form values
  const formData = new FormData(form);
  let fieldValues = {};
  for (const [key, value] of formData.entries()) {
    fieldValues[key] = value.trim();
  }
  console.log(fieldValues);

  var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  var CVCVal = /^[0-9]{3}$/;

  if (!fieldValues.number.match(cardno) && fieldValues.number !== "") {
    displayError("number", "Wrong format, numbers only");
    validate = false;
    return validate;
  } else if (
    (fieldValues.month < 1 || fieldValues.month > 12) &&
    fieldValues.month !== ""
  ) {
    displayError("month", "Must be a valid month");
    validate = false;
    return validate;
  } else if (
    (fieldValues.year < 0 || fieldValues.year > 99) &&
    fieldValues.year !== ""
  ) {
    displayError("year", "Must be a valid year");
    validate = false;
    return validate;
  } else if (!fieldValues.CVC.match(CVCVal) && fieldValues.CVC !== "") {
    displayError("CVC", "Must be a three digit value");
    validate = false;
    return validate;
  }
  return validate;
};

export default formValidation;
