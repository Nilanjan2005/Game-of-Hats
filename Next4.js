class Next4{
        constructor(){
            this.BUTTON4 = createButton('Achieved Hats ▶️');
        }
        hide(){
            this.BUTTON4.hide();
        }
        display(){
    
        this.BUTTON4.position(900,410);
    
        this.BUTTON4.mousePressed(()=>{
            click.play();
            this.BUTTON4.hide();
         game.play6();
        })
        }
    }
