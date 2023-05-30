// reset infos on the cards
const resetInfos = (displayFields) => {
  displayFields.forEach((field) => {
    if (field.id === "displayCVC") {
      field.textContent = "000";
    } else if (field.id === "displayNumber") {
      field.textContent = "1234 5678 9123 0000";
    } else if (field.id === "displayName") {
      field.textContent = "Jane Appleseed";
    } else if (field.id === "displayDate") {
      field.textContent = "00/00";
    }
  });
};

export default resetInfos;
