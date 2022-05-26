    (function ($) {

    $.fn.VideoPopUp = function (options) {
        
        var patter = this.attr('id');

        var settings = $.extend({}, options);

        var video = document.getElementById(settings.idvideo);
        function stopVideo() {
            video.pause();
            video.currentTime = 0;
        }
        
    $('#' + patter + '').css("display", "none");
        $("#" + settings.opener + "").on('click', function () {
            $('#' + patter + "").show();
            $('#'+settings.idvideo+'').trigger('play');
				return false;
        });
		
        $(".video-popup__close").on('click', function () {
            if(settings.pausevideo==true){
                    $('#'+settings.idvideo+'').trigger('pause');
                }else{
                    stopVideo();
                }
            $('#' + patter + "").hide();
        });
        return this.css({

        });
    };

}(jQuery));