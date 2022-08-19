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


 /*slider*/


 (function () {
  'use strict';
  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia('(min-width:789px)');
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
   mySwiper = new Swiper('.reviews__slider-container', {
    autoHeight: true,
    navigation: {
     nextEl: '.reviews__slider-next',
     prevEl: '.reviews__slider-prev',
    },
    pagination: {
     el: '.reviews__slider-pagination',
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

});