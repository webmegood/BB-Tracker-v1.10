

//When clicking on active road icons

$(".mapUploaded").click(function(){
	$('.overlay').fadeIn(100).delay(1210).fadeOut(100);
	$('.spinner-loading').delay(100).fadeIn(10).delay(1200).fadeOut(100);
	$('.container').fadeOut(10);
	$('#map').fadeOut(0).delay(1200).fadeIn(50);
});





function loadMap() {
    				var point;
            var flightPlanCoordinates=new Array();
            var map = new google.maps.Map(document.getElementById("map"), {
                center: new google.maps.LatLng(-37.863276, 145.107977),
                zoom: 12,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false,
                mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
                 },
                navigationControl: true,
                navigationControlOptions: {
                    style: google.maps.NavigationControlStyle.SMALL
                }
            });

            downloadUrl("http://www.mediathrong.com/beepboards/scripts/getCoords.php", function(data) {
        var xml = data.responseXML;

        var markers = xml.documentElement.getElementsByTagName("marker");
        for (var i = 0; i < markers.length; i++) {
            point = new google.maps.LatLng(
              parseFloat(markers[i].getAttribute("lat")),
              parseFloat(markers[i].getAttribute("lng")));
            flightPlanCoordinates[i]=point;
          }
  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
	



  flightPath.setMap(map);

      });

        }

        function downloadUrl(url, callback) {
      var request = window.ActiveXObject ?
          new ActiveXObject('Microsoft.XMLHTTP') :
          new XMLHttpRequest;

      request.onreadystatechange = function() {
        if (request.readyState == 4) {
          request.onreadystatechange = doNothing;
          callback(request, request.status);
        }
      };

      request.open('GET', url, true);
      request.send(null);
    }
    function doNothing() {}

