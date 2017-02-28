$(document).ready(function() {

$('.nav-toggle, .nav-toggle-close').click(function(){
$('.nav').toggleClass('nav--active');
});

//slick

$('.main-slider').slick({
  slidesToScroll: 1,
  autoplay: true,
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

$('.product-slider').slick({
  slidesToScroll: 1,
  slidesToShow: 4,
  dots: false,
  arrows: true,
   responsive: [ 
  {
    breakpoint: 760,
      settings: {
        slidesToShow: 3,
      }
  },

    {
    breakpoint: 480,
      settings: {
        slidesToShow: 2,
      }
  },

  ]
});

$('.catalog__list').slick({
  slidesToScroll: 5,
  slidesToShow: 5,
  dots: true,
  arrows: false,
   responsive: [ 
  {
    breakpoint: 760,
      settings: {
        slidesToScroll: 3,
        slidesToShow: 3,
      }
  },

    {
    breakpoint: 480,
      settings: {
        slidesToScroll: 2,
        slidesToShow: 2,
      }
  },

  ]
});


$('.gallery__list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: true,
  asNavFor: '.gallery-nav'
});

$('.gallery-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.gallery__list',
  centerMode: true,
  centerPadding: '0px',
  focusOnSelect: true,
  vertical: true,
});

//zoom

$('.gallery__item').zoom();


/*popup*/

  $('.user__login-link').magnificPopup({
  type: 'inline',
  fixedContentPos: false,
  fixedBgPos: true,
  closeBtnInside: true,
  preloader: false, 
  midClick: true,
  focus: '#name',
  removalDelay: 100,
  mainClass: 'zoom-in',
  callbacks: {
    beforeOpen: function() {
      if($(window).width() < 700) {
        this.st.focus = false;
      } else {
        this.st.focus = '#name';
      }
    }
  }

  });

  $(".product__feature").easyResponsiveTabs({
    type: 'default',          
    width: 'auto',
    fit: true,
});

});  
