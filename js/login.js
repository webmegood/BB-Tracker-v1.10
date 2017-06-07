emailPasswordIsValid = function(email,password) {

    var regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	authenticateEmailTest = regEmail.test(email);
	
	//password must have between 6 to 20 characters which contain at least one numeric digit, one uppercase, and one lowercase letter
	var regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
	authenticatePasswordTest = regPassword.test(password);
	
  if (authenticateEmailTest === true){
		
			if (authenticatePasswordTest === true){		
	  		checkCredentials(email,password);
				//alert(email + " - " + password);
			}	else {
				$('#add_err').show();
				document.getElementById("add_err").innerHTML = "Please check your password";
			}	
		
	} else {
	  $('#add_err').show();
	  document.getElementById("add_err").innerHTML = "Please check your email";
	}

};








checkCredentials = function(email,password) {

		  
			$.ajax({
		   type: "POST",
		   dataType: "json",
		   url: "http://www.mediathrong.com/beepboards/tracking/v1.0/scripts/checkLogin.php",
		   data: "email="+email+"&password="+password,
		   beforeSend:function() {
				 $('.overlay').show();
				 $('.spinner-logging-in').show();
		   },
		   success:function(data) {  
					$('.overlay').hide();
					$('.spinner-logging-in').hide();
			    alert(data);
					if(data==false) { //not correctly logged in
					
						$("#add_err").css('display', 'inline', 'important');
						$("#add_err").html("Your email & password do not match. Please try again.");

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
	
}







$(document).ready(function(){
	$("#add_err").css('display', 'none', 'important');
	$("#btn-login").click(function(){	
		 email=$("#txt-email").val();
		 password=$("#txt-password").val();
		 rememberMe=$("#chck-rememberme").val();
		 
		 //check if email has been entered correctly
		 emailPasswordIsValid(email,password);
		 return false;

		 
	});
});