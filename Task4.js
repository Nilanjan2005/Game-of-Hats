class Task4{
    constructor(){
    this.question4= createElement('h2');
    this.button17 = createButton('1: Candle');
    this.button18 = createButton('4: Light')
    this.button19 = createButton('3: Fire');
    this.button20 = createButton('2: Water');
    this.feedback = createElement('h2');
    this.feedback2 = createElement('h2');
    }
    hide(){
     this.question4.hide();
     this.button17.hide();
     this.button18.hide();
     this.button19.hide();
     this.button20.hide();
    this.feedback.hide();
    this.feedback2.hide();
    }
    display(){
        this.button17.position(700,360);
        this.button18.position(970,460);
        this.button19.position(700,460);
        this.button20.position(970,360);
        this.feedback.position(835,300);
        this.feedback2.position(735,350);

        this.button17.mousePressed(()=>{
            this.button17.hide()
            this.button18.hide();
            this.button19.hide();
            this.button20.hide();
            black.x = 200;
            black.y = 200;
            black.scale = 0.8;
         this.feedback.html('Correct Answer');
         this.feedback2.html('Congrats ! You Won Four Hats.');
         this.feedback2.style('color','white');
         next3 = new NEXT3();
         next3.display();
        })
        this.button18.mousePressed(()=>{
            this.question4.hide();
            this.button17.hide();
            this.button18.hide();
            this.button19.hide();
            this.button20.hide();
            restart4 = new Restart4();
            restart4.display();
            this.feedback.html('Wrong Answer')
            black.destroy();

        })
        this.button19.mousePressed(()=>{
            this.question4.hide();
            this.button17.hide();
            this.button18.hide();
            this.button19.hide();
            this.button20.hide();
            restart4 = new Restart4();
            restart4.display();
            this.feedback.html('Wrong Answer')
            black.destroy();

        })
        this.button20.mousePressed(()=>{
            this.question4.hide();
            this.button17.hide();
            this.button18.hide();
            this.button19.hide();
            this.button20.hide();
            restart4 = new Restart4();
            restart4.display();
            this.feedback.html('Wrong Answer')
            black.destroy();

        })
        this.question4.position(80,50);
        this.question4.html("QUESTION 4:-You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy.  ");
       this.question4.style('color','black');
    }
}