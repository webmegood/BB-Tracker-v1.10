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
					$("#add_err").css('display', 'inline', 'important');
					$("#add_err").html("Checking...")
		   },
		   success: function(data) {    
					if(data==true) {

						//Save to long term storage if "Keep me logged in" check box is selected
						//otherwise just store temporarily
						if (rememberMe==1) {
							localStorage.setItem("storedEmail", JSON.stringify(email));
							localStorage.setItem("storedPassword", JSON.stringify(password));
						} else {
							localStorage.setItem("tempEmail", JSON.stringify(email));
							localStorage.setItem("tempPassword", JSON.stringify(password));
						}
						localStorage.setItem("loggedIn", 1);							
						$('#authenticate').hide();
						$('.overlay').fadeIn(0).delay(2000).fadeOut(50);
						$('.spinner-logging-in').fadeIn(0).delay(2000).fadeOut(50);
						$('#menu').delay(1500).fadeIn(50);
						$('.secondary').delay(1000).animate({"right":"-100vw"}, 50);
						$('#tracks').delay(1200).animate({"right":"0px"}, 150);
					} else {
						$("#add_err").css('display', 'inline', 'important');
						$("#add_err").html("Incorrect details. Please try again.");
					}
		   }
		});
		return false;
	});
});