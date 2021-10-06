let menu = document.querySelector('.nav__wrapper'),
 menuBTN = document.querySelector('.menu-trigger');

document.querySelectorAll('[data-title="scroll"]').forEach(link => {

 link.addEventListener('click', function (e) {
  e.preventDefault();
  let href = this.getAttribute('href').substring(1);
  const scrollTarget = document.getElementById(href);

  // const topOffset = document.querySelector('a[data-title]').offsetHeight;
  const topOffset = 45; // если не нужен отступ сверху
  const elementPosition = scrollTarget.getBoundingClientRect().top;
  const offsetPosition = elementPosition - topOffset;

  window.scrollBy({
   top: offsetPosition,
   behavior: 'smooth'
  });

  menuBTN.classList.remove('open');
  menu.classList.remove('open');

 });

});

menuBTN.addEventListener('click', function (e) {
 this.classList.toggle('open');
 menu.classList.toggle('open');
});




/* sliders */
(function () {
 'use strict';
 // breakpoint where swiper will be destroyed
 // and switches to a dual-column layout
 const breakpoint = window.matchMedia('(min-width:900px)');
 // keep track of swiper instances to destroy later
 let mySwiper;
 const breakpointChecker = function () {
  // if larger viewport and multi-row layout needed
  if (breakpoint.matches === true) {
   // clean up old instances and inline styles when available
   if (mySwiper !== undefined) mySwiper.destroy(true, true);
   // or/and do nothing
   return;
   // else if a small viewport and single column layout needed
  } else if (breakpoint.matches === false) {
   // fire small viewport version of swiper
   return enableSwiper();
  }
 };

 const enableSwiper = function () {
  mySwiper = new Swiper('.how__slider', {
   slidesPerView: 1,
   loop: true,
   observer: true,
   resizeObserver: true,
   navigation: {
    nextEl: '.how__button-next',
    prevEl: '.how__button-prev',
   },
   autoplay: {
    delay: 5000,
   },
   breakpoints: {
    500: {
     slidesPerView: 2,
    },
   }
  });

 };

 // keep an eye on viewport size changes
 breakpoint.addListener(breakpointChecker);
 // kickstart
 breakpointChecker();
})();