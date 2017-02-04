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


//accordion

  $('.product__spec .product__description').not('.product__description--active').hide();
  
    $('.product__spec .product__caption').click(function() {
      
      var findArticle = $(this).next();
      var findWrapper = $(this).closest('.product__spec');
      
      if (findArticle.is(':visible')) {
        findArticle.slideUp('fast');
      }
      else {
        findWrapper.find('.product__description').slideUp('600');
        findArticle.slideDown('600');
      }
  });

  $('.product__reviews .product__reviews-list').not('.product__reviews-list--active').hide();
  
    $('.product__reviews .product__caption').click(function() {
      
      var findArticle = $(this).next();
      var findWrapper = $(this).closest('.product__reviews');
      
      if (findArticle.is(':visible')) {
        findArticle.slideUp('fast');
      }
      else {
        findWrapper.find('.product__reviews-list').slideUp('600');
        findArticle.slideDown('600');
      }
  });
   

});  