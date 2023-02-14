$(document).ready(function () {

 $('.nav-trigger').click(function () {
  $('.nav').toggleClass('open');
  $(this).toggleClass('open');
  return false;
 });

 $('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
  $('.nav').removeClass('open');
  $('.nav-trigger').removeClass('open');
  var target = $(this).attr('href'),
   bl_top = $(target).offset().top - 0;
  $('body, html').animate({ scrollTop: bl_top }, 700);
  return false;
 });

 var swiper = new Swiper('.party__slider', {
  slidesPerView: 3,
  spaceBetween: 20,
  cssMode: true,
  pagination: {
   el: '.swiper-pagination',
   clickable: true,
  },
  navigation: {
   nextEl: '.party-next',
   prevEl: '.party-prev',
  },
  breakpoints: {
   770: {
    slidesPerView: 'auto',
    spaceBetween: 20,
   }
  }
 });

 $('#career-file').change(function () {
  if (this.files[0]) {// если выбрали файл
   $('.load-resumefile').text(this.files[0].name).css('display', 'block');
   $('.send-resume').css('display', 'block');
   $('.load-resume').css('display', 'none');
  }
 });
});

/*tabs */

let tab = function () {
 let tabNav = document.querySelectorAll('.vacansy__nav-item'),
  tabContent = document.querySelectorAll('.vacansy__item'),
  tabName;

 tabNav.forEach(item => {
  item.addEventListener('click', selectTabNav)
 });

 function selectTabNav() {
  tabNav.forEach(item => {
   item.classList.remove('current');
  });
  this.classList.add('current');
  tabName = this.getAttribute('data-tab-name');
  selectTabContent(tabName);
 }

 function selectTabContent(tabName) {
  tabContent.forEach(item => {
   item.classList.contains(tabName) ? item.classList.add('current') : item.classList.remove('current');
  })
 }

};

tab();

/*open/close vacancy wrapper on mobil */

var tabMenu = document.querySelectorAll('.vacansy__nav-item'),
 tabWrap = document.querySelector('.vacansy__wrapper'),
 tabClose = document.querySelectorAll('.vacansy__close'),
 root = document.documentElement;



if (window.matchMedia("screen and (min-width: 1px) and (max-width:780px)").matches) {
 tabMenu.forEach(function (i) {
  i.onclick = function () {
   tabWrap.classList.add('shown');
   root.classList.add('overflow');
  };
 });
 tabClose.forEach(function (i) {
  i.onclick = function () {
   tabWrap.classList.remove('shown');
   root.classList.remove('overflow');
  }
 });
}



jQuery(window).resize(function () {
 tabWrap.classList.remove('shown');
 root.classList.remove('overflow');
 if (window.matchMedia("screen and (min-width: 1px) and (max-width:780px)").matches) {
  tabMenu.forEach(function (i) {
   i.onclick = function () {
    tabWrap.classList.add('shown');
    root.classList.add('overflow');
   };
  });
  tabClose.forEach(function (i) {
   i.onclick = function () {
    tabWrap.classList.remove('shown');
    root.classList.remove('overflow');
   }
  });
 }
});

/*form validation*/
var email = document.querySelector("[type=email]");
var error = document.querySelector(".error-msg");
var sedBtn = document.querySelector(".send-resume");
var form = document.querySelector("#vacansy-form");

email.addEventListener("input", function (event) {
 // Каждый раз, когда пользователь вводит что-либо, мы проверяем,
 // является ли корректным поле электронной почты.
 if (email.validity.valid) {
  // В случае появления сообщения об ошибке, если поле
  // является корректным, мы удаляем сообщение об ошибке.
  error.innerHTML = ""; // Сбросить содержимое сообщения
  error.className = "error"; // Сбросить визуальное состояние сообщения
 }
}, false);
form.addEventListener("submit", function (event) {
 // Каждый раз, когда пользователь пытается отправить данные, мы проверяем
 // валидность поля электронной почты.
 if (!email.validity.valid) {

  // Если поле невалидно, отображается пользовательское
  // сообщение об ошибке.
  error.innerHTML = email.validationMessage;
  error.className = "error-msg show";
  // И мы предотвращаем отправку формы путем отмены события
  event.preventDefault();
 }
}, false);