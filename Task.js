class Task{
    constructor(){
        this.button2 = createButton('1: Peter');
        this.button3 = createButton('3: Peetr');
        this.button4 = createButton('4: fnfn');
        this.button5 = createButton('2: fvfv');
        this.question  = createElement('h2');
        this.feedback = createElement('h2');
        this.title = createElement('h2');

       
     }
    hide(){
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button5.hide();
        this.question.hide();
        this.feedback.hide();
        this.title.hide();
    }
    display(){
        this.button2.position(700,360);
        this.button3.position(970,460);
        this.button4.position(700,460);
        this.button5.position(970,360);
      
        this.feedback.position(885,350); 
        this.title.position(840,300);
       
 this.button2.mousePressed(()=>{
       
        this.button2.hide();
        this.button3.hide();
        this.button4.hide();
        this.button5.hide();
         this.question.hide();
         red.x = 200;
         red.y = 190;
          this.feedback.html("Correct Answer")
          this.feedback.style('color','rgb(0, 255, 0)');
        this.title.html("Press SPACE key for task-2")
        applause.play();      
    })
    
  this.button3.mousePressed(()=>{

           this.button2.hide();
             this.button3.hide();
             this.button4.hide();
             this.button5.hide();
            this.feedback.html('Wrong Answer');
          this.feedback.style('color','red');
          glass_break.play();
          red.destroy();  
          restart1 = new Restart1();
          restart1.display();
     this.question.hide();
         })

  this.button4.mousePressed(()=>{
            
          this.button2.hide();
           this.button3.hide();
           this.button4.hide();
             this.button5.hide();
             this.feedback.html("Wrong Answer");
             this.feedback.style('color','red');
             glass_break.play();
             red.destroy();  
             restart1 = new Restart1();
             restart1.display();
        this.question.hide();
         })

  this.button5.mousePressed(()=>{
        
             this.button2.hide();
           this.button3.hide();
           this.button4.hide();
             this.button5.hide();
            this.feedback.html("Wrong Answer");
            this.feedback.style('color','red');
         glass_break.play()
         red.destroy();  
         restart1 = new Restart1();
         restart1.display();
 this.question.hide();
         })
        
        this.question.html("Question :- Peter's father has five sons. The names of four sons are Fefe, Fifi, Fafa and Fufu respectively. What is the name of the fifth son? 🤔")
        this.question.position(70,10);
       this.question.style('color','red');
    }
    
}