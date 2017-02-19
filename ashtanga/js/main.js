$(document).ready(function(){
	
//toggle-menu
$('.menu-toggle').click(function(){
  $('.main-nav__list').toggleClass('main-nav__list--active');
});

(function() {

  "use strict";

  var toggles = document.querySelectorAll(".menu-toggle");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("menu-toggle--active") === true) ? this.classList.remove("menu-toggle--active") : this.classList.add("menu-toggle--active");
    });
  }

})();

//scroll

$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
    var target = $(this).attr('href'),
        bl_top = $(target).offset().top - 0;
    $('body, html').animate({scrollTop: bl_top}, 900);
    return false;
  });

});

  DG.then(function () {
        map = DG.map('map', {
            center: [55.740601, 37.635445],
        zoom: 17,
          scrollWheelZoom: false,
          fullscreenControl: false
        });

        DG.marker([55.740601, 37.635445]).addTo(map);
});

/*$(window).resize(function(){
var windowWidth = $(window).width();
if(windowWidth < 769) {
$('.stn__inner').removeClass('stn__inner').addClass('stn__inner-tab');
} else {
  $('.stn__inner-tab').removeClass('stn__inner-tab').addClass('stn__inner');
}

  $('.stn__inner-tab .schedule__item-wrapper').not('.schedule__item-wrapper--active').hide();
  
      $('.stn__inner-tab .schedule__header').click(function() {
        
        var findArticle = $(this).next();
        var findWrapper = $(this).closest('.stn__inner-tab');
        
        if (findArticle.is(':visible')) {
          findArticle.slideUp('fast');
        }
        else {
          findWrapper.find('.schedule__item-wrapper').slideUp('600');
          findArticle.slideDown('600');
        }
  });

});
*/