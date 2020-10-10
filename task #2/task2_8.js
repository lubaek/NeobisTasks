function drawSmile() {
  var canvas = document.getElementById('smile');
    var draw = canvas.getContext('2d');
    draw.beginPath();
    draw.strokeStyle = "purple";
    draw.arc(75,75,50,0,Math.PI*2,true);
    draw.moveTo(110,75);
    draw.arc(75,75,35,0,Math.PI,false);
    draw.moveTo(65,65);
    draw.arc(60,65,5,0,Math.PI*2,true);
    draw.moveTo(95,65);
    draw.arc(90,65,5,0,Math.PI*2,true);
    draw.stroke();

}