const checkBoxes = document.querySelectorAll(".interest__check");

checkBoxes.forEach(checkbox => {
  checkbox.addEventListener("change", () => {
    const closestListItem = checkbox.closest(".interest");
    const childCheckBoxes = [...closestListItem.querySelectorAll(".interest__check")];
    childCheckBoxes.forEach(childCheckBox => {
      childCheckBox.checked = checkbox.checked;
    });
  });
});