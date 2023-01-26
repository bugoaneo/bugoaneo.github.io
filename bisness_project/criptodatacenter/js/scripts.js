let menu = document.querySelector('.nav__wrapper'),
  menuBTN = document.querySelector('.menu-trigger');

document.querySelectorAll('[data-title="scroll"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    let href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    // const topOffset = document.querySelector('a[data-title]').offsetHeight;
    const topOffset = 60; // если не нужен отступ сверху
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


let header = document.querySelector('.header');
let sticky = header.offsetTop;

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

/* sliders */
// (function () {
//   'use strict';
//   const breakpoint = window.matchMedia('(min-width:900px)');
//   let mySwiper;
//   const breakpointChecker = function () {
//     if (breakpoint.matches === true) {
//       if (mySwiper !== undefined) mySwiper.destroy(true, true);
//       return;
//     } else if (breakpoint.matches === false) {

//       return enableSwiper();
//     }
//   };

//   const enableSwiper = function () {
//     mySwiper = new Swiper('.how__slider', {
//       slidesPerView: 1,
//       loop: true,
//       observer: true,
//       resizeObserver: true,
//       navigation: {
//         nextEl: '.how__button-next',
//         prevEl: '.how__button-prev',
//       },
//       autoplay: {
//         delay: 5000,
//       },
//       breakpoints: {
//         500: {
//           slidesPerView: 2,
//         },
//       }
//     });

//   };

//   breakpoint.addListener(breakpointChecker);
//   breakpointChecker();
// })();



/*form mask*/
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('[type="tel"]'), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)
  });

});

/*popup*/

const overlay = document.querySelector('.overlay');
const close = document.querySelector('.popup__close');

close.addEventListener('click', () => {
  overlay.classList.remove('visible');
})