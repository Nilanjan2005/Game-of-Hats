class Task2{
    constructor(){
        this.button6 = createButton('1: Shopkeeper');
        this.button7 = createButton('4: Bookkeeper ');
        this.button8 = createButton('2: letter');
        this.button9 = createButton('3: letterbox');
        this.question2 = createElement('h2');
        this.feedback = createElement('h2');
        this.title2 = createElement('h2');

       
     }
    hide(){
        this.button6.hide();
        this.button7.hide();
        this.button8.hide();
        this.button9.hide();
        this.question2.hide();
        this.feedback.hide();
        this.title2.hide();
    }
    
    display(){

        this.button6.position(700,360);
        this.button7.position(970,460);
        this.button8.position(970,360);
        this.button9.position(700,460);
        this.feedback.position(805,350); 
        this.title2.position(840,300);
       

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
        restart2 = new Restart2();
        restart2.display();
          })
    
         this.button7.mousePressed(()=>{
            this.button6.hide();
             this.button7.hide();
             this.button8.hide();
             this.button9.hide();
             yellow.x = 200;
             yellow.y = 200;
             yellow.scale = 0.85;
            this.feedback.html('Correct Answer');
          this.feedback.style('color','rgb(0, 255, 0)');
          this.title2.html("Press Next");
          applause.play(); 
          next = new Next();
          next.display();
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
             restart2 = new Restart2();
             restart2.display();

         })

         this.button9.mousePressed(()=>{
          restart2 = new Restart2();
          restart2.display();
             this.button6.hide();
           this.button7.hide();
           this.button8.hide();
             this.button9.hide();
            this.feedback.html("Wrong Answer");
            this.feedback.style('color','red');
         glass_break.play()
         yellow.destroy();  
          })
        
         
        this.question2.html("QUESTION 2:-What English word has three consecutive double letters? ");
        this.question2.position(50,50);
       this.question2.style('color','Yellow');


    }
    
}
