class Task2{
    constructor(){
        this.button6 = createButton('3: Shopkeeper');
        this.button7 = createButton('2: Bookkeeper ');
        this.button8 = createButton('1: letter');
        this.button9 = createButton('4: letterbox');
        this.question2 = createElement('h2');
        this.greeting2 = createElement('h2');
        this.title2 = createElement('h2');

       
     }
    hide(){
        this.button6.hide();
        this.button7.hide();
        this.button8.hide();
        this.button9.hide();
        this.question2.hide();
        this.greeting2.hide();
        this.title2.hide();
    }
    display(){
        this.button6.position(displayWidth/4+80,displayHeight/4+160);
        this.button7.position(displayWidth/4+270,displayHeight/4+100);
        this.button8.position(displayWidth/4+80,displayHeight/4+100);
        this.button9.position(displayWidth/4+270,displayHeight/4+160);
      
        this.greeting2.position(600,300); 
        this.title2.position(600,200);
       
       this.button6.mousePressed(()=>{
       
        this.button6.hide();
        this.button7.hide();
        this.button8.hide();
        this.button9.hide();
         this.question2.hide();
          this.greeting2.html("Wrong Answer")
          this.greeting2.style('color','red');
        this.title2.html("press ENTER key for task-3");
       
        glass_break.play();     
    })
    
         this.button7.mousePressed(()=>{
            this.button6.hide();
             this.button7.hide();
             this.button8.hide();
             this.button9.hide();
             yellow.x = 200;
             yellow.y = 200;
            
            this.greeting2.html('Correct Answer');
          this.greeting2.style('color','rgb(0, 255, 0)');
          this.title2.html("press ENTER key for task-3")
          applause.play(); 
         })

         this.button8.mousePressed(()=>{
        
          this.button6.hide();
           this.button7.hide();
           this.button8.hide();
             this.button9.hide();
             this.greeting2.html("Wrong Answer");
             this.greeting2.style('color','red');
             this.title2.html("press ENTER key for task-3")
             glass_break.play()
         })

         this.button9.mousePressed(()=>{
             this.button6.hide();
           this.button7.hide();
           this.button8.hide();
             this.button9.hide();
            this.greeting2.html("You're answer is wrong");
            this.greeting2.style('color','red');
            this.title2.html("press ENTER key for task-3")
         glass_break.play()
         })
        
        this.question2.html("QUESTION 2:-What English word has three consecutive double letters? ");
        this.question2.position(50,50);
       this.question2.style('color','Yellow')
    }
    
}
