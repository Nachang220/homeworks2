const form = document.querySelector("#signin__form");
const signButton = document.querySelector("#signin__btn");
const signInWindow = document.querySelector("#signin");
const welcomeMessage = document.querySelector("#welcome");

if (localStorage.getItem("userId")) {
  signInWindow.classList.remove("signin_active");
  welcomeMessage.querySelector("#user_id").textContent = localStorage.getItem("userId");
  welcomeMessage.classList.add("welcome_active");
} else {
  signButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const response = await fetch("https://netology-slow-rest.herokuapp.com/auth.php", {
      method: "POST",
      body: new FormData(form)
    });
    const body = await response.json();
    if (body.success) {
      localStorage.setItem("userId", body["user_id"]);
      signInWindow.classList.remove("signin_active");
      welcomeMessage.querySelector("#user_id").textContent = body["user_id"];
      welcomeMessage.classList.add("welcome_active");
    } else {
      alert("Неверный логин/пароль");
    }
  });
}