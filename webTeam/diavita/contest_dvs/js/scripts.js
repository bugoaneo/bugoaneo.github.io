$(document).ready(function() {
  
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