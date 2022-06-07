const timer = document.getElementById("timer");
const deadLine = Date.now() + Number(timer.textContent) * 1000;

const newInterval = () => {
  const diff = deadLine - Date.now();
  if (diff <= 0) {
    alert("Вы победили в конкурсе");
    let download = document.createElement("a");
    download.href = "/README.md";
    download.download = "README.md";
    download.click();
    download.preventDefault();
  } else {
    timer.textContent = formatDate(diff);
    setTimeout(newInterval, 1000)
  }
}

const formatDate = (diff) => {
  const hours = formatTime(diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0);
  const minutes = formatTime(diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0);
  const seconds = formatTime(diff > 0 ? Math.floor(diff / 1000) % 60 : 0);
  return `${hours}:${minutes}:${seconds}`
}

const formatTime = (time) => {
  return time < 10 ? "0" + time : time;
}

newInterval();