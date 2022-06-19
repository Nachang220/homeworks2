const rotators = document.querySelectorAll(".rotator");

const changeActiveBlurb = (rotator) => {
  setInterval(() => {
    let currentBlurb = rotator.querySelector(".rotator__case_active");
    currentBlurb.classList.remove("rotator__case_active");
    let nextBlurb = currentBlurb.nextElementSibling;
    nextBlurb = nextBlurb ? nextBlurb : rotator.firstElementChild;
    nextBlurb.classList.add("rotator__case_active");
  }, 1000);
};

rotators.forEach(rotator => {
  changeActiveBlurb(rotator);
});
