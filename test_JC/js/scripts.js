$(document).ready(function () {

 $('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
  var target = $(this).attr('href'),
   bl_top = $(target).offset().top - 5;
  $('body, html').animate({ scrollTop: bl_top }, 700);
  return false;
 });

});