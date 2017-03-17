<!DOCTYPE html>
<html lang="en">
<head>

  <!-- Basic Page Needs
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta charset="utf-8">
  <title>Beep Boards | Vehicle Tracker v1.10</title>
  <meta name="description" content="">
  <meta name="author" content="">

  <!-- Mobile Specific Metas
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- FONT
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
	<link href="https://fonts.googleapis.com/css?family=Fjalla+One" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">

  <!-- CSS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/skeleton.css">
  <link rel="stylesheet" href="css/main.css">

  <!-- JS
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  
	<script type="text/javascript" src="js/jquery.min.js"></script>
  <script type="text/javascript" src="phonegap.js"></script>
	<script type="text/javascript" src="js/image-capture.js"></script>
  

  <!-- Favicon
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <link rel="icon" type="image/png" href="images/favicon.png">

</head>
<body>

  <!-- 1.0 Home Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  
  
  <div class="status"><i class="fa fa-wifi"></i></div>
  
  <div class="container" id="home">
    <div class="row">
      <div class="twelve columns" style="text-align:center">
        <div class="menu_strip">
    			<h1>BEEP BOARDS</h1>
        </div>
          <h2>VEHICLE TRACKER</h2>
          <div class="mainLogo"><img src="images/logo_lg.jpg" alt="Beep Boards Logo" id='imageLoading'></div>
      </div>
    </div>
  </div>
  
  
  
  
  

  <!-- 2.0 Background Panel
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  
  
	<div class="container" id="backgroundPanel"></div>  
  
  
  
  
  <!-- 3.0 Tracks Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  
  
	<div class="container secondary" id="tracks">
    <div class="row">
      <div class="twelve columns" style="text-align:center">
        <div class="menu_strip">
    			<h1>TRACKS</h1>
        </div>
      </div>
    </div>
		<div class="tracks-buttons">
    	<div class="track-buttons-row">
        <div class="round-btn btn-active" id="tracksActiveBtn"><i class="fa fa-wifi"></i><span class="button-text">Active</span></div>
        <div class="round-btn"><i class="fa fa-plus"></i><span class="button-text">Add New</span></div>
      </div>
    	<div class="track-buttons-row">
        <div class="round-btn"><i class="fa fa-reorder"></i><span class="button-text">Log</span></div>
        <div class="round-btn"><i class="fa fa-reorder"></i><span class="button-text">#4</span></div>
      </div>
  	</div>    
  </div>  
  
  
  
  <!-- 3.1 Tracks: Active
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  
  
	  <div class="container secondary" id="tracksActive">
    <div class="row">
      <div class="twelve columns" style="text-align:center">
        <div class="menu_strip">
    			<h1>ACTIVE TRACK</h1>
          
          
    <div class="row" style="display:block">
      <div style="width: auto; margin: 0 5%">
      
      
      
      
      <h6>Track D409-195938</h6>
      
      <p class="elapsed-time">Elapsed time: <strong>2:06</strong></p>

        <table class="u-full-width fixed_headers">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
          <?php 
					
$newarray = array(array(-37.7993225,145.2792777,1466142049501),array(-37.80074047,145.28160338,1466142127000),array(-37.80067849,145.28164882,1466142128000),array(-37.80095113,145.28157732,1466142435800),array(-37.80095113,145.28157732,1466142435800),array(-37.7993225,145.2792777,1466142527824));
	
	
$number_of_array_sets = array_count_values($newarray);					
					
						$x = 0; 
						while($x < $number_of_array_sets5) { ?>
							
							
            <tr>
              <td><?php echo $newarray[$x][0]?></td>
              <td><?php echo $newarray[$x][1]?></td>
              <td><?php echo $newarray[$x][2]?></td>
            </tr>
            
            
            <?php
							
							$x++;
						}
					?> 

          </tbody>
        </table>
        
      </div>    
    </div>
          
        </div>
      </div>
    </div>
  </div>
  

  
  


  <!-- 4.0 Account Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  
  
	<div class="container secondary" id="account">
    <div class="row">
      <div class="twelve columns" style="text-align:center">
        <div class="menu_strip">
    			<h1>ACCOUNT</h1>
        </div>
      </div>
    </div>
  </div>  
  




  <!-- 5.0 Contact Page Layout
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  
  
	<div class="container secondary" id="contact">
    <div class="row">
      <div class="twelve columns" style="text-align:center">
        <div class="menu_strip">
    			<h1>CONTACT</h1>
        </div>
      </div>
    </div>
  </div>  
  




  <!-- 6.0 Menu Area
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->


        <div class="divider_h"></div>
        <div class="menuArea">
        	<ul>
          	<li id="menu-tracks">TRACKS</li>
          	<li id="menu-account">ACCOUNT</li>
          	<li id="menu-contact">CONTACT</li>
          </ul>
        </div>








	<!--div id="smallImage"></div-->
    
  <!--div class="button_zone" id="button_zone">
  	<!--div class="button button-primary">Stop + Upload</div-->
  <!--/div-->
 
 
 
 
 
 

        <!--div class="main_content" id="main_content">                   
          <!--p id="result"></p-->
          <!--div class="takePicBtn" id="takePicBtn" style="display:none"><i class="fa fa-camera fa-3" aria-hidden="true"></i></div-->
        <!--/div-->




  
  

<!-- End Document
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
</body>
</html>





<script type="text/javascript" src="js/gps.js"></script>
<script type="text/javascript" src="js/main.js"></script>

