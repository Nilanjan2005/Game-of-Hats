var backgroundImage;
var character,characterImage;
var character2,character2Img;
var backgroundImage2;
var gameState = 0;
var database;
var game, form, button,task,task2,interval,task3,task4,task5,next,next2img,next2,next3,next4;
var black,blue,red,yellow,purple,white,green;
var blackhat,bluehat,redhat,yellowhat,purplehat,whitehat,greenhat;
var table,restart1,restart2,restart3,restart4,restart5,final,table2;
var applause,glass_break,confetti_sound,sound2,click;
var gameOver,gameover;

function preload(){
      backgroundImage2 = loadImage("background2.png")
      characterImage = loadImage("character boy1.png");
      character2Img = loadImage("character2.png");
      blackhat = loadImage("black hat.png");
      bluehat = loadImage("blue hat.png");
      redhat = loadImage("red hat.png")
      yellowhat = loadImage("yellow hat.png")
      whitehat = loadImage("white hat.png");
      applause = loadSound("applause_sound.wav");
      sound2 = loadSound("sound2.mp3");
      glass_break = loadSound("glass_break.wav");
      confetti_sound = loadSound("confetti sound.mp3");
      click = loadSound("click.mp3");
      gameOver = loadImage("Gameover.png");
}
function setup() {
  database = firebase.database();

  createCanvas(1800,820 );

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
      game.update(1)
      // game.play2();
    }
    if (gameState === 1){
     game.play2();
   }
  
 
  }
function reset(){
    task.hide();
    form = new Form();
    form.display();
    character.destroy();
    game.update(0);
    // game.play4();
  }
function reset1(){
    task2.hide();
    character.destroy();
    form = new Form()
    form.display();    
  game.update(0);
  }
function reset2(){
  task3.hide();
  form = new Form()
  form.display();    
  game.update(0); 
 character.destroy();
  
}
function reset3(){
  task4.hide();
  form = new Form()
  form.display();    
  game.update(0); 
 character.destroy();
  
}
