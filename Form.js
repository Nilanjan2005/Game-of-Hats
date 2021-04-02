class Form{
    
    
    constructor(){
        this.button= createButton("PLAY");
        this.greeting = createElement('h2');
    }
    
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.title.hide();
    }
    
    display(){
     var title = createElement('h2') 
     title.html("Hats");
     title.position(displayWidth/2-50,20);

     this.button.position(displayWidth/2+30,displayHeight/2);

     this.button.mousePressed(()=>{
     this.button.hide();
     
     this.greeting.html("All the best");
     this.greeting.position(displayWidth/2-70,displayHeight/4)
 })
    }
}