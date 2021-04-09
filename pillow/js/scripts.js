$(document).ready(function () {

 $('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
  var target = $(this).attr('href'),
   bl_top = $(target).offset().top - 0;
  $('body, html').animate({ scrollTop: bl_top }, 700);
  return false;
 });



 function CountdownTracker(label, value) {

  var el = document.createElement('span');

  el.className = 'flip-clock__piece';
  el.innerHTML = '<b class="flip-clock__card card"><b class="card__top"></b><b class="card__bottom"></b><b class="card__back"><b class="card__bottom"></b></b></b>' +
   '<span class="flip-clock__slot">' + label + '</span>';

  this.el = el;

  var top = el.querySelector('.card__top'),
   bottom = el.querySelector('.card__bottom'),
   back = el.querySelector('.card__back'),
   backBottom = el.querySelector('.card__back .card__bottom');

  this.update = function (val) {
   val = ('0' + val).slice(-2);
   if (val !== this.currentValue) {

    if (this.currentValue >= 0) {
     back.setAttribute('data-value', this.currentValue);
     bottom.setAttribute('data-value', this.currentValue);
    }
    this.currentValue = val;
    top.innerText = this.currentValue;
    backBottom.setAttribute('data-value', this.currentValue);

    this.el.classList.remove('flip');
    void this.el.offsetWidth;
    this.el.classList.add('flip');
   }
  }

  this.update(value);
 }

 // Calculation adapted from https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/

 function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  return {
   'Total': t,
   // 'Days': Math.floor(t / (1000 * 60 * 60 * 24)),
   'Часов': Math.floor((t / (1000 * 60 * 60)) % 24),
   'Минут': Math.floor((t / 1000 / 60) % 60),
   'Секунд': Math.floor((t / 1000) % 60)
  };
 }

 function getTime() {
  var t = new Date();
  return {
   'Total': t,
   'Hours': t.getHours() % 12,
   'Minutes': t.getMinutes(),
   'Seconds': t.getSeconds()
  };
 }

 function Clock(countdown, callback, selector) {

  countdown = countdown ? new Date(Date.parse(countdown)) : false;
  callback = callback || function () { };

  var updateFn = countdown ? getTimeRemaining : getTime;
  this.el = document.querySelector(selector);

  var trackers = {},
   t = updateFn(countdown),
   key, timeinterval;

  for (key in t) {
   if (key === 'Total') { continue; }
   trackers[key] = new CountdownTracker(key, t[key]);
   this.el.appendChild(trackers[key].el);
  }

  var i = 0;
  function updateClock() {
   timeinterval = requestAnimationFrame(updateClock);

   // throttle so it's not constantly updating the time.
   if (i++ % 10) { return; }

   var t = updateFn(countdown);
   if (t.Total < 0) {
    cancelAnimationFrame(timeinterval);
    for (key in trackers) {
     trackers[key].update(0);
    }
    callback();
    return;
   }

   for (key in trackers) {
    trackers[key].update(t[key]);
   }
  }

  setTimeout(updateClock, 500);
 }

 var deadline = new Date(Date.parse(new Date()) + 1 * 1 * 30 * 60 * 1000);
 let masSelectors = ['.timer-clock1', '.timer-clock2'];
 masSelectors.forEach(function (el) {
  new Clock(deadline, function () { }, el);
 });

 /*slider*/

 var galleryThumbs = new Swiper('.slider__thumb', {
  spaceBetween: 5,
  slidesPerView: 6,
  slideToClickedSlide: true,
  direction: 'vertical',
  cssMode: true
 });
 var galleryTop = new Swiper('.slider__list', {
  spaceBetween: 10,
  effect: 'fade',
  pagination: {
   el: '.slider__pagination',
  },
  thumbs: {
   swiper: galleryThumbs
  },
  breakpoints: {
   780: {
    pagination: false
   }
  }
 });

 var swiper = new Swiper('.reviews__slider-container', {
  spaceBetween: 10,
  slidesPerView: 1,
  loop: true,
  loopedSlides: 2,
  navigation: {
   nextEl: '.reviews__slider-next',
   prevEl: '.reviews__slider-prev',
  },
  breakpoints: {
   750: {
    slidesPerView: 3,
    spaceBetween: 18,
   },
  }
 });

});