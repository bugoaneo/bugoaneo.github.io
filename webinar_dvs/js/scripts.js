 $(document).ready(function() {


 var clock;
      var diff;
      if(localStorage.getItem('time_offset')){
          diff  = localStorage.getItem('time_offset');
      }else {
          diff =getTimeOffset ();
          localStorage.setItem('time_offset',diff);
      }
      document.querySelector('input[name=webinar_date_offset]').value = parseInt(diff/1000);
        clock('#head-timer');
        clock('#popup-timer');
        clock('#call-timer');

    function clock(attr){
      var clock = $(attr).FlipClock( {
            countdown: true,
            clockFace: 'MinuteCounter',
            showSeconds: true,
        });
        clock.setTime(diff/1000);
        clock.setCountdown(true);
        clock.start();
    }

  function getTimeOffset ()
  {
      var now = new Date();
      var oldTime = now.getTime();
      var min = now.getMinutes();
      var offset = min;
      min = (min)%60;
      if(min >= 0 && min<=15){
          offset+= 15 - min;
      }
      if(min > 15 && min<=30){
          offset+= 30 - min;
      }
      if(min > 30 && min<=45){
          offset+= 45 - min;
      }
      if(min > 45 && min <= 60){
          offset+= 60 - min;
      }
       if((offset - min)<10 ){
          offset+= 15
      }
      now.setMinutes(offset);
      return now.getTime() - oldTime;
  };

    var offset = $('html,body').scrollTop();
    var $pop  = $('.popup'), width = $pop.width()+40, 
    height = $('.call').height(), offset_widget = $('.call') .offset().top,
    bottom_form = parseInt(offset_widget+$('.call').height());
    $pop.css('right',-width+'px');
    
    function show__(time){
            var idData = getRandomArbitrary(0,3);
            var $pop  = $('.popup'), width = $pop.width()+40;
            time = parseInt(time/2);
            $pop.show();
                if (document.documentElement.clientWidth < 1000 ) {
                    $pop.css('position', 'absolute');
                    $pop.css('right', '20px');    
                    if (bottom_form >= offset) {
                        $pop.css('top', bottom_form+'px');
                    } else {
                        $pop.css('top', (offset+$(window).height()-$('.popup').height()-20)+'px');
                    }
                } else {
                    $pop.animate({right: '20px'});
                }
            // setTimeout(function () {
                $pop.fadeOut(parseInt(time),function () {
                    $pop.css('right',-width+'px')
                });
            // }, parseInt(time/2));

    }

    var listener =false;
    offset_show_popup = $('.call').offset().top;
    document.addEventListener('scroll',function () {
        offset = $('html,body').scrollTop();
        if(!listener &&  offset_show_popup <= offset ) {
            listener = true;
            tick();
        }
    });


  $(".btn-popup").click(function(){
    $(".overlay").fadeIn();
  });

  $(".btn-close").click(function(){
    $(".overlay").fadeOut();
  });
});
var btn =  document.querySelector('.ct-right'),
    btn2 = document.querySelector('.ct-left')
    wrapper = document.querySelector('.counters__list');
 document.addEventListener('DOMContentLoaded', function () {   
    // var button = document.getElementById('slide');
    btn.onclick = function () {
      wrapper.scrollLeft += 300;
    };
   btn2.onclick = function () {
      wrapper.scrollLeft -= 300;
    };
}, false);