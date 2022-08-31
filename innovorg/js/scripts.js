let bodySite = document.querySelector('body');
let header = document.querySelector('.header');
let scrolled = header.offsetTop;

let menu = document.querySelector('.menu');
let menuBTN = document.querySelector('.menu-trigger');

let footerSubmenuTitle = document.querySelectorAll('.submenu__title');

let headerPanel = document.querySelectorAll('.breadcrambs__header');

//toggle mobile menu + burger menu
menuBTN.addEventListener('click', function (e) {
 this.classList.toggle('open');
 menu.classList.toggle('open');
 // bodySite.classList.toggle('hidden');
 headerPanel.forEach(item => {
  item.classList.remove('open');
  item.nextElementSibling.classList.remove('open');
 })
});


//header accordion on mobile
headerPanel.forEach(item => {
 item.addEventListener('click', function (e) {
  e.preventDefault();
  item.classList.toggle('open')
  this.nextElementSibling.classList.toggle('open');
 })
})


//header bg onscroll
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
 if (window.pageYOffset > scrolled) {
  header.classList.add("scrolled");
 } else {
  header.classList.remove("scrolled");
 }
}


// document.querySelectorAll('[data-title="scroll"]').forEach(link => {
//  link.addEventListener('click', function (e) {
//   e.preventDefault();
//   let href = this.getAttribute('href').substring(1);
//   const scrollTarget = document.getElementById(href);
//   // const topOffset = document.querySelector('a[data-title]').offsetHeight;
//   const topOffset = 68; // если не нужен отступ сверху
//   const elementPosition = scrollTarget.getBoundingClientRect().top;
//   const offsetPosition = elementPosition - topOffset;

//   window.scrollBy({
//    top: offsetPosition,
//    behavior: 'smooth'
//   });

//   menuBTN.classList.remove('open');
//   menu.classList.remove('open');
//  });
// });



//footer accordion on mobile

footerSubmenuTitle.forEach(item => {
 item.addEventListener('click', function (e) {
  e.preventDefault();
  this.nextElementSibling.classList.toggle('open');
 })
})


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);