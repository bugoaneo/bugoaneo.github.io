DG.then(function () {
        map = DG.map('map', {
            center: [54.98, 82.89],
            zoom: 13,
              scrollWheelZoom: false,
              fullscreenControl: false
        });
                myIcon = DG.icon({
                    iconUrl: 'img/map-pin.png',
                    iconSize: [230, 190]
                });
                DG.marker([54.98, 82.89], {
                    icon: myIcon
                }).addTo(map);

                
                DG.marker([54.98, 82.89], {
                    icon: myDivIcon
                }).addTo(map);
            });
			
$(document).ready(function() { 

	//scroll

$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
    var target = $(this).attr('href'),
        bl_top = $(target).offset().top - 0;
    $('body, html').animate({scrollTop: bl_top}, 700);
    return false;
  });
  
 
 
});

 //popup
  $(document).ready(function(){
        PopUpHide();
    });
    function PopUpShow(){
        $(".pop-up-wrapper").show();
    }
    function PopUpHide(){
        $(".pop-up-wrapper").hide();
    }