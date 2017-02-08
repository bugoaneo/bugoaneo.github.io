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

$('.banner__wrapper').slick({
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  dots: false,
  arrows: false,
  responsive: [ 
  {
    breakpoint: 599,
      settings: {
        autoplay: false,
      }
  }

  ]
});

$('.banner__wrapper').slick({
  slidesToScroll: 1,
  autoplay: false,
  dots: true,
  arrows: false,
  responsive: [ 
  {
    breakpoint: 599,
      settings: {
        autoplay: false,
      }
  }

  ]
});

$('.mobil__slider-list').slick({
  slidesToScroll: 1,
  slidesToShow: 2,
  autoplay: false,
  dots: false,
  arrows: true,
   responsive: [ 
  {
    breakpoint: 300,
      settings: {
        slidesToShow: 1,
      }
  }

  ]
});

$('.user-form__button').click(function(){
  $('.user-form__input').toggleClass('user-form__input--active');
});


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
   
//navigation

  $('.mobil__nav-item .mobil__nav-dropdown').not('.mobil__nav-dropdown--active').hide();
  
    $('.mobil__nav-item .mobil__nav-link').click(function() {
      
      var findArticle = $(this).next();
      var findWrapper = $(this).closest('.mobil__nav-item');
      
      if (findArticle.is(':visible')) {
        findArticle.slideUp('fast');
      }
      else {
        findWrapper.find('.mobil__nav-dropdown').slideUp('600');
        findArticle.slideDown('600');
      }
  });

    $('.menu-toggle').click(function(){
  $('.mobil__nav-list').toggleClass('mobil__nav-list--active');
});


});  