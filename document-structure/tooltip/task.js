const tooltipButtons = document.querySelectorAll(".has-tooltip");

tooltipButtons.forEach(tooltipButton => {
  const {left} = tooltipButton.getBoundingClientRect();
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.textContent = tooltipButton.getAttribute("title");
  tooltip.style.left = left + "px";
  tooltipButton.insertAdjacentElement("afterend", tooltip);
  tooltipButton.addEventListener("click", (event => {
    event.preventDefault();
    tooltip.classList.toggle("tooltip_active");
  }));
});

const tooltips = document.querySelectorAll(".tooltip");

window.addEventListener("scroll", () => {
  tooltips.forEach((tooltip, index) => {
    tooltip.style.top = tooltipButtons[index].getBoundingClientRect().bottom + "px";
  });
});