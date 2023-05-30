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

  const cardNo = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  const monthNo = /^(0[1-9]|1[0-2])$/;
  const yearNo =
    /^(0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])$/;
  const CVCVal = /^[0-9]{3}$/;

  if (
    (isNaN(fieldValues.number) || !fieldValues.number.match(cardNo)) &&
    fieldValues.number !== ""
  ) {
    displayError("number", "Wrong format, numbers only");
    validate = false;
  }
  if (
    (isNaN(fieldValues.month) || !fieldValues.month.match(monthNo)) &&
    fieldValues.month !== ""
  ) {
    displayError("month", "Must be a valid month");
    validate = false;
  }
  if (
    (isNaN(fieldValues.year) || !fieldValues.year.match(yearNo)) &&
    fieldValues.year !== ""
  ) {
    displayError("year", "Must be a valid year");
    validate = false;
  }
  if (
    (isNaN(fieldValues.CVC) || !fieldValues.CVC.match(CVCVal)) &&
    fieldValues.CVC !== ""
  ) {
    displayError("CVC", "Must be a three digit value");
    validate = false;
  }
  return validate;
};

export default formValidation;
