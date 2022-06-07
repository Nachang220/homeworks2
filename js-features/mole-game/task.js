const holes = document.querySelectorAll(".hole ");
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

holes.forEach(item => {
  item.onclick = () => {
    if (item.className.includes('hole_has-mole')) {
      dead.textContent++  ;
    }
    else {
      lost.textContent++;
    }
    if (Number(dead.textContent) === 10) {
      alert("Вы победили!!!");
      dead.textContent = "0";
      lost.textContent = "0";
    } else if (Number(lost.textContent) === 5) {
      alert("Вы проиграли!!!")
      dead.textContent = "0";
      lost.textContent = "0";
    }
  }
})