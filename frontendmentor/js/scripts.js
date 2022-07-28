let menu = document.querySelector('.menu'),
 menuBTN = document.querySelector('.menu-trigger'),

 cartIcon = document.querySelector('.cart__icon'),
 cartDrop = document.querySelector('.cart__dropdown'),
 cartBody = document.querySelector('.cart__dropdown-body'),
 cartAmountIcon = document.querySelector('.amount'),
 cartAmount = document.querySelector('.cart__amount'),
 cartTotal = document.querySelector('.price__total'),
 cartClear = document.querySelector('.cart__dropdown-clear'),
 price = document.querySelector('.price__amount'),


 quantityUp = document.querySelector('.quantity__btn--up'),
 quantityDown = document.querySelector('.quantity__btn--down'),
 quantity = document.querySelector('.quantity__value'),
 btnOrder = document.querySelector('.btn-order');

let quantityVal = +quantity.value;
let priceNum = +price.innerHTML.slice(1);
menuBTN.addEventListener('click', function (e) {
 this.classList.toggle('open');
 menu.classList.toggle('open');
});


quantityUp.addEventListener('click', function (e) {
 if (quantity.valueAsNumber >= +quantity.max) {
  return;
 } else {
  quantity.valueAsNumber = ++quantityVal;
 }
 return quantity.valueAsNumber;
})

quantityDown.addEventListener('click', function (e) {
 if (quantity.valueAsNumber <= +quantity.min) {
  return;
 } else {
  quantity.valueAsNumber = --quantityVal;
 }
 return quantity.valueAsNumber;
});

btnOrder.addEventListener('click', function () {
 if (quantity.valueAsNumber > 0) {
  cartBody.classList.remove('empty');
  cartAmount.innerHTML = quantity.valueAsNumber;
  cartAmountIcon.innerHTML = quantity.valueAsNumber;
  cartTotal.innerHTML = '$' + (quantity.valueAsNumber * priceNum);
 }
});

cartClear.addEventListener('click', function () {
 cartBody.classList.add('empty');
 quantity.valueAsNumber = 0;
 quantityVal = 0;
 cartAmountIcon.innerHTML = 0;
});



cartIcon.addEventListener('click', function () {
 cartDrop.classList.toggle('show');
})


document.addEventListener('click', (e) => {
 let userCart = document.querySelector('.user__cart')
 let withinBoundaries = e.composedPath().includes(cartDrop);
 let cartBtn = e.composedPath().includes(userCart);
 if (!withinBoundaries && !cartBtn) {
  cartDrop.classList.remove('show');
 }
})


// Initialise Carousel
const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
 Dots: false,
 // Navigation: false,
 fill: false,
});

// Thumbnails
const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
 Sync: {
  target: mainCarousel,
  friction: 0,
 },
 Dots: false,
 Navigation: false,
 center: true,
 slidesPerPage: 4,
 infinite: false,
});

// Customize Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
 Carousel: {
  on: {
   change: (that) => {
    mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
     friction: 0,
    });
   },
  },
 },
 Toolbar: false,
});