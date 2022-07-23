let menu = document.querySelector('.menu'),
 menuBTN = document.querySelector('.menu-trigger'),
 cartAmount = document.querySelector('.amount'),
 quantityUp = document.querySelector('.quantity__btn--up'),
 quantityDown = document.querySelector('.quantity__btn--down'),
 quantity = document.querySelector('.quantity__value');
quantityVal = +quantity.value;

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
 cartAmount.innerHTML = quantity.valueAsNumber;
})

quantityDown.addEventListener('click', function (e) {
 if (quantity.valueAsNumber <= +quantity.min) {
  return;
 } else {
  quantity.valueAsNumber = --quantityVal;
 }
 cartAmount.innerHTML = quantity.valueAsNumber;
});
