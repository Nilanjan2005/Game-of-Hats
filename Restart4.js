class Restart4{
    constructor(){
        this.Button4 = createButton('Restart');
    }
    hide(){
        this.Button4.hide();
    }
    display(){
        this.Button4.position(900,400);
        this.Button4.mousePressed(()=>{
            click.play();
            reset3();
            this.Button4.hide();
        })
    }
}