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
      
      form.hide();  
      background(0);
      task = new Task();
      task.display(); 
      image(backgroundImage2,0,0, displayWidth , displayHeight);
      character = createSprite(200,400);
      character.addImage("character",characterImage); 
     // red = createSprite(800,100)
      //red = addImage(redhat)
      image(redhat,1100,100,110,110);
      
      var correctAns = "2"
      if(character === correctAns){

        red.x = 1;
        red.y = -2;
      }
    }

}
