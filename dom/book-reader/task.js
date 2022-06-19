const book = document.querySelector(".book");
const fontSizes = document.querySelectorAll(".book__control_font-size .font-size");
const fontColors = document.querySelectorAll(".book__control_color .color");
const backgroundColors = document.querySelectorAll(".book__control_background .color");

class SettingHandler {
  static handlers = [];

  constructor(type, prefix) {
    this.type = type;
    this.prefix = prefix;
    this.className = "";
    SettingHandler.handlers.push(this);
  }

  update(item) {
    const dataType = item.dataset[this.type];
    if (dataType) {
      this.className = `book_${this.prefix}-${dataType}`;
    } else {
      this.className = `book_${this.prefix}`;
    }
    book.className = `book ${SettingHandler.handlers.map(handler => handler.className).join(" ")}`;
  }
}

const fontSize = new SettingHandler("size", "fs");
const color = new SettingHandler("textColor", "color");
const backgroundColor = new SettingHandler("bgColor", "bg");

fontSizes.forEach(item => {
  item.onclick = (event) => {
    event.preventDefault();
    item.parentElement.querySelector(".font-size_active").classList.remove("font-size_active");
    item.classList.add("font-size_active");
    fontSize.update(item);
  };
});

fontColors.forEach(item => {
  item.onclick = (event) => {
    event.preventDefault();
    item.parentElement.querySelector(".color_active").classList.remove("color_active");
    item.classList.add("color_active");
    color.update(item);
  };
});

backgroundColors.forEach(item => {
  item.onclick = (event) => {
    event.preventDefault();
    item.parentElement.querySelector(".color_active").classList.remove("color_active");
    item.classList.add("color_active");
    backgroundColor.update(item);
  };
});