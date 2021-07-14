document.querySelectorAll('a[data-title]').forEach(link => {

 link.addEventListener('click', function (e) {
  e.preventDefault();

  let href = this.getAttribute('href').substring(1);

  const scrollTarget = document.getElementById(href);

  const topOffset = document.querySelector('a[data-title]').offsetHeight;
  // const topOffset = 0; // если не нужен отступ сверху
  const elementPosition = scrollTarget.getBoundingClientRect().top;
  const offsetPosition = elementPosition - topOffset;

  window.scrollBy({
   top: offsetPosition,
   behavior: 'smooth'
  });
 });
});




let menuTrigger = document.querySelector('.menu-trigger');
let header = document.querySelector('.header');
let nav = document.querySelector('.nav')
let sticky = header.offsetTop;

menuTrigger.addEventListener('click', function () {
 header.classList.toggle("open");
 nav.classList.toggle("open");
 this.classList.toggle("open");
})

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
 if (window.pageYOffset > sticky) {
  header.classList.add("sticky");
 } else {
  header.classList.remove("sticky");
 }
}


const slider = '.catalog__slider';
const BREAKPOINTS = { tablets: 950 };



function initSlider() {
 let glideInit = false;
 const options = {
  type: 'slider',
  perView: 3,
  startAt: 0,
  touchRatio: 0,
  gap: 35,
  breakpoints: {
   700: {
    perView: 2,
    gap: 15,
   },
   600: {
    perView: 1
   },
  }
 };

 // Starts if mobile
 let glide = new Glide(slider, options);
 if (document.body.clientWidth < BREAKPOINTS.tablets) {
  glide.mount();
  glideInit = true;
 }

 // On resize, if tablets mount else destroy
 window.addEventListener('resize', () => {
  if (document.body.clientWidth < BREAKPOINTS.tablets) {
   if (glideInit === false) {
    glide = new Glide(slider, options);
    glide.mount();
    glideInit = true;
   }
  } else {
   if (glideInit === true) {
    glide.destroy();
    glideInit = false;
   }
  }
 });
};

var sliderTmb = new Glide('.slider__tmb', {
 type: 'slider',
 perView: 4,
 startAt: 0,
 gap: 15,
 breakpoints: {
  600: {
   perView: 3,
   gap: 18,
  }
 }
});



(function () {

 'use strict';

 /**
  * tabs
  *
  * @description The Tabs component.
  * @param {Object} options The options hash
  */
 var tabs = function (options) {

  var el = document.querySelector(options.el);
  var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
  var tabContentContainers = el.querySelectorAll(options.tabContentContainers);
  var activeIndex = 0;
  var initCalled = false;

  /**
   * init
   *
   * @description Initializes the component by removing the no-js class from
   *   the component, and attaching event listeners to each of the nav items.
   *   Returns nothing.
   */
  var init = function () {
   if (!initCalled) {
    initCalled = true;
    el.classList.remove('no-js');

    for (var i = 0; i < tabNavigationLinks.length; i++) {
     var link = tabNavigationLinks[i];
     handleClick(link, i);
    }
   }
  };

  /**
   * handleClick
   *
   * @description Handles click event listeners on each of the links in the
   *   tab navigation. Returns nothing.
   * @param {HTMLElement} link The link to listen for events on
   * @param {Number} index The index of that link
   */
  var handleClick = function (link, index) {
   link.addEventListener('click', function (e) {
    e.preventDefault();
    goToTab(index);
   });
  };

  /**
   * goToTab
   *
   * @description Goes to a specific tab based on index. Returns nothing.
   * @param {Number} index The index of the tab to go to
   */
  var goToTab = function (index) {
   if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
    tabNavigationLinks[activeIndex].classList.remove('is-active');
    tabNavigationLinks[index].classList.add('is-active');
    tabContentContainers[activeIndex].classList.remove('is-active');
    tabContentContainers[index].classList.add('is-active');
    activeIndex = index;
   }
  };

  /**
   * Returns init and goToTab
   */
  return {
   init: init,
   goToTab: goToTab
  };

 };

 /**
  * Attach to global namespace
  */
 window.tabs = tabs;

})();


/*popup */

let popupBTN = document.querySelectorAll('.js-popup');
let popupOverlay = document.querySelector('.overlay');
let closePopup = document.querySelector('.close-btn');
let popupBody = document.querySelector('.popup');
popupBTN.forEach(function (ell) {
 ell.addEventListener('click', function (e) {
  e.preventDefault();
  popupOverlay.classList.add('show');
 });
});

closePopup.addEventListener('click', function (e) {
 e.preventDefault();
 popupOverlay.classList.remove('show');
});

popupOverlay.addEventListener('click', function (e) {
 if (e.target.closest('.popup') === null) {
  popupOverlay.classList.remove('show');
 }
});
