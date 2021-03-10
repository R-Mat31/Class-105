Webcam.set({
 width : 350,
 height : 300,
 image_format : 'png',
 png_quality : 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function takePhoto(){
    Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML = "<img id = 'capturedImage' src = " + data_uri + ">";
    });
   }
   var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZimVrSjjj/model.json", modelLoaded);
   function modelLoaded(){
    console.log(modelLoaded);   
   }
   function check(){
    img = document.getElementById("capturedImage");
    classifier.classify(img, gotResult);
   }
   function gotResult(error, results){
    if(error){
     console.error(error);
    }
    else{
     console.log(results);
     document.getElementById("resultObjectName").innerHTML = results[0].label;
     document.getElementById("resultObjectAccuracy").innerHTML = results[0].confidence.toFixed(3);
    }
   }