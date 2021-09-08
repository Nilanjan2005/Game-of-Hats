class Restart1{
    constructor(){
        this.Button = createButton('Restart');
    }
    hide(){
        this.Button.hide();     
    }
    display(){
    this.Button.position(900,400);
    
     this.Button.mousePressed(()=>{
        click.play();
         reset();
         this.Button.hide();
    })
    }
}
