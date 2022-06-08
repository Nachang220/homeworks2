const slider = document.querySelector(".slider");
const slides = [...slider.querySelectorAll(".slider__item")];
const slidesLength = slides.length;
const dots = [...slider.querySelectorAll(".slider__dot")];
const prevSlide = slider.querySelector(".slider__arrow_prev");
const nextSlide = slider.querySelector(".slider__arrow_next");


let activeSlideIndex = slides.findIndex(slide => {
  return slide.classList.contains("slider__item_active")
});
let prevActiveSlideIndex = activeSlideIndex;

prevSlide.onclick = () => {
  prevActiveSlideIndex = activeSlideIndex;
  activeSlideIndex = getNewActiveSlideId(activeSlideIndex - 1);
  changePagination(prevActiveSlideIndex, activeSlideIndex);
  changeSlide(prevActiveSlideIndex, activeSlideIndex);
}

nextSlide.onclick = () => {
  prevActiveSlideIndex = activeSlideIndex;
  activeSlideIndex = getNewActiveSlideId(activeSlideIndex + 1);
  changePagination(prevActiveSlideIndex, activeSlideIndex);
  changeSlide(prevActiveSlideIndex, activeSlideIndex);
}

dots.forEach(dot => {
  dot.onclick = ({target}) => {
    prevActiveSlideIndex = activeSlideIndex;
    activeSlideIndex = dots.findIndex(item => {
      return item === target
    });
    changePagination(prevActiveSlideIndex, activeSlideIndex);
    changeSlide(prevActiveSlideIndex, activeSlideIndex);
  }
})

function getNewActiveSlideId(newIndex) {
  if (newIndex > slidesLength - 1) {
    return 0;
  } else if (newIndex < 0) {
    return slidesLength - 1;
  } else {
    return newIndex;
  }
}

function changePagination(prevIndex, newIndex) {
  dots[prevIndex].classList.remove("slider__dot_active");
  dots[newIndex].classList.add("slider__dot_active");
}

function changeSlide(prevIndex, newIndex) {
  slides[prevIndex].classList.remove("slider__item_active");
  slides[newIndex].classList.add("slider__item_active");
}
