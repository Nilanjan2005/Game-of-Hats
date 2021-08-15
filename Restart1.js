class Restart1{
    constructor(){
        this.Restart = createButton('Restart');
    }
    hide(){
        this.Restart.hide();     
    }
    display(){
    this.Restart.position(600,400);
    
     this.Restart.mousePressed(()=>{
         reset();
         this.Restart.hide();
    })
    }
}
