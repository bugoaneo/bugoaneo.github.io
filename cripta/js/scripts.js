$(document).ready(function() {

  $('.languages__btn').click(function() {
    $('.languages__list').toggleClass('languages__list-active');
  });

  $('.login-btn').click(function() {
    $('.login').toggleClass('login-active');
  });

  $('.login-btn-mobile').click(function() {
    $('.overlay-login').toggleClass('active');
  });


  $('.menu-trigger').click(function() {
    $('.menu-trigger, .site-wrapper, .main-nav').toggleClass('active');
  });

  $('.languages-btn').click(function() {
    $('.languages__list-mobile').toggleClass('active');
  });

  $('a[data-target^="anchor"]').bind('click.smoothscroll', function() {
    var target = $(this).attr('href'),
      bl_top = $(target).offset().top - 250;
    $('body, html').animate({ scrollTop: bl_top }, 700);
    return false;
  });

});

//open single modal window
var modal = document.querySelector('.overlay-login');
var modalBtn = document.querySelector('.login-btn-mobile');
var closeBtn = document.querySelector('.btn-modal-close');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}


/*sticky header*/
var header = document.querySelector(".main-nav__list");
var logo = document.querySelector(".header__logo");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header-sticky");
    logo.classList.add("header-sticky");
  } else {
    header.classList.remove("header-sticky");
    logo.classList.remove("header-sticky");
  }
}

if (window.matchMedia("(min-width: 800px)").matches) {
  window.onscroll = function() { myFunction() };
}
