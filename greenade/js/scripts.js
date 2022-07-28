let slides = document.querySelectorAll('.slider__item');
let dots = document.querySelectorAll('.slider__pagination li');
let siteWrap = document.querySelector('.wrapper');

let navBtn = document.querySelector('.menu-trigger');
let nav = document.querySelector('.menu__list');

let text = document.querySelectorAll('.slider__descr');

function addCurrent(i) {
 for (slide of slides) {
  slide.classList.remove('current');
  slides[i].classList.add('current');
 }
 for (dot of dots) {
  dot.classList.remove('current');
  dots[i].classList.add('current');
 }
}

for (let k = 0; k < dots.length; k++) {
 dots[k].addEventListener('click', function () {
  addCurrent(k);
 })
}

navBtn.addEventListener('click', function () {
 nav.classList.toggle('open');
})