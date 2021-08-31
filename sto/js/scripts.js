let menu = document.querySelector('.menu'),
 menuBTN = document.querySelector('.menu-trigger'),
 menuLink = document.querySelectorAll('a[data-title]');

document.querySelectorAll('a[data-title]').forEach(link => {

 link.addEventListener('click', function (e) {
  e.preventDefault();

  let href = this.getAttribute('href').substring(1);

  const scrollTarget = document.getElementById(href);

  // const topOffset = document.querySelector('a[data-title]').offsetHeight;
  const topOffset = 0; // если не нужен отступ сверху
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
 const breakpoint = window.matchMedia('(min-width:750px)');
 // keep track of swiper instances to destroy later
 let mySwiper;
 let mySwiper2;
 let mySwiper3;
 const breakpointChecker = function () {
  if (breakpoint.matches === true) {
   if (mySwiper !== undefined && mySwiper2 !== undefined && mySwiper3 !== undefined) {
    mySwiper.destroy(true, true);
    mySwiper2.destroy(true, true);
    mySwiper3.destroy(true, true);
   }
   return;
  } else if (breakpoint.matches === false) {
   return enableSwiper(), enableSwiper2(), enableSwiper3();
  }


 };

 const enableSwiper = function () {
  mySwiper = new Swiper('.slider1', {
   spaceBetween: 15,
   resizeObserver: true,
   navigation: {
    nextEl: '.slider1__button-next',
    prevEl: '.slider1__button-prev',
   },
   pagination: {
    el: '.slider1__pagination',
    type: 'bullets',
   },
   breakpoints: {
    750: {
     slidesPerView: 3,
    },
    600: {
     observer: true,
     // observeParents: true,
     // slidesPerView: 2,
    },
    500: {
     slidesPerView: 1,
    },
   }
  });
 };

 const enableSwiper2 = function () {
  mySwiper2 = new Swiper('.slider2', {
   spaceBetween: 15,
   resizeObserver: true,
   navigation: {
    nextEl: '.slider2__button-next',
    prevEl: '.slider2__button-prev',
   },
   pagination: {
    el: '.slider2__pagination',
    type: 'bullets',
   },
   breakpoints: {
    750: {
     slidesPerView: 3,
    },
    600: {
     // observer: true,
     // observeParents: true,
     slidesPerView: 2,
    },
    500: {
     slidesPerView: 1,
    },
   }

  });
 };

 const enableSwiper3 = function () {
  mySwiper3 = new Swiper('.slider3', {
   spaceBetween: 15,
   resizeObserver: true,
   // observeParents: true,
   navigation: {
    nextEl: '.slider3__button-next',
    prevEl: '.slider3__button-prev',
   },
   pagination: {
    el: '.slider3__pagination',
    type: 'bullets',
   },
   breakpoints: {
    750: {
     slidesPerView: 3,
    },
    600: {

     slidesPerView: 2,
    },
    500: {

     slidesPerView: 1,
    },
   }
  });
 };

 // keep an eye on viewport size changes
 breakpoint.addListener(breakpointChecker);
 // kickstart
 breakpointChecker();
})();


possibilities = new Swiper('.possibilities__container', {
 slidesPerView: 1,
 spaceBetween: 20,
 loop: true,
 autoHeight: true,
 navigation: {
  nextEl: '.possibilities__button-next',
  prevEl: '.possibilities__button-prev',
 },
 breakpoints: {
  750: {
   autoHeight: false,
  },
 }
});

possibilities = new Swiper('.marketing__container', {
 slidesPerView: 1,
 spaceBetween: 20,
 loop: true,
 autoHeight: true,
 navigation: {
  nextEl: '.marketing__button-next',
  prevEl: '.marketing__button-prev',
 },
 breakpoints: {
  750: {
   autoHeight: false,
  },
 }
});

const nestedSlider = new Swiper('.slider-nested', {
 slidesPerView: 1,
 spaceBetween: 20,
 loop: true,
 nested: true,
 autoplay: {
  delay: 5000,
 },
});



/*tabs-accordion */

const labels = document.querySelectorAll(".accordion__item-label");
const tabs = document.querySelectorAll(".accordion__tab");

function toggleShow() {
 const target = this;
 const item = target.classList.contains("accordion__tab")
  ? target
  : target.parentElement;
 const group = item.dataset.actabGroup;
 const id = item.dataset.actabId;

 tabs.forEach(function (tab) {
  if (tab.dataset.actabGroup === group) {
   if (tab.dataset.actabId === id) {
    tab.classList.add("current");
   } else {
    tab.classList.remove("current");
   }
  }
 });

 labels.forEach(function (label) {
  const tabItem = label.parentElement;

  if (tabItem.dataset.actabGroup === group) {
   if (tabItem.dataset.actabId === id) {
    tabItem.classList.add("current");
   } else {
    tabItem.classList.remove("current");
   }
  }
 });
}

labels.forEach(function (label) {
 label.addEventListener("click", toggleShow);
});

tabs.forEach(function (tab) {
 tab.addEventListener("click", toggleShow);
});


const reviews = new Swiper('.reviews__container', {
 slidesPerView: 1,
 spaceBetween: 20,
 loop: true,
 autoHeight: false,
 navigation: {
  nextEl: '.reviews__button-next',
  prevEl: '.reviews__button-prev',
 },
 breakpoints: {
  750: {
   autoHeight: true,
  },
 },
});