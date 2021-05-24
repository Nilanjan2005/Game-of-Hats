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
      });
    }
  
    start(){
      if(gameState === 0){
        form = new Form()
        form.display();
       }


    }
   
    play(){
      // image(redhat,1000,100,110,110);
      

form.hide();

character = createSprite(200,400);
character.addImage("character",characterImage); 
red = createSprite(1250,150)
red.addImage(redhat)
red.scale = 0.45;
task = new Task();
task.display();



      // form.hide();  
      // background(0);
    
      // image(backgroundImage2,0,0, displayWidth , displayHeight);
     
    }
play2(){
  task.hide();
  form.hide();
  yellow = createSprite(1250,150);
  yellow.addImage(yellowhat)
}
}
