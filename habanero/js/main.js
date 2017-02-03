$(document).ready(function() {
//slick

$('.slider__wrapper').slick({
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  dots: true,
  arrows: false,
  responsive: [ 
  {
    breakpoint: 480,
      settings: {
        autoplay: false,
      }
  }

  ]
});

$('.user-form__button').click(function(){
  $('.user-form__input').toggleClass('user-form__input--active');
});

/*$('.user__link--login').click(function(){
  $('.login-form').toggleClass('login-form--active');
});*/

});  