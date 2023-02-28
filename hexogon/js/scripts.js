var menu = document.querySelector('.menu'),
 menuBtn = document.querySelector('.menu-trigger');

menuBtn.onclick = function () {
 this.classList.toggle('opened');
 menu.classList.toggle('opened');
}