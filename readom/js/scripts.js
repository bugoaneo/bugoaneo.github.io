$(document).ready(function () {

 $('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
  var target = $(this).attr('href'),
   bl_top = $(target).offset().top - 250;
  $('body, html').animate({ scrollTop: bl_top }, 700);
  return false;
 });

 // date refresh

 var heroDate = document.querySelector('.hero__day'),
  d = new Date(),
  nowDate = d.getDate() + 2,
  heroMonth = document.querySelector('.hero__month'),
  month = new Array("Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"),
  nowMonth = month[d.getMonth()];
 heroDate.innerHTML = nowDate;
 heroMonth.innerHTML = nowMonth;


});

var swiper = new Swiper('.swiper-container', {
 slidesPerView: 2,
 spaceBetween: 40,
 grabCursor: true,
 navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
 },
 breakpoints: {
  700: {
   slidesPerView: 1,
   spaceBetween: 10,
   autoHeight: true,
  }
 }
});

var remain_bv = 80768;
function parseTime_bv(timestamp) {
 if (timestamp < 0) timestamp = 0;

 var day = Math.floor((timestamp / 60 / 60) / 24);
 var hour = Math.floor(timestamp / 60 / 60);
 var mins = Math.floor((timestamp - hour * 60 * 60) / 60);
 var secs = Math.floor(timestamp - hour * 60 * 60 - mins * 60);
 var left_hour = Math.floor((timestamp - day * 24 * 60 * 60) / 60 / 60);

 $('span.day').text(day);
 $('span.hours').text(left_hour);

 if (String(mins).length > 1)
  $('span.min').text(mins);
 else
  $('span.min').text("0" + mins);
 if (String(secs).length > 1)
  $('span.sec').text(secs);
 else
  $('span.sec').text("0" + secs);

}

$(document).ready(function () {
 setInterval(function () {
  remain_bv = remain_bv - 1;
  parseTime_bv(remain_bv);
  if (remain_bv <= 0) {

  }
 }, 1000);
});