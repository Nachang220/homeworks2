const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal__close");

const getCookie = (name) => {
  const pairs = document.cookie.split("; ");
  try {
    const cookie =  pairs.find(pair => pair.startsWith(name + "="));
    return cookie.substring(name.length + 1);
  } catch {
    return false;
  }
};

if (!(getCookie("modalIsActive") === "false")) {
  modal.classList.add("modal_active");
}

closeButton.addEventListener("click", () => {
  modal.classList.remove("modal_active");
  document.cookie = "modalIsActive=" + encodeURIComponent("false");
});
