var num = 200;
var x = 0;
var y = 0;

function preload(){
red_arrow = loadImage("data/red_arrow.png");
}

function setup() { 
  createCanvas(500, 500); 
  noStroke();  
  fill(255, 102);
  frameRate(60);
} 
 
function draw() { 
  background(0); 

  // Shift the values to the right  
  for (var i = num-1; i > 0; i--) { 
    x[i] = x[i-1]; 
    y[i] = y[i-1]; 
  } 

  // Add the new values to the beginning of the array 
  x[0] = mouseX; 
  y[0] = mouseY; 

  // Draw the circles
  for (var i = 0; i < num; i++) { 
    image(red_arrow, x[i], y[i], i/2.0, i/2.0); 
  } 
} 