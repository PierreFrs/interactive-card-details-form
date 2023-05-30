// display the infos on the cards
const displayInfos = (form, displayFields) => {
  //   Creates an object with the form values
  const formData = new FormData(form);
  let fieldValues = {};
  for (const [key, value] of formData.entries()) {
    fieldValues[key] = value.trim();
  }

  displayFields.forEach((field) => {
    if (field.id === "displayCVC") {
      field.textContent = fieldValues.CVC;
    } else if (field.id === "displayNumber") {
      field.textContent = fieldValues.number;
    } else if (field.id === "displayName") {
      field.textContent = fieldValues.name;
    } else if (field.id === "displayDate") {
      field.textContent = `${fieldValues.month}/${fieldValues.year}`;
    }
  });
};

export default displayInfos;
