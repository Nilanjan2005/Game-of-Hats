var backgroundImage;
//var playerCount;
var character,characterImage;
var backgroundImage2;
var gameState = 0;
var database;
var game, form;

function preload(){
backgroundImage = loadImage("Images/background.png")
backgroundImage2 = loadImage("Images/background2.png")
characterImage = loadImage("Images/character boy1.png");
playImage = loadImage("Images/play.png");
}
function setup() {
  createCanvas(displayWidth - 20, displayHeight-40);

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}

function draw() {
  background(backgroundImage);  
 
  if(gameState ===1){
    game.play();
  }
  drawSprites();
}
 

