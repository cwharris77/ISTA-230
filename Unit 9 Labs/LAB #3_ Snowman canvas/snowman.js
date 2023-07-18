// Size of a single snowflake
const flakeSize = 8;

window.addEventListener("DOMContentLoaded", function() {
   var canvas = document.querySelector("canvas");
   
   drawGround(canvas);
   drawSnowText(canvas);
   drawSnowman(canvas);  
   drawSnowflakes(canvas);   
});

function drawGround(canvas) {
   var context = canvas.getContext("2d");

   // background 
   context.fillStyle = "lightgray";
   context.fillRect(0, 0, 300, 300);

   // ground
   context.fillStyle = "brown";
   context.fillRect(0, canvas.height - 50, canvas.width, canvas.height);
}

function drawSnowflakes(canvas) {   
   for (var c = 0; c < 100; c++) {
      var x = Math.floor(Math.random() * canvas.width);
      var y = Math.floor(Math.random() * canvas.height);
      drawSingleFlake(canvas, x, y);
   }
}

// Complete the functions below

function drawSnowText(canvas) {
	const cxt = canvas.getContext("2d");
	
	cxt.font = "80px Verdana"
	cxt.textAlign = "center"
	cxt.textBaseline = "top"
	cxt.fillStyle = "blue"
	cxt.fillText("SNOW", canvas.width / 2, 10)
}

function drawSnowman(canvas) { 
	//Bottom circle: arc() centered at (150, 200) with radius 50 that begins at 0 and ends at Math.PI * 2
//Middle circle: arc() centered at (150, 120) with radius 40 that begins at 0 and ends at Math.PI * 2
//Top circle: arc() centered at (150, 60) with radius 25 that begins at 0 and ends at Math.PI * 2
//All three circles should use fillStyle white and be displayed with the fill() function
	
	const cxt = canvas.getContext("2d");
	
	cxt.beginPath();
	cxt.arc(150, 200, 50, 0, Math.PI * 2);
	cxt.fillStyle = "white"
	cxt.fill();
	
	cxt.beginPath();
	cxt.arc(150, 120, 40, 0, Math.PI * 2);
	cxt.fillStyle = "white"
	cxt.fill();
	
	cxt.beginPath();
	cxt.arc(150,  60, 25, 0, Math.PI * 2);
	cxt.fillStyle = "white"
	cxt.fill();
	
	
}

function drawSingleFlake(canvas, x, y) {
	//moveTo() with coordinate (x, y)
	//lineTo() with coordinate (x + flakeSize / 2, y + flakeSize / 2)
	//lineTo() with coordinate (x, y + flakeSize)
	//lineTo() with coordinate (x - flakeSize / 2, y + flakeSize / 2)
	//fillStyle: white
	//fill() to display the diamond
	
	const cxt = canvas.getContext("2d");
	
	cxt.moveTo(x, y);
	cxt.lineTo(x + flakeSize / 2, y + flakeSize / 2);
	cxt.lineTo(x, y + flakeSize);
	cxt.lineTo(x - flakeSize / 2, y + flakeSize / 2);
	
	cxt.fillStyle = "white";
	cxt.fill();
	
	
}