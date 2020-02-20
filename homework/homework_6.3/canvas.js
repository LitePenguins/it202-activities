document.body.style.backgroundColor = "black";
const canvas = document.getElementById('myCanvas').getContext('2d');

window.onload = function() { 
   drawLetter();
   drawShape(); 
   writeUIN("672099973");
}

function drawLetter() {
    canvas.beginPath();
    canvas.strokeStyle = 'red';
    canvas.lineWidth = 10;
    canvas.moveTo(10, 10); 
    canvas.lineTo(100, 10);
    canvas.moveTo(50, 10); 
    canvas.lineTo(50, 80);
    canvas.moveTo(50, 80);
    canvas.lineTo(10, 80);
    
    canvas.stroke();
    
    canvas.closePath(); 
}

function drawShape() {
    canvas.beginPath();
    
    canvas.moveTo(150, 10);
    canvas.lineTo(200, 50);
    canvas.lineTo(150, 50);
    canvas.fillStyle = 'green';
    canvas.fill();
    
    canvas.closePath(); 
}

function writeUIN(UIN) {
    canvas.beginPath();
    canvas.font = "25px Comic Sans MS";
    canvas.fillStyle = "blue";
    canvas.fillText(UIN, 250, 50);
    canvas.closePath();
}