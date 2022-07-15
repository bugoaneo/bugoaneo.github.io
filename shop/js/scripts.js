$('.menu-trigger').click(function () {
 $('.menu').addClass('open');
 $('.main-menu_open').addClass('open');
 $('body').addClass('overflow');
});


// $(document).mouseup(function (e) {
//  if (!$('.menu').is(e.target) && $('.menu').has(e.target).length === 0) {
//   $('.menu').removeClass('open');
//  }
// });


$('.main-menu_open').click(function () {
 $('.menu').removeClass('open');
 $(this).removeClass('open');
 $('body').removeClass('overflow');
 $('.dropdown__wrapper').removeClass('open');
});

$('.menu__more-main').click(function () {
 $(this).next('.dropdown__wrapper').toggleClass('open');
});

$('.menu__header .menu__more-main').click(function () {
 $(this).closest('.dropdown__wrapper').toggleClass('open');
});

$('.dropdown__menu-item').click(function () {
 var href = $(this).attr('data-id');
 $('.dropdown__submenu').removeClass('current');
 ($('#' + href)).addClass('current');
 $('.dropdown__container').toggleClass('open');
});



$('.menu__header .menu__more-sub').click(function () {
 $('.dropdown__container').toggleClass('open');
});


if (window.matchMedia("(min-width: 900px)").matches) {
 $('.dropdown__menu-item').on('mouseover', function () {
  var href = $(this).attr('data-id');
  $('.dropdown__menu-item').removeClass('current');
  $('.dropdown__submenu').removeClass('current');
  $(this).addClass('current');
  ($('#' + href)).addClass('current');
 })
}

if (window.matchMedia("(max-width: 900px)").matches) {
 $('.dropdown__menu-item').removeClass('current');
}