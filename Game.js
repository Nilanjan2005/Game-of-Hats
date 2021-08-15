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
    red = createSprite(1250,150)
    red.addImage(redhat)
    red.scale = 0.55;

    task = new Task();
    task.display();
    }

    play2(){
     task.hide();
     red.destroy();
     yellow = createSprite(1250,150);
     yellow.addImage(yellowhat);
     yellow.scale = 0.85;

     task2 = new Task2();
     task2.display();
    }

   play3(){
     task2.hide();
     character.destroy();
     yellow.destroy();
    
     interval = new Interval();
     interval.display();
     character = createSprite(200,400);
     character.addImage(character2Img);

      table = createSprite(1000,300,500,480);
      table.shapeColor =  rgb(73,73,255);
      
      yellow = createSprite(980,450);
      yellow.addImage(yellowhat);
      yellow.scale = 0.85;
    
      red = createSprite(980,270)
      red.addImage(redhat)
      red.scale = 0.55;
    }
    play4(){
      
    }
  }
