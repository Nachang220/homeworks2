const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItems = document.querySelectorAll(".dropdown__item");


dropdownValue.addEventListener("click", function () {
  dropdownList.classList.toggle("dropdown__list_active");
});

dropdownItems.forEach(dropdownItem => {
  dropdownItem.addEventListener("click", function (event) {
    event.preventDefault();
    dropdownList.classList.remove("dropdown__list_active");
    dropdownValue.textContent = this.textContent;
  });
});
