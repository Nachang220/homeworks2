const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");

let timeLastClick = new Date();

let trigger = false;
cookie.onclick = () => {
  counter.textContent = Number(counter.textContent) + 1;
  if (trigger) {
    cookie.width = 250
  } else {
    cookie.width = 200
  }
  trigger = !trigger;

  const speed = document.getElementById("clicker__speed");
  speed.textContent = (1 / ((new Date() - timeLastClick) / 1000 )).toFixed(2);
  timeLastClick = new Date();
}