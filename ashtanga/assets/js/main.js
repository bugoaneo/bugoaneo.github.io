//spinner
$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

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
      (this.classList.contains("menu-toggle--active") === true) ? 
      this.classList.remove("menu-toggle--active") : this.classList.add("menu-toggle--active");
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

//tickets

  $('.payment__descr').hide();
  $('.payment__btn').click(function(){
      $(this).next().slideToggle();
  });

//pop-up

  $('.social-list__link--mail, .footer__email, .contacts__email').magnificPopup({
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

  $('.banner__toggle-head').click(function(){
  $('.banner').toggleClass('banner--active');
});

//slider

$('.person__gallery-list').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
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