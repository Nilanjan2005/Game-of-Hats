class Task{
    constructor(){
        this.button2 = createButton('Peter');
        this.button3 = createButton('Peetr');
        this.button4 = createButton('fnfn');
        this.button5 = createButton('fvfv');
        this.question  = createElement('h2')
        this.greeting = createElement('h2');
        // this.button6 = createButton('Next')   
     }
    hide(){
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button5.hide();
        this.question.hide();
       this.greeting.hide();
     
    }
    display(){
        this.button2.position(displayWidth/4+270,displayHeight/4+100);
        this.button3.position(displayWidth/4+140,displayHeight/4+100);
        this.button4.position(displayWidth/4+270,displayHeight/4+160);
        this.button5.position(displayWidth/4+140,displayHeight/4+160);
      
        this.greeting.position(600,300)

       this.button2.mousePressed(()=>{
       
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button5.hide();
         this.question.hide();
         red.x = 200;
         red.y = 200;
         fill("Green")
         textSize(40)
        text("Correct",600,300);
       this.greeting.html("Correct Answer")
//    gameState === 2;
applause.play();      
    })

         this.button3.mousePressed(()=>{
            this.button2.hide();
             this.button3.hide();
             this.button4.hide();
             this.button5.hide();
             fill("Red")
             textSize(40)
            text("Wrong",600,300);
          this.greeting.html('wrong')
          glass_break.play();
         })

         this.button4.mousePressed(()=>{
            // fill("Red")
            // textSize(40)   
        //    text("wrong",600,300);
           this.button2.hide();
           this.button3.hide();
           this.button4.hide();
             this.button5.hide();
             this.greeting.html("Wrong Answer");
             glass_break.play()
         })

         this.button5.mousePressed(()=>{
             this.button2.hide();
           this.button3.hide();
           this.button4.hide();
             this.button5.hide();
            //  fill("Red")
            //  textSize(40)
            // text("wrong",600,300);
         this.greeting.html("You're answer is wrong");
         glass_break.play()
         })
        
        this.question.html("Question :- Peter's father has five sons. The names of four sons are Fefe, Fifi, Fafa and Fufu respectively. What is the name of the fifth son? 🤔")
        this.question.position(120,10);
       
    }
    
}