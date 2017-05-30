$(document).ready(function(){
	$("#add_err").css('display', 'none', 'important');
	 $("#btn-login").click(function(){	
		  email=$("#txt-email").val();
		  password=$("#txt-password").val();
		  rememberMe=$("#chck-rememberme").val();
		  $.ajax({
		   type: "POST",
			 dataType: "json",
		   url: "http://www.mediathrong.com/beepboards/tracking/v1.0/scripts/checkLogin.php",
			 data: "email="+email+"&password="+password,
		   beforeSend:function() {
      	$('.overlay').show();
				$('.spinner-logging-in').show();
		   },
		   success: function(data) {  
			 
      	$('.overlay').hide();
				$('.spinner-logging-in').hide();
			 
					if(data==false) { //not correctly logged in
					
						$("#add_err").css('display', 'inline', 'important');
						$("#add_err").html("Incorrect details. Please try again.");

					} else {
						
						$('#authenticate').hide();
						$('#menu').delay(400).fadeIn(50);
						$('.secondary').animate({"right":"-100vw"}, 50);
						$('#tracks').delay(400).animate({"right":"0px"}, 150);
						localStorage.setItem("loggedIn", 1);							
												
						//Save to long term storage if "Keep me logged in" check box is selected
						//otherwise just store temporarily
						if (rememberMe==1) {
							localStorage.setItem("storedEmail", JSON.stringify(email));
							localStorage.setItem("storedPassword", JSON.stringify(password));
						} else {
							localStorage.setItem("tempEmail", JSON.stringify(email));
							localStorage.setItem("tempPassword", JSON.stringify(password));
						}
						
					}
		   }
		});
		return false;
	});
});