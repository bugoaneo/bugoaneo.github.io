let menu = document.querySelector('.menu'),
 menuBTN = document.querySelector('.menu-trigger'),
 menuLink = document.querySelectorAll('a[data-title]');

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
 const breakpoint = window.matchMedia('(min-width:750px)');
 // keep track of swiper instances to destroy later
 let mySwiper;
 let mySwiper2;
 let mySwiper3;
 let mySwiper4;
 const breakpointChecker = function () {
  if (breakpoint.matches === true) {
   if (mySwiper !== undefined && mySwiper2 !== undefined && mySwiper3 !== undefined && mySwiper4 !== undefined) {
    mySwiper.destroy(true, true);
    mySwiper2.destroy(true, true);
    mySwiper3.destroy(true, true);
    mySwiper4.destroy(true, true);
   }
   return;
  } else if (breakpoint.matches === false) {
   return enableSwiper(), enableSwiper2(), enableSwiper3(), enableSwiper4();
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
 const enableSwiper4 = function () {
  mySwiper4 = new Swiper('.hero__icons', {
   slidesPerView: 1,
   loop: true,
   observer: true,
   pagination: {
    el: '.hero__pagination',
    type: 'bullets',
   },
   autoplay: {
    delay: 5000,
   },
   750: {
    slidesPerView: 1,
   },
  });

 };

 // keep an eye on viewport size changes
 breakpoint.addListener(breakpointChecker);
 // kickstart
 breakpointChecker();
})();



const possibilities = new Swiper('.possibilities__container', {
 slidesPerView: 1,
 spaceBetween: 20,
 loop: true,
 autoplay: {
  delay: 6000,
  disableOnInteraction: false,
 },
 on: {
  init() {
   this.el.addEventListener('mouseenter', () => {
    this.autoplay.stop();
   });
   this.el.addEventListener('mouseleave', () => {
    this.autoplay.start();
   });
  }
 },
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

const marketing = new Swiper('.marketing__container', {
 slidesPerView: 1,
 spaceBetween: 20,
 loop: true,
 autoHeight: true,
 autoplay: {
  delay: 6000,
  disableOnInteraction: false,
 },
 on: {
  init() {
   this.el.addEventListener('mouseenter', () => {
    this.autoplay.stop();
   });
   this.el.addEventListener('mouseleave', () => {
    this.autoplay.start();
   });
  }
 },
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

// const nestedSlider = new Swiper('.slider-nested', {
//  slidesPerView: 1,
//  spaceBetween: 20,
//  loop: true,
//  nested: true,
//  autoplay: {
//   delay: 5000,
//  },
// });

const reviews = new Swiper('.reviews__container', {
 slidesPerView: 1,
 spaceBetween: 10,
 loop: true,
 autoHeight: true,
 navigation: {
  nextEl: '.reviews__button-next',
  prevEl: '.reviews__button-prev',
 },
 breakpoints: {
  750: {
   autoHeight: false,
   spaceBetween: 20,
  },
 },
});

/*tabs-accordion */

const labels = document.querySelectorAll(".accordion__item-label");
const tabs = document.querySelectorAll(".card_tab");

function toggleShow() {
 const target = this;
 const item = target.classList.contains("card_tab") ? target : target.parentElement;
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


/*lightbox*/

!function () { "use strict"; function e() { r.classList.toggle("remove-scroll") } function t(e) { var t, i, l = e.getAttribute("href"); return l.match(/\.(jpeg|jpg|gif|png)/) ? (t = document.createElement("img"), t.className = "lightbox-image", t.src = l, t.alt = e.getAttribute("data-image-alt"), t) : l.match(/(youtube|vimeo)/) ? (i = [], l.match("youtube") && (i.id = l.split(/v\/|v=|youtu\.be\//)[1].split(/[?&]/)[0], i.url = "www.youtube.com/embed/", i.options = "?autoplay=1&rel=0"), l.match("vimeo") && (i.id = l.split(/video\/|https:\/\/vimeo\.com\//)[1].split(/[?&]/)[0], i.url = "player.vimeo.com/video/", i.options = "?autoplay=1title=0&byline=0&portrait=0"), i.player = document.createElement("iframe"), i.player.setAttribute("allowfullscreen", ""), i.player.className = "lightbox-video-player", i.player.src = "https://" + i.url + i.id + i.options, i.wrapper = document.createElement("div"), i.wrapper.className = "lightbox-video-wrapper", i.wrapper.appendChild(i.player), i.wrapper) : r.querySelector(l).children[0].cloneNode(!0) } function i(e) { var t, i = { next: e.parentElement.nextElementSibling, previous: e.parentElement.previousElementSibling }; for (t in i) null !== i[t] && (i[t] = i[t].querySelector("[data-lightbox]")); return i } function l(l) { if (l.blur(), u = l, l.classList.add("current-lightbox-item"), c = document.createElement("button"), c.className = "lightbox-btn lightbox-btn-close", p = document.createElement("div"), p.className = "lightbox-content", p.appendChild(t(l)), m = p.cloneNode(!1), m.className = "lightbox-wrapper", m.style.animation = [o.scaleIn, o.fadeIn], m.appendChild(p), m.appendChild(c), d = p.cloneNode(!1), d.className = "lightbox-container", d.style.animation = o.fadeIn, d.onclick = function () { }, d.appendChild(m), "gallery" === l.getAttribute("data-lightbox")) { d.classList.add("lightbox-gallery"); var a; s = { next: "", previous: "" }; for (a in s) s.hasOwnProperty(a) && (s[a] = c.cloneNode(!1), s[a].className = "lightbox-btn lightbox-btn-" + a, s[a].disabled = null === i(l)[a], m.appendChild(s[a])) } r.appendChild(d), e() } function a(e) { m.removeAttribute("style"); var l, a = i(u)[e]; if (null !== a) { p.style.animation = o.fadeOut, setTimeout(function () { p.replaceChild(t(a), p.children[0]), p.style.animation = o.fadeIn }, 200), u.classList.remove("current-lightbox-item"), a.classList.add("current-lightbox-item"), u = a; for (l in s) s.hasOwnProperty(l) && (s[l].disabled = null === i(a)[l]) } } function n() { d.style.animation = o.fadeOut, m.style.animation = [o.scaleOut, o.fadeOut], setTimeout(function () { r.contains(d) && (r.removeChild(d), h.focus(), u.classList.remove("current-lightbox-item"), e()) }, 200) } var o, r, c, s, u, d, p, m, b, h; b = (r = document.body).querySelectorAll("[data-lightbox]"), o = { fadeIn: "fadeIn .3s", fadeOut: "fadeOut .3s", scaleIn: "createBox .3s", scaleOut: "deleteBox .3s" }, Array.prototype.forEach.call(b, function (e) { e.addEventListener("click", function (t) { t.preventDefault(), l(e), h = e }) }), ["click", "keyup"].forEach(function (e) { r.addEventListener(e, function (e) { if (r.contains(d)) { var t = e.target, i = e.keyCode, l = e.type; -1 === [d, c].indexOf(t) && 27 !== i || n(), d.classList.contains("lightbox-gallery") && ((t === s.next && "click" === l || 39 === i) && a("next"), (t === s.previous && "click" === l || 37 === i) && a("previous")) } }) }) }();