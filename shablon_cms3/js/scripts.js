$(document).ready(function () {

 //Работа с header при скролле
 let scrollPos = 0,
  header = document.querySelector('.header'),
  popupRing = document.querySelector('.popup-container');
 $(window).scroll(function () {
  var st = $(this).scrollTop();
  if (st > scrollPos) {
   !header.classList.contains('hide') ? header.classList.add('hide') : "";
   !popupRing.classList.contains('hide') ? popupRing.classList.add('hide') : "";
  } else {
   header.classList.remove('hide');
   popupRing.classList.remove('hide');
  }
  scrollPos = st;
 });


 //мобильное меню и плавный скролл
 $('.menu-trigger').click(function () {
  $('.menu').toggleClass('open');
  $(this).toggleClass('open');
  return false;
 });

 $('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
  $('.menu').removeClass('open');
  $('.menu-trigger').removeClass('open');
  var target = $(this).attr('href'),
   bl_top = $(target).offset().top - 0;
  $('body, html').animate({ scrollTop: bl_top }, 700);
  return false;
 });

 //Попапы
 setTimeout(function () {
  let popup = document.querySelectorAll('.popup'),
   score = document.querySelector('.score'),
   order_score = document.querySelector('.order-score'),
   balance = document.querySelector('.balance'),
   guests = document.querySelector('.guests'),
   close = document.querySelectorAll('.popup__close'),
   l = 0,
   count_score = localStorage.getItem("count_score") ? parseInt(localStorage.getItem("count_score")) : 10,
   count_balance = localStorage.getItem("count_balance") ? parseInt(localStorage.getItem("count_balance")) : 34,
   interval = setInterval(function () {
    if (count_balance > 0) {
     if (l % 2 == 0) {
      score.innerText = count_score;
      order_score.innerText = count_score;
      balance.innerText = count_balance;
      localStorage.setItem("count_score", ++count_score);
      localStorage.setItem("count_balance", --count_balance);
      popup[0].classList.add('show');
      setTimeout(function () {
       popup[0].classList.remove('show');
      }, 5000);
     } else {
      popup[1].classList.add('show');
      guests.innerText = Math.floor(Math.random() * 150) + 100 + " человек";
      setTimeout(function () {
       popup[1].classList.remove('show');
      }, 4000);
     }
     l++;
    } else {
     clearInterval(interval);
    }
   }, 30000);
  close.forEach(function (elem) {
   elem.addEventListener('click', function () {
    popup.forEach(function (el) {
     el.classList.remove('show');
    })
   })
  })
 }, 3000)

});