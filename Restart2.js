class Restart2{
    constructor(){
        this.Button2 = createButton('Restart');
    }
    hide(){
        this.Button2.hide();
    }
    display(){
        this.Button2.position(900,400);
        this.Button2.mousePressed(()=>{
            click.play();
            reset1();
            this.Button2.hide();
        })
    }
}