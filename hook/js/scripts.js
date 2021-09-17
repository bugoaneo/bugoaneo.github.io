let like = document.querySelectorAll('.btn .like');
like.forEach(function (el) {
 el.addEventListener('click', function () {
  this.classList.toggle('fill');
 });
})

let btnHide = document.querySelector('.btn--hide');
btnHide.addEventListener('click', function () {
 this.classList.toggle('open');
 btnHide.previousElementSibling.classList.toggle('open');
});


var header = document.querySelector('.header');
var main = document.querySelector('.main');
var scrl = main.scrollTop;


// function fixHead() {
// }
main.onscroll = function () {
 if (main.scrollTop > 0) {
  header.classList.add("scroll");
 } else {
  header.classList.remove("scroll");
 }

};


var product = new Glide('.gallery__product', {
 type: 'slider',
 startAt: 0,
 perView: 1,
});

product.mount();


var additional = new Glide('.slider__additional', {
 type: 'slider',
 rewind: true,
 startAt: 0,
 perView: 2,
 gap: 8,
 peek: {
  before: 15,
  after: 24,
 },
 breakpoints: {
  360: {
   before: 24,
   after: 34,
  }
 }
});


additional.mount();