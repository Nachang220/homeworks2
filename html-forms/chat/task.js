const chatWidget = document.querySelector(".chat-widget");
const widgetMessages = chatWidget.querySelector("#chat-widget__messages");
const widgetInput = chatWidget.querySelector("#chat-widget__input");
let autoResponseFlag = true;
chatWidget.addEventListener("click", () => {
  if (!chatWidget.classList.contains("chat-widget_active")) {
    setTimeout(() => {
      if (autoResponseFlag) {
        botResponse("Вам помочь?");
      }
    }, 3000);
  }
  chatWidget.classList.add("chat-widget_active");
});

const responseTemplates = [
  "Добрый день!",
  "Уточните, пожалуйста, Ваш вопрос",
  "Перевожу на специалиста...",
  "Попробуйте сократить Ваш вопрос",
  "Звучит несколько сложно",
  "Доброе утро",
  "Проверяю..."
];

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getCurrentDate = () => {
  const currentDate = new Date();
  let hours = currentDate.getHours();
  hours = hours < 10 ? "0" + hours : hours;
  let minutes = currentDate.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return `${hours}:${minutes}`;
};

const botResponse = (message) => {
  widgetMessages.innerHTML += `
    <div class="message">
      <div class="message__time">${getCurrentDate()}</div>
      <div class="message__text">${message}</div>
    </div>
    `;
};

widgetInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && widgetInput.value.trim()) {
    autoResponseFlag = false;
    widgetMessages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${getCurrentDate()}</div>
      <div class="message__text">${widgetInput.value}</div>
    </div>
    `;
    widgetInput.value = "";
    setTimeout(() => {
      botResponse(responseTemplates[getRandomInt(0, responseTemplates.length - 1)]);
    }, 500);
    widgetMessages.parentElement.scrollTo(0, widgetMessages.parentElement.scrollHeight);
  }
});