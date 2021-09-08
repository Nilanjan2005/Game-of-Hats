class Next{
    constructor(){
        this.BUTTON = createButton('Next');

    }
    hide(){
        this.BUTTON.hide();
        
    }
    display(){
        this.BUTTON.position(840,450);
    
     this.BUTTON.mousePressed(()=>{
        click.play();
         this.BUTTON.hide()
        game.play3();
        interval = new Interval();
        interval.display();
    })
    }
}
