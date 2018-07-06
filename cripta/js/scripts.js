$(document).ready(function () {
$('.languages__btn').click(function () {
    $('.languages__list').toggleClass('languages__list-active');
  });

  $('.login-btn').click(function () {
    $('.login').toggleClass('login-active');
  });

  $('.login-btn-mobile').click(function () {
    $('.overlay-login').toggleClass('active');
  });


  $('.menu-trigger').click(function () {
      $('.menu-trigger, .site-wrapper, .main-nav').toggleClass('active');
      // $('.site-wrapper').toggleClass('active');
      // $('.main-nav').toggleClass('active');
  });

$('.languages-btn').click(function () {
    $('.languages__list-mobile').toggleClass('active');
  });

 $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
      var target = $(this).attr('href'),
          bl_top = $(target).offset().top - 250;
      $('body, html').animate({scrollTop: bl_top}, 700);
      return false;
    });

   $(".btn-popup").click(function(){
    $(".overlay").css({"display":"flex"}).fadeIn();
    return false;
  });

  $(".popup-close").click(function(){
    $(".overlay").fadeOut();
    return false;
  });

  });
