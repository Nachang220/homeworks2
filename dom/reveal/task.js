const reveals = document.querySelectorAll(".reveal");

const isInViewport = element => {
  const viewportHeight = window.innerHeight;
  const elementTop = element.getBoundingClientRect().top;
  const elementBottom = element.getBoundingClientRect().bottom;
  return elementTop < viewportHeight && elementBottom > 0;
};

document.addEventListener("scroll", () => {
  reveals.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add("reveal_active");
    } else {
      item.classList.remove("reveal_active");
    }
  });
});
