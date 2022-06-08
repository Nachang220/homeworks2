const modal = document.getElementById("modal_main");
const modalClose = modal.querySelector(".modal__close")

modal.classList.add("modal_active");
modalClose.onclick = () => {
  modal.classList.remove("modal_active");
}