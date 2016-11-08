var x,y;
var alphabets = []; 
var a = 0; 


function preload(){
/* 
  I don't remember how to make the array increase in number automatically
  so that I don't have to repeat the loadImage per each greek alphabet image
  I initially tried to create this by using 
  
  var alphabets = new Array(26);
  
  function preload() {
    for (var i = 0; i< alphabets.length; i++) {
      alphabets[i] = loadImage ('data/letter' + i + '.png');
    }
  }
  
  but when i called it using 
  
  image(alphabets[i]);
  
  it said 
  
*/
  alphabets[0] = loadImage("data/letter0.png");
  alphabets[1] = loadImage("data/letter1.png");
  alphabets[2] = loadImage("data/letter2.png");
  alphabets[3] = loadImage("data/letter3.png");
  alphabets[4] = loadImage("data/letter4.png");
  alphabets[5] = loadImage("data/letter5.png");
  alphabets[6] = loadImage("data/letter6.png");
  alphabets[7] = loadImage("data/letter7.png");
  alphabets[8] = loadImage("data/letter8.png");
  alphabets[9] = loadImage("data/letter9.png");
  alphabets[10] = loadImage("data/letter10.png");
  alphabets[11] = loadImage("data/letter11.png");
  alphabets[12] = loadImage("data/letter12.png");
  alphabets[13] = loadImage("data/letter13.png");
  alphabets[14] = loadImage("data/letter14.png");
  alphabets[15] = loadImage("data/letter15.png");
  alphabets[16] = loadImage("data/letter16.png");
  alphabets[17] = loadImage("data/letter17.png");
  alphabets[18] = loadImage("data/letter18.png");
  alphabets[19] = loadImage("data/letter19.png");
  alphabets[20] = loadImage("data/letter20.png");
  alphabets[21] = loadImage("data/letter21.png");
  alphabets[22] = loadImage("data/letter22.png");
  alphabets[23] = loadImage("data/letter23.png");


}

function setup() {
  

  createCanvas(1000, 800);
  background(200, 100, 100);
  frameRate(15);
  imageMode(CENTER);

 textSize(20);
      textSize(30);
      textAlign(CENTER);

  
}


function draw() {
// summon greek letters  
// also make the letters summon at random places

text(a, width/2, height/2);


for ( var i=0; i<19; i++ ) {
  x = int(random(0, width));
  y = int(random(0, height));
  image(alphabets[i], x, y,75,75);
}

// Below is used to refresh the background so the letters don't leave afterimages
if (a > 30 && a < 45){
  fill(x, x, y, 150);
  noStroke();
  rect(0, 0, width, height);
  }
if(a < 45){
  a++;
}

if(a == 45){
  a=a-45;
}
  }
  


  



