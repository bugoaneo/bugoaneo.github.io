let header = document.querySelector('.header');
let scrolled = header.offsetTop;
let footerSubmenuTitle = document.querySelectorAll('.submenu__title');


footerSubmenuTitle.forEach(item => {
 item.addEventListener('click', function (e) {
  e.preventDefault();
  this.nextElementSibling.classList.toggle('open');
 })
})

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
 if (window.pageYOffset > scrolled) {
  header.classList.add("scrolled");
 } else {
  header.classList.remove("scrolled");
 }
}