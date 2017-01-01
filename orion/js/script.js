
$(document).ready(function() {
 
  DG.then(function () {
    map = DG.map('map', {
    center: [54.98, 82.89],
    zoom: 13,
      scrollWheelZoom: false,
      fullscreenControl: false
      });
  });

   
  $("[data-input-mask='phone']").mask("+7-999-999-99-99");

//popups
  $('.recall__link, .order-btn').magnificPopup();


//accordion

  $('.faq__list .faq__text').not('.faq__text--active').hide();
  
      $('.faq__list .faq__header').click(function() {
        
        var findArticle = $(this).next();
        var findWrapper = $(this).closest('.faq__list');
        
        if (findArticle.is(':visible')) {
          findArticle.slideUp('fast');
        }
        else {
          findWrapper.find('.faq__text').slideUp('600');
          findArticle.slideDown('600');
        }
  });

//scroll

$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
    var target = $(this).attr('href'),
        bl_top = $(target).offset().top - 0;
    $('body, html').animate({scrollTop: bl_top}, 700);
    return false;
  });


});
