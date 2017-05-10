//When clicking on active road icons

$(".mapUploaded").click(function(){
	$('.overlay').fadeIn(100).delay(1210).fadeOut(100);
	$('.spinner-loading').delay(100).fadeIn(10).delay(1200).fadeOut(100);
	$('.container').fadeOut(10);
	$('#map').fadeOut(0).delay(1200).fadeIn(50);
	$('#go_back_to_tracks').hide(0);
	$('#go_back_to_tracks_log').show(0);
});







function loadMap(d) {

   					var point;
            var flightPlanCoordinates=new Array();
            var map = new google.maps.Map(document.getElementById("map"), {
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
				
				
				
//create empty LatLngBounds object
var bounds = new google.maps.LatLngBounds();
var infowindow = new google.maps.InfoWindow();				
				

        var markers = xml.documentElement.getElementsByTagName("marker");
				
        for (var i = 0; i < markers.length; i++) {
						var id = markers[i].getAttribute("id");
						var timestamp = markers[i].getAttribute("timestamp");
            var point = new google.maps.LatLng(
              parseFloat(markers[i].getAttribute("lat")),
              parseFloat(markers[i].getAttribute("lng"))
						);
						var infowincontent = document.createElement('div');
						infowincontent.className = "aClassName";
						
							var text = document.createElement('text');
              //Time
							text.textContent = timestamp
              //ID
							//text.textContent = id
              infowincontent.appendChild(text);
						
						
						
          flightPlanCoordinates[i]=point;
						
						
					var iconImageStart = 'http://mediathrong.com/beepboards/images/icons/marker_logo_start.png';
					var iconImageRegular = 'http://mediathrong.com/beepboards/images/icons/marker_logo_regular.png';
					var iconImageEnd = 'http://mediathrong.com/beepboards/images/icons/marker_logo_end.png';
					var finalMarkerOrder = markers.length-1;
					
					

					
						

					if (i == 0) {	//Get start point
						
						var marker = new google.maps.Marker({
							position: point,
							icon: iconImageStart,
							map: map,
							zIndex: 99999
						});

						
					} else if (i == (finalMarkerOrder)) {	//Get start point
						
						var marker = new google.maps.Marker({
							position: point,
							icon: iconImageEnd,
							map: map,
							zIndex: 99998
						});

						
						} else { //Get all in-between points
						
						var marker = new google.maps.Marker({
							position: point,
							icon: iconImageRegular,
							map: map
						});
						
						
						
						}
						


  //extend the bounds to include each marker's position
  bounds.extend(marker.position);
	
	
	
	
	
        
       
marker.addListener('click', (function(marker,infowincontent,infowindow){ 
        return function() {
        
					 
           infowindow.setContent(infowincontent);
           infowindow.open(map,marker);
        
 				
				
				        
        };
    })(marker,infowincontent,infowindow)); 
						
	}
	
	
	
		//now fit the map to the newly inclusive bounds
		map.fitBounds(bounds);	
	
	
										
		//(optional) restore the zoom level after the map is done scaling
		var listener = google.maps.event.addListener(map, "idle", function () {
				//map.setZoom(12);
				google.maps.event.removeListener(listener);
		});



					
				var flightPath = new google.maps.Polyline({
					path: flightPlanCoordinates,
					strokeColor: "#0099CC",
					strokeOpacity: 0.60,
					strokeWeight: 4
				});
				
			
			
			
				//flightPath.setMap(map);
				

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




$("#branding").click(function () {
      $(this).text(function(i, text){
          return text === "Turn Off Branding" ? "Turn On Branding" : "Turn Off Branding";
      })
			loadMap(branding_trigger);
   });

