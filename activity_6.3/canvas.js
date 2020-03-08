//document.body.style.backgroundColor = "black";
const canvas = document.getElementById('myCanvas').getContext('2d');

window.onload = function() { 
      doStuff();
}

function doStuff() {
     let player = {
         x: 100,
         y: 100,
         radius: 10
     }

     const draw = () => {
         canvas.clearRect(0, 0, 
                          document.getElementById('myCanvas').width, 
                          document.getElementById('myCanvas').height);
         
         player.x += 1;
         
         if (player.x > document.getElementById('myCanvas').width + player.radius) {
             player.x = -player.radius;
         }
        
         canvas.beginPath();
         canvas.arc(player.x,player.y, player.radius, 0, Math.PI*2);
         canvas.closePath();
         canvas.fillStyle = "green";
         canvas.fill();
         
         window.requestAnimationFrame(draw);
     }
     
     draw();
}