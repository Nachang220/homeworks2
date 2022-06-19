const modals = document.querySelectorAll(".modal");
const showSuccess = document.querySelector(".show-success");

modals[0].classList.add("modal_active");
modals.forEach(item => {
  const modalClose = item.querySelector("div.modal__close");
  modalClose.onclick = () => {
    item.classList.remove("modal_active");
  };
});

showSuccess.onclick = () => {
  modals[0].classList.remove("modal_active");
  modals[1].classList.add("modal_active");
};
