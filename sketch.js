var backgroundImage;
//var playerCount;
var character,characterImage;
var backgroundImage2;
var gameState = 0;
var database;
var game, form, button,task;
var black,blue,red,yellow,purple,white,green;
var blackhat,bluehat,redhat,yellowhat,purplehat,whitehat,greenhat;
var table;
var applause,glass_break;

function preload(){
      backgroundImage = loadImage("Images/background.png")
      backgroundImage2 = loadImage("Images/background2.png")
      characterImage = loadImage("Images/character boy1.png");
      blackhat = loadImage("Images/black hat.png");
      bluehat = loadImage("Images/blue hat.png");
      redhat = loadImage("Images/red hat.png")
      yellowhat = loadImage("Images/yellow hat.png")
      purplehat = loadImage("Images/purple hat.png")
      whitehat = loadImage("Images/white hat.png");
      greenhat = loadImage("Images/green hat.png");
      applause = loadSound("applause_sound.wav");
      glass_break = loadSound("glass_break.wav")
}
function setup() {
  createCanvas(displayWidth +90, displayHeight-80);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}

function draw() {
  background(backgroundImage2);  
 

  
   if(gameState ===1){
   
    // clear();
     game.play();
  game.play2();
   }
 
  // red.display();
  drawSprites();
}
 

