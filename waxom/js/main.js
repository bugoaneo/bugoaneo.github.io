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



//flickty

$('.blog__post-sliderwrap').flickity({
  
  });

 $('.partners__list').flickity({

  });


  $('.slider__wrapper').flickity({
    wrapAround: true,
    autoPlay: 2500,
    setGallerySize: true,
    adaptiveHeight: true,
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