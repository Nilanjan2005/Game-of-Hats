class Restart3{
    constructor(){
        this.Button3 = createButton('Restart');
    }
    hide(){
        this.Button3.hide();
    }
    display(){
        this.Button3.position(900,400);
        this.Button3.mousePressed(()=>{
            click.play();
            reset2();
            this.Button3.hide();
        })
    }
}