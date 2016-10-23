 function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          scrollwheel: false,
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADTYPE,
          panControl: false,
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: true
        });
        google.maps.event.addDomListener(window, "load", initialize);
      }