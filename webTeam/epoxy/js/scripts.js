$(document).ready(function () {

 $('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
  var target = $(this).attr('href'),
   bl_top = $(target).offset().top - 5;
  $('body, html').animate({ scrollTop: bl_top }, 700);
  return false;
 });

 var videoWrap = $(".video__wrapper"),
  videoCover = $(".video__cover");
 videoWrap.click(function () {
  $(this).addClass('played');
  $(this).find(videoCover).css("display", "none");
  $(this).find($("video"))[0].play()
 });

 const hero = new Swiper('.hero__slider-container', {
  effect: 'fade',
  loop: true,
  autoplay: true,
  speed: 2000,
 });

 const reasons = new Swiper('.reasons__slider-container', {
  effect: 'fade',
  loop: true,
  autoplay: true,
  speed: 2000,
 });


 var myTabs = tabs({
  el: '.сatalog__row',
  tabNavigationLinks: '.сatalog__thumbs-slide',
  tabContentContainers: '.catalog__slide'
 });

 myTabs.init();

});


(function () {
 'use strict';
 // breakpoint where swiper will be destroyed
 // and switches to a dual-column layout
 const breakpoint = window.matchMedia('(min-width:780px)');
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
  mySwiper = new Swiper('.reviews__container', {
   autoHeight: true,
   navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
   },
   pagination: {
    el: '.reviews__pagination',
    dynamicBullets: true,
   },
   breakpoints: {
    780: {
     slidesPerView: 3,
    },
    500: {
     spaceBetween: 10,
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


// zoom-vanilla.js - 2.0.6 (https://github.com/spinningarrow/zoom-vanilla.js)
+function () { "use strict"; function e(e) { var t = e.getBoundingClientRect(), n = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, o = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0; return { top: t.top + n, left: t.left + o } } var t = 80, n = function () { function n() { var e = document.createElement("img"); e.onload = function () { d = Number(e.height), l = Number(e.width), o() }, e.src = m.currentSrc || m.src } function o() { f = document.createElement("div"), f.className = "zoom-img-wrap", f.style.position = "absolute", f.style.top = e(m).top + "px", f.style.left = e(m).left + "px", v = m.cloneNode(), v.style.visibility = "hidden", m.style.width = m.offsetWidth + "px", m.parentNode.replaceChild(v, m), document.body.appendChild(f), f.appendChild(m), m.classList.add("zoom-img"), m.setAttribute("data-action", "zoom-out"), c = document.createElement("div"), c.className = "zoom-overlay", document.body.appendChild(c), i(), r() } function i() { m.offsetWidth; var e = l, n = d, o = e / m.width, i = window.innerHeight - t, r = window.innerWidth - t, s = e / n, a = r / i; u = e < r && n < i ? o : s < a ? i / n * o : r / e * o } function r() { m.offsetWidth; var t = e(m), n = window.pageYOffset, o = n + window.innerHeight / 2, i = window.innerWidth / 2, r = t.top + m.height / 2, s = t.left + m.width / 2, a = Math.round(o - r), d = Math.round(i - s), l = "scale(" + u + ")", c = "translate(" + d + "px, " + a + "px) translateZ(0)"; m.style.webkitTransform = l, m.style.msTransform = l, m.style.transform = l, f.style.webkitTransform = c, f.style.msTransform = c, f.style.transform = c, document.body.classList.add("zoom-overlay-open") } function s() { if (document.body.classList.remove("zoom-overlay-open"), document.body.classList.add("zoom-overlay-transitioning"), m.style.webkitTransform = "", m.style.msTransform = "", m.style.transform = "", f.style.webkitTransform = "", f.style.msTransform = "", f.style.transform = "", !1 in document.body.style) return a(); f.addEventListener("transitionend", a), f.addEventListener("webkitTransitionEnd", a) } function a() { m.removeEventListener("transitionend", a), m.removeEventListener("webkitTransitionEnd", a), f && f.parentNode && (m.classList.remove("zoom-img"), m.style.width = "", m.setAttribute("data-action", "zoom"), v.parentNode.replaceChild(m, v), f.parentNode.removeChild(f), c.parentNode.removeChild(c), document.body.classList.remove("zoom-overlay-transitioning")) } var d = null, l = null, c = null, u = null, m = null, f = null, v = null; return function (e) { return m = e, { zoomImage: n, close: s, dispose: a } } }(); (function () { function e() { document.body.addEventListener("click", function (e) { "zoom" === e.target.getAttribute("data-action") && "IMG" === e.target.tagName && t(e) }) } function t(e) { if (e.stopPropagation(), !document.body.classList.contains("zoom-overlay-open")) { if (e.metaKey || e.ctrlKey) return o(); i({ forceDispose: !0 }), m = n(e.target), m.zoomImage(), r() } } function o() { window.open(event.target.getAttribute("data-original") || event.target.currentSrc || event.target.src, "_blank") } function i(e) { e = e || { forceDispose: !1 }, m && (m[e.forceDispose ? "dispose" : "close"](), s(), m = null) } function r() { window.addEventListener("scroll", a), document.addEventListener("click", l), document.addEventListener("keyup", d), document.addEventListener("touchstart", c), document.addEventListener("touchend", l) } function s() { window.removeEventListener("scroll", a), document.removeEventListener("keyup", d), document.removeEventListener("click", l), document.removeEventListener("touchstart", c), document.removeEventListener("touchend", l) } function a(e) { null === f && (f = window.pageYOffset); var t = f - window.pageYOffset; Math.abs(t) >= 40 && i() } function d(e) { 27 == e.keyCode && i() } function l(e) { e.stopPropagation(), e.preventDefault(), i() } function c(e) { v = e.touches[0].pageY, e.target.addEventListener("touchmove", u) } function u(e) { Math.abs(e.touches[0].pageY - v) <= 10 || (i(), e.target.removeEventListener("touchmove", u)) } var m = null, f = null, v = null; return { listen: e } })().listen() }();
//# sourceMappingURL=/dist/zoom-vanilla.min.js.map




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