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

 var myTabs = tabs({
  el: '.catalog__slider',
  tabNavigationLinks: '.catalog__thumb-slide',
  tabContentContainers: '.catalog__slide'
 });


 (function () {
  'use strict';
  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia('(min-width:750px)');
  // keep track of swiper instances to destroy later
  let mySwiper;
  let galleryThumbs;
  const breakpointChecker = function () {
   // if larger viewport and multi-row layout needed
   if (breakpoint.matches === true) {
    // clean up old instances and inline styles when available
    if (mySwiper !== undefined) mySwiper.destroy(true, true);
    if (galleryThumbs !== undefined) galleryThumbs.destroy(true, true);

    $('.catalog__slide').zoom({ on: 'grab', magnify: 1.5 });
    myTabs.init();
    //
    // or/and do nothing
    return;
    // else if a small viewport and single column layout needed
   } else if (breakpoint.matches === false) {
    $('.catalog__thumb-slide').removeClass("is-active");
    // fire small viewport version of swiper
    return enableSwiper();
   }
  };

  const enableSwiper = function () {
   var galleryThumbs = new Swiper('.catalog__thumbs', {
    spaceBetween: 15,
    slidesPerView: 3,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
     nextEl: '.catalog-btn-next',
     prevEl: '.catalog-btn-prev',
    },
   });
   var galleryTop = new Swiper('.catalog__top', {
    spaceBetween: 10,
    thumbs: {
     swiper: galleryThumbs
    }
   });
  };
  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);
  // kickstart
  breakpointChecker();
 })();


 var galleryRew = new Swiper('.reviews__slider-container', {
  spaceBetween: 10,
  slidesPerView: 1,
  loop: true,
  breakpoints: {
   780: {
    slidesPerView: 3,
    spaceBetween: 24,
   },
   500: {
    slidesPerView: 2,
   },
  },
  navigation: {
   nextEl: '.reviews-btn-next',
   prevEl: '.reviews-btn-prev',
  },

 });


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



/*!
 Zoom 1.7.21
 license: MIT
 http://www.jacklmoore.com/zoom
*/
(function (b) { var a = { url: !1, callback: !1, target: !1, duration: 120, on: "mouseover", touch: !0, onZoomIn: !1, onZoomOut: !1, magnify: 1 }; b.zoom = function (B, j, w, p) { var A, y, z, g, k, o, C, v = b(B), q = v.css("position"), x = b(j); return B.style.position = /(absolute|fixed)/.test(q) ? q : "relative", B.style.overflow = "hidden", w.style.width = w.style.height = "", b(w).addClass("zoomImg").css({ position: "absolute", top: 0, left: 0, opacity: 0, width: w.width * p, height: w.height * p, border: "none", maxWidth: "none", maxHeight: "none" }).appendTo(B), { init: function () { y = v.outerWidth(), A = v.outerHeight(), j === B ? (g = y, z = A) : (g = x.outerWidth(), z = x.outerHeight()), k = (w.width - y) / g, o = (w.height - A) / z, C = x.offset() }, move: function (d) { var c = d.pageX - C.left, e = d.pageY - C.top; e = Math.max(Math.min(e, z), 0), c = Math.max(Math.min(c, g), 0), w.style.left = c * -k + "px", w.style.top = e * -o * 6 + "px" } } }, b.fn.zoom = function (c) { return this.each(function () { var n = b.extend({}, a, c || {}), j = n.target && b(n.target)[0] || this, q = this, o = b(q), p = document.createElement("img"), d = b(p), g = "mousemove.zoom", h = !1, t = !1; if (!n.url) { var k = q.querySelector("img"); if (k && (n.url = k.getAttribute("data-src") || k.currentSrc || k.src), !n.url) { return } } o.one("zoom.destroy", function (f, e) { o.off(".zoom"), j.style.position = f, j.style.overflow = e, p.onload = null, d.remove() }.bind(this, j.style.position, j.style.overflow)), p.onload = function () { function e(f) { i.init(), i.move(f), d.stop().fadeTo(b.support.opacity ? n.duration : 0, 1, b.isFunction(n.onZoomIn) ? n.onZoomIn.call(p) : !1) } function l() { d.stop().fadeTo(n.duration, 0, b.isFunction(n.onZoomOut) ? n.onZoomOut.call(p) : !1) } var i = b.zoom(j, q, p, n.magnify); "grab" === n.on ? o.on("mousedown.zoom", function (f) { 1 === f.which && (b(document).one("mouseup.zoom", function () { l(), b(document).off(g, i.move) }), e(f), b(document).on(g, i.move), f.preventDefault()) }) : "click" === n.on ? o.on("click.zoom", function (f) { return h ? void 0 : (h = !0, e(f), b(document).on(g, i.move), b(document).one("click.zoom", function () { l(), h = !1, b(document).off(g, i.move) }), !1) }) : "toggle" === n.on ? o.on("click.zoom", function (f) { h ? l() : e(f), h = !h }) : "mouseover" === n.on && (i.init(), o.on("mouseenter.zoom", e).on("mouseleave.zoom", l).on(g, i.move)), n.touch && o.on("touchstart.zoom", function (f) { f.preventDefault(), t ? (t = !1, l()) : (t = !0, e(f.originalEvent.touches[0] || f.originalEvent.changedTouches[0])) }).on("touchmove.zoom", function (f) { f.preventDefault(), i.move(f.originalEvent.touches[0] || f.originalEvent.changedTouches[0]) }).on("touchend.zoom", function (f) { f.preventDefault(), t && (t = !1, l()) }), b.isFunction(n.callback) && n.callback.call(p) }, p.setAttribute("role", "presentation"), p.alt = "", p.src = n.url }) }, b.fn.zoom.defaults = a })(window.jQuery);