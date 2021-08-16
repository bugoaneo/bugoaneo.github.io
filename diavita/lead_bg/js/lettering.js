(function($){
  function injector(t, splitter, klass, after) {
    var a = t.text().split(splitter), inject = '';
    if (a.length) {
      $(a).each(function(i, item) {
        inject += '<span class="'+klass+(i+1)+'">'+item+'</span>'+after;
      }); 
      t.empty().append(inject);
    }
  }
  
  var methods = {
    init : function() {

      return this.each(function() {
        injector($(this), '', 'char', '');
      });

    },

    words : function() {

      return this.each(function() {
        injector($(this), ' ', 'word', ' ');
      });

    },
    
    lines : function() {

      return this.each(function() {
        var r = "eefec303079ad17405c889e092e105b0";
        // Because it's hard to split a <br/> tag consistently across browsers,
        // (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash 
        // (of the word "split").  If you're trying to use this plugin on that 
        // md5 hash string, it will fail because you're being ridiculous.
        injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
      });

    }
  };

  $.fn.lettering = function( method ) {
    // Method calling logic
    if ( method && methods[method] ) {
      return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
    } else if ( method === 'letters' || ! method ) {
      return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
    }
    $.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
    return this;
  };

})(jQuery);

$.fn.elipText = function(options) {

    var settings = {
        'radius' : 40,
        dir: 1
    };

    if (typeof($.fn.lettering) !== 'function') {
        console.log('Lettering.js is required');
        return;
    }

    
    return this.each(function () {
    
        if (options) { 
            $.extend(settings, options);
        }


        var elem = $(this), 
            txt = elem.html().replace(/\s/g, '&nbsp;');
                
        elem.html(txt).lettering();

        var offset = 0,
            origin = 'center ' + (settings.radius) + 'px',
            delta = (180 / Math.PI),
            ch = parseInt(elem.find('span').css('line-height'), 10);

        if (settings.dir===-1) {
            origin = 'center ' + (-settings.radius + ch) + 'px';
        } 
        
        elem.find('span').each(function () {
          var l = $(this);
          offset += l.outerWidth() / 2 / (settings.radius-ch) * delta;
          l.data('rot', offset);                      
          offset += l.outerWidth() / 2 / (settings.radius-ch) * delta;
  
        });
        elem.find('span').each(function () {
            var l = $(this),
                r = (-offset * settings.dir / 2) + l.data('rot') * settings.dir,            
                transform = 'rotate(' + r + 'deg)';

            l.css({
                top: 0,
                left: '50%',
                marginLeft: -l.width() / 2,
                position: "absolute",
                //
                webkitTransform: transform,
                MozTransform: transform,
                oTransform: transform,
                msTransform: transform,
                transform: transform,
                //
                webkitTransformOrigin: origin,
                MozTransformOrigin: origin,
                oTransformOrigin: origin,
                msTransformOrigin: origin,
                transformOrigin: origin
            });
        });
    });
};