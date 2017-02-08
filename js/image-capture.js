$(document).ready(".takePicBtn").click(function() {

// Take picture using device camera and retrieve image as base64-encoded string
alert("yes!");
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
});



