const editor = document.querySelector("#editor");
const text = localStorage.getItem("text");

if (text) {
  editor.value = text;
}

editor.addEventListener("input", () => {
  localStorage.setItem("text", editor.value);
});