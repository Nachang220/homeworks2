const reveals = document.querySelectorAll(".reveal");

const isInViewport = element => {
  const viewportHeight = window.innerHeight;
  const elementTop = element.getBoundingClientRect().top;
  return elementTop < viewportHeight;
};

document.addEventListener("scroll", () => {
  reveals.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add("reveal_active");
    }
  });
});
