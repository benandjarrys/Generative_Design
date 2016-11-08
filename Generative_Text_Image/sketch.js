var x,y;
var r=255;
var g=255;
var b=255;
var alphabets = []; 
var a = 0; 
var font1;
var fsize = 50;
var t = 0;


function preload(){
font1 = loadFont('data/font1.otf');

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
  background(0);
  frameRate(15);
  imageMode(CORNER);

 textSize(20);
 textSize(30);
 textAlign(CENTER);

  
}



function draw() {
// text(a, width/2, height/2); # used during testing to create my own timer


// create text that will grow and flash different colors (SLOW)
if(t >3 && t < 19){
  textFont(font1, fsize);
  fill(r-255, g-255, b-255);

  text("I'M GETTING CLOSER.", 500, 400);
  fsize=fsize + 10;
  if(fsize >170) fsize = 50;
}

// create text that will grow and flash different colors (FASTER)
if(t > 6 && t < 19){
  textFont(font1, fsize);
  fill(r-255, g-255, b-255);

  text("I'M GETTING CLOSER.", 500, 400);
  fsize=fsize + 10;
  if(fsize >170) fsize = 50;
}

// create text that will grow and flash different colors (FASTER)
if(t > 9 && t < 19){
  textFont(font1, fsize);
  fill(r-255, g-255, b-255);

  text("I'M GETTING CLOSER.", 500, 400);
  fsize=fsize + 10;
  if(fsize >170) fsize = 50;
}

//// create more randomly spawned text (FASTEST)

if(t > 12 && t < 30){
  textFont(font1, fsize);
  fill(random(255), random(255), random(255));

  text("LETS FREAK OUT!!.", random(800), random(800));
  fsize=fsize + 10;
  if(fsize >170) fsize = 50;
}

// create more randomly spawned text (FASTEST)
if(t > 15 && t < 30){
  textFont(font1, fsize);
  fill(random(255), random(255), random(255));
  text("LETS FREAK OUT!!.", random(800), random(800));
  fsize=fsize + 50;
  if(fsize >170) fsize = 50;
}

// create more randomly spawned text (FASTEST)
if(t > 18 && t < 30){
  textFont(font1, fsize);
  fill(random(255), random(255), random(255));
  text("LETS FREAK OUT!!.", random(800), random(800));
  fsize=fsize - 10;
  if(fsize >170) fsize = 50;
}




// summon greek letters  
// also make the letters summon at random places
if (keyIsPressed === true && t < 30){
  for ( var i=0; i<19; i++ ) {
    x = int(random(0, width));
    y = int(random(0, height));
    tint(r,g,b, random(255));  // Apply transparency without changing color
    image(alphabets[i], x, y,75,75);
  }
}

// Below is used to refresh the background so the letters don't leave afterimages
// Set so that the screen will flash and refresh at timed intervals
  if (keyIsPressed === true && t < 19){

    if (a > 1 && a < 15){
      fill(x, x, y, 100);
      noStroke();
      rect(0, 0, width, height);
      }
    if(a < 15){
      a++;
    }

    if(a == 15){
      a=a-15;
      t=t+1;
    }
  }
if(t > 18 && t <= 30){
 if (a > 1 && a < 15){
    fill(x, x, y, 100);
    noStroke();
    rect(0, 0, width, height);
      }
    if(a < 15){
      a++;
    }

    if(a == 15){
      a=a-15;
      t=t+1;
    }
}


/*
After the internal timer 't' reaches the count of 30,
the timer 't' will become 40, a number not used.
All variables willthen freeze at the value 0, essentially stopping
the program from running again.
*/
if(t == 30){
  t=t + 10;
  a=0;
  
  textFont(font1, 70);
  fill(0);
  text("Lets not give people", 500, 400);
  text("a seizure now.", 500, 600);
  
}
}

// change the color of the greek alphabet in the background
// 'r' = red , 'g' = green, 'b' = blue
function keyTyped(){
  if (key ==='r'){
    r=random(255);
  }
  if (key ==='g'){
    g=random(255);
  }
  if (key ==='b'){
    b=random(255);
  }
}