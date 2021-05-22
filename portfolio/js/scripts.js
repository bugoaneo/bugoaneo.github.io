let menuTrigger = document.querySelector('.menu-btn');
let menuTriggerLink = document.querySelector('.menu-link');
let menuClose = document.querySelector('.menu-close');
let content = document.querySelector('.content');
let menu = document.querySelector('.menu');
let header = document.querySelector('.header');

menuClose.addEventListener('click', function () {
 menu.classList.remove("open");
 content.classList.remove("open");
 menuTrigger.classList.remove("open");
 header.classList.remove("open");
});

function toggleMenu(el) {
 el.addEventListener('click', function (e) {
  e.preventDefault();
  menu.classList.toggle("open");
  content.classList.toggle("open");
  menuTrigger.classList.toggle("open");
  header.classList.toggle("open");
 });
}
toggleMenu(menuTrigger);
toggleMenu(menuTriggerLink);


function parallax(element, distence, speed) {
 const item = document.querySelector(element);
 item.style.transform = `translateY(${distence * speed}px)`;
}

function parallaxBg(element, distence, speed) {
 const bg = document.querySelector(element);
 bg.style.backgroundPosition = (`center ${distence * speed}px`);
}

window.addEventListener('scroll', function () {
 parallax('.hero__bg', window.scrollY, -0.08);
 parallaxBg('header', window.scrollY, -0.08);
});


let overlay = document.querySelector('.overlay');
let box = document.querySelector('.share');

function handleClick(event) {
 if (!box.contains(event.target)) {
  overlay.classList.remove('visible');
 }
}
document.addEventListener('click', handleClick);

/* */
const elem = document.querySelector('.hero__footer');
const hero = document.querySelector('.hero');
const header2 = document.querySelector('.header');
document.addEventListener('scroll', onScroll);

function onScroll() {

}
