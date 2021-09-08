class Task5{
    constructor(){
        this.question5 = createElement('h2');
        this.button21 = createButton(' 1: The Colosseum');
        this.button22 = createButton(' 2: The Chichen itza');
        this.button23 = createButton(' 3: Machu Picchu');
        this.button24 = createButton(' 4: The Big ben');
        this.feedback = createElement('h2')
    }
    hide(){
        this.question5.hide();
        this.button21.hide();
        this.button22.hide();
        this.button23.hide();
        this.button24.hide();
        this.feedback.hide();
    }
    display(){
        this.button21.position(700,360);
        this.button22.position(970,360);
        this.button23.position(700,460);
        this.button24.position(970,460);
        this.feedback.position(800,300);

        this.button21.mousePressed(()=>{
            this.button21.hide();
            this.button22.hide();
            this.button23.hide();
            this.button24.hide();
    
            this.feedback.html('Oops ! YOU LOSE YOUR HATS 😯');
            this.feedback.style('color','red')
            click.play();
            white.destroy();
            gameover = createSprite(900,410);
            gameover.addImage(gameOver);
        })
        this.button22.mousePressed(()=>{
            this.button21.hide();
            this.button22.hide();
            this.button23.hide();
            this.button24.hide();
    
            this.feedback.html('Oops ! YOU LOSE YOUR HATS 😯');
            this.feedback.style('color','red')
            click.play();
            white.destroy();
            gameover = createSprite(900,410);
            gameover.addImage(gameOver);
        })
        this.button23.mousePressed(()=>{
            this.button21.hide();
            this.button22.hide();
            this.button23.hide();
            this.button24.hide();
    
            this.feedback.html('Oops ! YOU LOSE YOUR HATS 😯');
            this.feedback.style('color','red')
            click.play();
            white.destroy();
        gameover = createSprite(900,410);
        gameover.addImage(gameOver);
        })
        this.button24.mousePressed(()=>{
            this.button21.hide();
            this.button22.hide();
            this.button23.hide();
            this.button24.hide();
    
            this.feedback.html(' YOU WON THE GAME!!🤩🥳');
            this.feedback.style('color','rgb(0, 255, 0)');
            confetti_sound.play()
            white.x = 205;
            white.y = 200;
            white.scale = 0.8;
            next4 = new Next4();
            next4.display();
        })
        this.question5.position(80,50);
        this.question5.html("QUESTION 5 :-Which of the following is not among the seven wonders of world ?");
        this.question5.style('color','white')
    }
}