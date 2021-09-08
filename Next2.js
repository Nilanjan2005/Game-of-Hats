class Next2{
    constructor(){
        this.BUTTON2 = createButton('Task4');

    }
    hide(){
        this.BUTTON2.hide();
    }
    display(){

    this.BUTTON2.position(900,410);

    this.BUTTON2.mousePressed(()=>{
        click.play();
        this.BUTTON2.hide();
        game.play4();
    })
    }
}