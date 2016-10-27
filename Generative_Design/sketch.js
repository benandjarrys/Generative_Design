



function preload(){
  // heavy stuff
  pegasus = loadImage("data/pegasus.jpg");
  red_arrow = loadImage("data/red_arrow.png");
  blue_arrow = loadImage("data/blue_arrow.png");
  
}

function setup () {
  createCanvas(1400,1400);
  frameRate(60);  
  smooth();
  imageMode(LEFT);  
  stroke(0);
  strokeWeight(8);
  noFill();
}

function draw() {
  background(255);

  for (var i=0; i<width; i+=30) { // make the pegasus pattern tessalate to the right
      image(red_arrow,i);  
      }
  for (var d=0; d<height; d+=20) { // make the pegasus pattern tessalate diagnally down-right
      image(red_arrow,d,d,10,10);  
      }  
  for (var f=0; f<height; f+=50) { // make the pegasus pattern tessalate diagnally down-right
      image(blue_arrow,f,f,40,40);  
      }

      
}

