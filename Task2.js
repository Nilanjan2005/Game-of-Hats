class Task2{
    constructor(){
        this.button6 = createButton('3: Shopkeeper');
        this.button7 = createButton('2: Bookkeeper ');
        this.button8 = createButton('1: letter');
        this.button9 = createButton('4: letterbox');
        this.button10 = createButton('Next');
        this.question2 = createElement('h2');
        this.feedback = createElement('h2');
        this.title2 = createElement('h2');

       
     }
    hide(){
        this.button6.hide();
        this.button7.hide();
        this.button8.hide();
        this.button9.hide();
        this.button10.hide();
        this.question2.hide();
        this.feedback.hide();
        this.title2.hide();
    }
    
    display(){

        this.button6.position(displayWidth/4+80,displayHeight/4+160);
        this.button7.position(displayWidth/4+270,displayHeight/4+100);
        this.button8.position(displayWidth/4+80,displayHeight/4+100);
        this.button9.position(displayWidth/4+270,displayHeight/4+160);
        this.button10.position(1200,550);
        this.feedback.position(600,300); 
        this.title2.position(600,200);
       

       this.button6.mousePressed(()=>{
         this.button6.hide();
        this.button7.hide();
        this.button8.hide();
        this.button9.hide();
        this.question2.hide();
        this.feedback.html("Wrong Answer")
        this.feedback.style('color','red');
        glass_break.play();   
        yellow.destroy();
        restart1 = new Restart1();
        restart1.display();
        this.button10.hide();
   })
    
         this.button7.mousePressed(()=>{
            this.button6.hide();
             this.button7.hide();
             this.button8.hide();
             this.button9.hide();
             yellow.x = 200;
             yellow.y = 200;
            this.feedback.html('Correct Answer');
          this.feedback.style('color','rgb(0, 255, 0)');
          this.title2.html("press Next");
          applause.play(); 
         })

         this.button8.mousePressed(()=>{
           this.button6.hide();
           this.button7.hide();
           this.button8.hide();
             this.button9.hide();
             this.feedback.html("Wrong Answer");
             this.feedback.style('color','red');
             glass_break.play();
             yellow.destroy();  
             restart1 = new Restart1();
             restart1.display();
             
             this.button10.hide();

         })

         this.button9.mousePressed(()=>{
          this.button10.hide();
          restart2 = new Restart1();
          restart2.display();
 
             this.button6.hide();
           this.button7.hide();
           this.button8.hide();
             this.button9.hide();
            this.feedback.html("Wrong Answer");
            this.feedback.style('color','red');
         glass_break.play()
         yellow.destroy();  
         restart1 = new Restart1();
         restart1.display();
         })
        
         this.button10.mousePressed(()=>{
           game.play3();
         })
        this.question2.html("QUESTION 2:-What English word has three consecutive double letters? ");
        this.question2.position(50,50);
       this.question2.style('color','Yellow');


    }
    
}
