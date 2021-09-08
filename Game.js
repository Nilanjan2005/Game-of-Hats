class Game {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
      gameState = data.val();
    })
     
    }
    update(state){
        database.ref('/').update({
        gameState: state
      })
    }
    start(){
      if(gameState === 0){
        form = new Form()
        form.display();
    }
    }
    play(){
    
    form.hide();
    character = createSprite(200,400);
    character.addImage("character",characterImage); 
    red = createSprite(1600,150)
    red.addImage(redhat)
    red.scale = 0.55;

    task = new Task();
    task.display();
    }

    play2(){
     task.hide();
     red.destroy();
     yellow = createSprite(1600,150);
     yellow.addImage(yellowhat);
     yellow.scale = 0.95;

     task2 = new Task2();
     task2.display();
    }

   play3(){
     task2.hide();
     character.destroy();
     yellow.destroy();
    
      character = createSprite(200,400);
     character.addImage(character2Img);

      table = createSprite(1200,300,500,480);
      table.shapeColor =  rgb(73,73,255);
      
      yellow = createSprite(1180,450);
      yellow.addImage(yellowhat);
      yellow.scale = 0.85;
    
      red = createSprite(1180,270)
      red.addImage(redhat)
      red.scale = 0.55;
    }
    play4(){
    interval.hide();
    task3.hide();
    blue.destroy();
    black = createSprite(1500,200);
    black.addImage(blackhat);

   task4 = new Task4();
   task4.display();
    
    }
   play5(){
    task4.hide();
    black.destroy();
    white = createSprite(1500,200);
    white.addImage(whitehat);

    task5 = new Task5();
    task5.display();
   }
   play6(){
     task5.hide();
     white.destroy();

    final = new Final();
    final.display();

    table2  = createSprite(1200,400,900,600);
    table2.shapeColor = rgb(203,195,227);

    yellow = createSprite(1480,270);
    yellow.addImage(yellowhat);
    yellow.scale = 0.90;
  
    red = createSprite(980,270)
    red.addImage(redhat)
    red.scale = 0.60;

    blue = createSprite(980,480);
    blue.addImage(bluehat);
    // blue.scale = 0.8;

    black = createSprite(1480,480);
    black.addImage(blackhat);

    white = createSprite(1230,350);
    white.addImage(whitehat);
   }
  }
