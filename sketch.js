var backgroundImage;
var character,characterImage;
var character2,character2Img;
var backgroundImage2;
var gameState = 0;
var database;
var game, form, button,task,task2,interval,task3;
var black,blue,red,yellow,purple,white,green;
var blackhat,bluehat,redhat,yellowhat,purplehat,whitehat,greenhat;
var table,restart1,restart2,restart3;
var applause,glass_break,burstImg,burst,sound2;

function preload(){
      backgroundImage2 = loadImage("Images/background2.png")
      characterImage = loadImage("Images/character boy1.png");
      character2Img = loadImage("Images/character2.png");
      blackhat = loadImage("Images/black hat.png");
      bluehat = loadImage("Images/blue hat.png");
      redhat = loadImage("Images/red hat.png")
      yellowhat = loadImage("Images/yellow hat.png")
      purplehat = loadImage("Images/purple hat.png");
      whitehat = loadImage("Images/white hat.png");
      greenhat = loadImage("Images/green hat.png");
      applause = loadSound("applause_sound.wav");
      sound2 = loadSound("sound2.mp3");
      glass_break = loadSound("glass_break.wav");
      burstImg = loadImage("Images/burst.png");
}
function setup() {
  database = firebase.database();

  createCanvas(displayWidth +90, displayHeight-80);

  game = new Game();
  game.getState();
  game.start();
 
 }

function draw() {

  background(backgroundImage2);  
 
  drawSprites();
}

function keyPressed(){
  
  if(keyCode === 32){
    game.update(1);
    // game.play2();
  }
  if (gameState === 1){
    game.play2();
  }
  
 
}
function reset(){
  task.hide();
    game.start();
    character.destroy();
    game.update(0);
    game.play4();
}
function reset1(){
  task2.hide();
    character.destroy();
    game.start();
    game.update(0);
    game.play4();
}
function reset2(){
task3.hide();
  game.start();
  character.destroy();
  game.update(0);
  game.play4();
}