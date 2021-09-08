class Form{
    
    
    constructor(){
        this.button= createButton("PLAY");
        this.greeting = createElement('h2');
        this.title = createElement('h2');
      //  this.button2 = createButton('Peter')
        
    }
  
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.title.hide();
      //   this.button2.hide();
    }
    
    
    display(){
     this.title.html("Game of Hats");
     this.title.position(900,20);
    this.title.style('color','red');
     this.button.position(900,410);
   //   this.button2.position(displayWidth/4,displayHeight/4+80);
     
     this.greeting.html("All the best !");
     this.greeting.position(900,205)
   this.greeting.style('color','green');
console.log(this.greeting)   
     
     
     this.button.mousePressed(()=>{
       click.play();
      this.button.hide();
      game.play();
    })
    }

    
}
