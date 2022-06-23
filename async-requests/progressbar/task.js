const progress = document.querySelector("#progress");
const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
  xhr.upload.addEventListener("progress", (event) => {
    progress.value = (event.loaded / event.total).toFixed(2);
  });
  xhr.send(new FormData(form));
});
