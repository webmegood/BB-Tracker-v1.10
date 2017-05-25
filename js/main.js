$(document).ready(function() {
$("#imageLoading").addClass("imageRotateHorizontal").fadeIn(1000).delay(8000).fadeOut(500).delay(250).queue(function(){
    //$(this).removeClass("imageRotateHorizontal").dequeue().fadeIn(750);
		$('#landing').delay(2000).fadeOut(200);
		//$('#authenticate').delay(2000).fadeIn(400);

});
						$('#authenticate').hide();
						$('.secondary').delay(2000).animate({"right":"-100vw"}, 50);
						$('#tracks').delay(2000).animate({"right":"0px"}, 150);
						$('#menu').delay(4200).fadeIn(50);


});




//Log Out

$("#logout").click(function(){
	localStorage.setItem("loggedIn", null);
	localStorage.setItem("storedEmail", null);
	localStorage.setItem("storedPassword", null);
	location.reload();
});






$("#takePicBtn").click(function(){
		capturePhoto();
});





$(document).ready(function() {
(function blink() { 
  $('.blink_me').fadeOut(400).fadeIn(300, blink); 
})();
});





$(document).ready(function(){
	
    $('#menu-tracks').click(function(){
				$('#menu-account').removeClass('current');
				$('#menu-jobs').removeClass('current');
				$('.secondary').animate({"right":"-100vw"}, 50);
        $('#tracks').delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('.container').show();
				$('#map').hide();
				$('#go_back_to_tracks_log').hide(0);
				$('#btn-track-control').hide(0);
				$('#go_back_to_tracks').hide(0);
				$('#landing').hide();
    });
		
    $('#go_back_to_tracks').click(function(){
				$('#menu-account').removeClass('current');
				$('#menu-jobs').removeClass('current');
				$('.secondary').animate({"right":"-100vw"}, 50);
        $('#tracks').delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('.container').show();
				$('#map').hide();
				$('#btn-track-control').hide(0);
				$('#go_back_to_tracks').hide(0);
				$('#landing').hide();
    });
				
    $('#menu-account').click(function(){
				$('#menu-tracks').removeClass('current');
				$('#menu-jobs').removeClass('current');
				$('.secondary').animate({"right":"-100vw"}, 50);
        $('#account').delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('.container').show();
				$('#map').hide();
				$('#go_back_to_tracks_log').hide(0);
				$('#btn-track-control').hide(0);
				$('#go_back_to_tracks').hide(0);
				$('#landing').hide();
    });

    $('#menu-jobs').click(function(){
				$('#menu-tracks').removeClass('current');
				$('#menu-account').removeClass('current');
				$('.secondary').animate({"right":"-100vw"}, 50);
        $('#jobs').delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('.container').show();
				$('#map').hide();
				$('#go_back_to_tracks_log').hide(0);
				$('#btn-track-control').hide(0);
				$('#go_back_to_tracks').hide(0);
				$('#landing').hide();
    });

    $('#btn-photo').click(function(){
				$('#menu-tracks').removeClass('current');
				$('#menu-account').removeClass('current');
				$('.secondary').animate({"right":"-100vw"}, 50);
        $('#photo').delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('#btn-track-control').hide(0);
				$('#go_back_to_tracks').hide(0);
				$('#landing').hide();
    });

});




$(document).ready(function(){
    $('#tracksCurrentBtn').click(function(){
				$('#menu-tracks').addClass('current');
				$('#tracks').animate({"right":"-100vw"}, 50);
        $('#tracksCurrent').delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('#btn-track-control').delay(300).fadeIn(500);
				$('#landing').hide();				
    });
});

$(document).ready(function(){
    $('#tracksLogBtn').click(function(){
				$('#menu-tracks').addClass('current');
				$('#tracks').animate({"right":"-100vw"}, 50);
        $('#tracksLog').delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('#btn-track-control').delay(300).fadeIn(500);
				$('#go_back_to_tracks').delay(300).fadeIn(500);
				$('#landing').hide();
    });
});


//When clicking on active road icons

$(".mapUploaded").click(function(){
	$('.overlay').fadeIn(100).delay(1210).fadeOut(100);
	$('.spinner-loading').delay(100).fadeIn(10).delay(1200).fadeOut(100);
	$('.container').fadeOut(10);
	$('#map').fadeOut(0).delay(1200).fadeIn(50);
	$('#go_back_to_tracks').hide(0);
	$('#go_back_to_tracks_log').show(0);
});

$(document).ready(function(){
    $('#go_back_to_tracks_log').click(function(){
				$('#menu-tracks').addClass('current');
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('#btn-track-control').delay(300).fadeIn(500);
				$('.container').show();
				$('#map').hide();
				$('#go_back_to_tracks_log').hide(0);
				$('#go_back_to_tracks').delay(300).fadeIn(500);
    });
});

			




$(document).ready(function(){
		
		

	var watchID;
	var geoLoc;


	// Get Updated Total Distance Travelled
	//var totalDistance;
	// Retrieve currently saved total distance
	if (localStorage["totalDistance"]) {
	  var totalDistance = JSON.parse(localStorage.getItem("totalDistance"));
		document.getElementById("totalDistance").innerHTML = totalDistance + "km";
	} else {
	  var totalDistance = 0;
	}







	// Get Updated Total Time Travelled	
	
	var storedElapsedTime;
	// Retrieve currently saved elapsed time
	var totalTime = JSON.parse(localStorage.getItem("elapsedTime"));
	
	
	


var h6 = document.getElementsByTagName('h6')[0],
		startBtn = document.getElementById('btn-start'),
    stopBtn = document.getElementById('btn-pause'),
    seconds = 0, minutes = 0, hours = 0,
    t;
		













function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h6.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
  t = setTimeout(add, 1000);
	//Save elapsed "active" time (in secs) to Local Storage
	localStorage.setItem("activeTime", t);
}




/* Start button */
startBtn.onclick = timer;

/* Stop button */
stopBtn.onclick = function() {
    clearTimeout(t);
}





// Start timer if track is already active


// Retrieve currently saved elapsed time
var trackActivity = JSON.parse(localStorage.getItem("trackActivity"));

if (trackActivity == 1) {	
	
	timer();
	//change pause/start button classes
	$('.btn-start').fadeOut(0);
	$('.btn-pause').fadeIn(50);
	$('.status').fadeIn(10);
	
} else {
	
	stopAfterStart(); //<-- ensures elapsed time is displayed when track is inactive
	//change pause/start button classes
	$('.btn-pause').fadeOut(0);
	$('.btn-start').fadeIn(50);
	$('.status').fadeOut(0);

}



function stopAfterStart() {
  startTimer();
  setTimeout(stopTimer,1001);
}
		


	
});





var storedNames = "";



function showLocation(position) {
            

		
		var lat1 = position.coords.latitude;
    var lon1 = position.coords.longitude;
						


//get location name
						//var locationData = latitude;
						
						//compare with Melbourne
						var lat2 = -37.8136;
						var lon2 = 144.9631;
						
						
						
				//get distance from Melbourne		
				var radlat1 = Math.PI * lat1/180;
				var radlat2 = Math.PI * lat2/180;
				var radlon1 = Math.PI * lon1/180;
				var radlon2 = Math.PI * lon2/180;
				var theta = lon1-lon2;
				var radtheta = Math.PI * theta/180;
				var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
				dist = Math.acos(dist);
				dist = dist * 180/Math.PI;
				dist = dist * 60 * 1.1515;
				dist = dist * 1.609344; // convert to kms
				dist = (Math.round(dist*10))/10;


				
				//get bearing of location in relation to Melbourne
				function radians(n) {
					return n * (Math.PI / 180);
				}
				function degrees(n) {
					return n * (180 / Math.PI);
				}
				
					startLat = radians(lat1);
					startLong = radians(lon1);
					endLat = radians(lat2);
					endLong = radians(lon2);
				
					var dLong = endLong - startLong;
				
					var dPhi = Math.log(Math.tan(endLat/2.0+Math.PI/4.0)/Math.tan(startLat/2.0+Math.PI/4.0));
					if (Math.abs(dLong) > Math.PI){
						if (dLong > 0.0)
							 dLong = -(2.0 * Math.PI - dLong);
						else
							 dLong = (2.0 * Math.PI + dLong);
					}
				
					bearing = (degrees(Math.atan2(dLong, dPhi)) + 360.0) % 360.0;
					if (bearing < 11.25) {				
					direction = "S";
					} else if (bearing	< 33.75) {	
					direction = "SSW";
					} else if (bearing	< 56.25) {	
					direction = "SW";
					} else if (bearing	< 78.75) {	
					direction = "WSW";
					} else if (bearing	< 101.25) {	
					direction = "W";
					} else if (bearing	< 123.75) {	
					direction = "WNW";
					} else if (bearing	< 146.25) {	
					direction = "NW";
					} else if (bearing	< 168.75) {	
					direction = "NNW";
					} else if (bearing	< 191.25) {	
					direction = "N";
					} else if (bearing	< 213.75) {	
					direction = "NNE";
					} else if (bearing	< 236.25) {	
					direction = "NE";
					} else if (bearing	< 258.75) {	
					direction = "ENE";
					} else if (bearing	< 281.25) {	
					direction = "E";
					} else if (bearing	< 303.75) {	
					direction = "ESE";
					} else if (bearing	< 326.25) {	
					direction = "SE";
					} else if (bearing	< 348.75) {	
					direction = "SSE";
					} else if (bearing	< 360) {	
					direction = "S";
					} 
				
					
				//put distance and bearing together	
				var locationData = dist + "km " + direction  + " of Melb";
				//alert(locationData);
						
						//var timeStamp = Math.floor(Date.now() / 1000); //(is unix server time, but need offline...so use from GPS)
						var timeStamp = position.timestamp;
						
						
						
						if(storedNames) {
							var geoDataArray01 = storedNames;
							//alert(geoDataArray01);
							//alert("stored");
						} else {
							var geoDataArray01 = [];
							//alert("empty");
						}
						
						// Retrieve currently saved elapsed time
						var elapsedTime = JSON.parse(localStorage.getItem("activeTime"));



						
						var test = [timeStamp,locationData,lat1,lon1,elapsedTime];
						//geoDataArray01.unshift(test); //reverse order to have most recent entry showing first						
						geoDataArray01.push(test);
						//alert(test);
						//Save to Local Storage
						localStorage.setItem("savedData", JSON.stringify(geoDataArray01));
						// Retrieve from Local Storage
						storedNames = JSON.parse(localStorage.getItem("savedData"));
						
						
						
						
						//var watchCount = 1;
						//if(watchCount>=2) {	 // the 2nd time we use watchPosition is supposed to be more accurate than the 1st, so ignore 1st
							
							
							document.getElementById("current_location").innerHTML = locationData;
							//alert(geoDataArray01);
							
							//appendToTable(geoDataArray01);
							//watchCount++;
						//}
						
						
						
						
						prevlat = geoDataArray01[1][2];
						prevlon = geoDataArray01[1][3];


						
						//Calculate distance between 2 most recent points
						var newlat1 = Math.PI * lat1/180;
						var newlat2 = Math.PI * prevlat/180;
						var newlon1 = Math.PI * lon1/180;
						var newlon2 = Math.PI * prevlon/180;
						var theta = newlon1-newlon2;
						var radtheta = Math.PI * theta/180;
						var currentdist = Math.sin(newlat1) * Math.sin(newlat2) + Math.cos(newlat1) * Math.cos(newlat2) * Math.cos(radtheta);
						currentdist = Math.acos(currentdist);
						currentdist = currentdist * 180/Math.PI;
						currentdist = currentdist * 60 * 1.1515;
						currentdist = currentdist * 1.609344; // convert to kms
						currentdist = (Math.round(currentdist*10))/10;
						
						
					  // Retrieve currently saved total distance
						if (localStorage["totalDistance"]) {
							var storedDistance = JSON.parse(localStorage.getItem("totalDistance"));
							var totalDistance = (storedDistance + currentdist);
						} else {
							var totalDistance = currentdist;
						}
						
						

						document.getElementById("totalDistance").innerHTML = totalDistance + "km";
						//Save to Local Storage
						localStorage.setItem("totalDistance", totalDistance);
						
						
						
	
	
					  // Retrieve currently saved elapsed time
						var storedElapsedTime = geoDataArray01[1][4];
												
						
						
						
						elapsedHours = storedElapsedTime.getHours();
						if (elapsedHours < 10) {
							elapsedHours = "0" + elapsedHours;
						}
						elapsedMinutes = storedElapsedTime.getMinutes();
						if (elapsedMinutes < 10) {
							elapsedMinutes = "0" + elapsedMinutes;
						}
						elapsedSeconds = storedElapsedTime.getSeconds();
						if (elapsedSeconds < 10) {
							elapsedSeconds = "0" + elapsedSeconds;
						}
						
						
						document.getElementById("elapsedTime").innerHTML = elapsedHours + ":" + elapsedMinutes + ":" + elapsedSeconds;

						//Save to Local Storage
						localStorage.setItem("elapsedTime", elapsedTime);
	
						
}






         function errorHandler(err) {
            if(err.code == 1) {
               alert("Error: Access is denied!");
            }
            else if( err.code == 2) {
               alert("Error: Position is unavailable!");
            }
						
				 }
						
			

			







	

	
	
	
	


	
$("#btn-start").click(function(){
	
	//change pause/start button classes
	$('.btn-start').fadeOut(0);
	$('.btn-pause').fadeIn(50);
	$('.status').fadeIn(10);
	
	
	//Save active track to Local Storage
	localStorage.setItem("trackActivity", JSON.stringify(1));
	
	
	//Set pause indicator to ensure checkLocation function starts
	localStorage.setItem("stopLocationChecking", 1);
						
			
			
			
			




			
							var id;
							
							if(navigator.geolocation){
								
								
			
			
			
			

								
								
								 var options = {
									 
									 
									 //timeout: 10000,
									 enableHighAccuracy: true
									 //maximumAge: Infinity									 


									 //timeout:20000,
									 //desiredAccuracy: 10,
									 //stationaryRadius: 10,
									 //distanceFilter: 100,
									 //enableHighAccuracy: true,
									 //maximumAge: 0,
									 //interval: 10000 // <!-- poll for position every 30 secs 
									 //locationService: backgroundGeoLocation.service.ANDROID_FUSED_LOCATION,
									 //debug: false, // <-- enable this hear sounds for background-geolocation life-cycle.
									 //stopOnTerminate: true // <-- enable this to clear background location settings when the app terminates							 
									 
									 };
								
	

								//geoLoc = navigator.geolocation;
								//watchID = geoLoc.watchPosition(showLocation, errorHandler, options);
								
	
	
	
	
	



function checkLocation(){

// Retrieve currently saved elapsed time
var locationCheckingStatus = JSON.parse(localStorage.getItem("stopLocationChecking"));

if (locationCheckingStatus == 0) {
	} else {
    setTimeout(checkLocation, 5000); //check location every 30 seconds
		navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
	}
}

checkLocation();	
	









} else {
								 alert("Sorry, browser does not support geolocation!");
							}
							
	
});






$("#btn-pause").click(function(){
	
	//change pause/start button classes
	$('.btn-pause').fadeOut(0);
	$('.btn-start').fadeIn(50);
	$('.status').fadeOut(0);
	
	//Save active track to Local Storage
	localStorage.setItem("trackActivity", JSON.stringify(0));
	//Set pause indicator to ensure checkLocation function stops
	localStorage.setItem("stopLocationChecking", 0);

});




$("#btn_upload").click(function(){
	
	// Retrieve from Local Storage
	storedNames = JSON.parse(localStorage.getItem("savedData"));
	$.ajax({
			type: "POST",
			//dataType: "json",
      cache: false,
			url: "http://www.mediathrong.com/beepboards/tracking/v1.0/scripts/upload_track_data.php",
			data: {data:storedNames},
      beforeSend: function() {
      	$('.overlay').show();
				$('.spinner-uploading').show();
      },
			success: function(data) {
				if (data == "done") {
					$('.overlay').hide();
					$('.spinner-uploading').hide();
				} else {
					$('.spinner-uploading').hide();
					$('.upload-error').hide();
				}
      }
	});
	
	clearAllSavedData();

});




$("#btn-clear").click(function(){
 clearAllSavedData();
});









function clearAllSavedData() {
	
		localStorage.setItem("totalDistance", 0);
		localStorage.setItem("activeTime", 0);
		localStorage.setItem("savedData", 0);
		localStorage.setItem("elapsedTime", 0);
		localStorage.setItem("trackActivity", 0);
		//localStorage.removeItem("totalDistance");
		document.getElementById("totalDistance").innerHTML = "";

}





//test connectivity


//go offline
document.addEventListener("offline", onOffline, false); 
function onOffline() {
	$('#yes-connectivity').hide();
	$('#no-connectivity').show();
}			


// go online
document.addEventListener("online", onOnline, false);
function onOnline() {
	$('#no-connectivity').hide();
	$('#yes-connectivity').show();
}				
				
			





function fetchfromMysqlDatabase() {
	
			var userid = storedUser;
			
                  $.ajax({
                    type: "GET",
                    dataType: "html",
                    url: "http://www.mediathrong.com/beepboards/scripts/getTrackLogs.php",
										data: {data:userid},
                    cache: false,
                    beforeSend: function() {
                       $('#res3').html('loading please wait...');
                    },
                    success: function(htmldata) {
                       $('#res3').html(htmldata);
                    }
                  });
                }
			
