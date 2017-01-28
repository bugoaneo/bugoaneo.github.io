$(document).on("scroll",function(){
  if($(document).scrollTop()>80){ 
    $("header").removeClass("site-header").addClass("site-header--stiky");
  }
  else{
    $("header").removeClass("site-header--stiky").addClass("site-header");
  }

  if($(document).scrollTop()>80){ 
      $("svg").removeClass("logo__svg--white").addClass("logo__svg");
    }
    else{
      $("svg").removeClass("logo__svg").addClass("logo__svg--white");
    }

});




$(document).ready(function() {

//scroll

$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
    var target = $(this).attr('href'),
        bl_top = $(target).offset().top - 0;
    $('body, html').animate({scrollTop: bl_top}, 700);
    return false;
  });



//click

$('.slider__wrapper').slick({
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  dots: true,
  responsive: [ 
  {
    breakpoint: 480,
      settings: {
        arrows: false,
        dots: true,
        autoplay: false,
      }
  }

  ]
});

 $('.partners__list').slick({
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    dots: false,
    responsive: [ {
    breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
      }
    }
  ]
  });

 $('.blog__list-wrapper').slick({
    infinite: false,
    slidesToShow: 3,
    arrows: true,
    dots: false,
    infinite: false,
    responsive: [ {
    breakpoint: 680,
      settings: {
        slidesToShow: 1,
        centerMode: true,
      }
    },
    {
       breakpoint: 800,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
  });


  $('.blog__post-sliderwrap').slick({
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    dots: true,
    infinite: false,
  });



  //popups 

$('.pop-up').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    image: {
      verticalFit: false
    }
  });

  $('.pop-up--video').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });




//counter
var show = true;
  var countbox = "#counters";
  $(window).on("scroll load resize", function(){

    if(!show) return false;

    var w_top = $(window).scrollTop();
    var e_top = $(countbox).offset().top;

    var w_height = $(window).height();
    var d_height = $(document).height();

    var e_height = $(countbox).outerHeight();

    if(w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
      $('.counters__value').spincrement({
        from: 0,
        thousandSeparator: "",
        duration: 1200
      });

      show = false;
    }
  });

});