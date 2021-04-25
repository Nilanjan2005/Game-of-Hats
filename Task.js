        class Task{
        
           constructor(){
            this.question = createElement('h2');
            this.option1 = createElement('h2');
            this.option2 = createElement('h2');
            this.option3 = createElement('h2');
            this.option4= createElement('h2');
            this.input = createInput("Type");
            this.button2 = createButton("Submit");
            this.button3 = createButton("Next");
       }
        hide(){
        this.button2.hide();
        this.button3.hide();
        this.input.hide();
        }

        display(){
            this.button2.position(displayWidth/2+50,displayHeight/2);
            this.button3.position(displayWidth/2,displayHeight/2);
            this.input.position(displayWidth/2-20 , displayHeight/2-80);
            
            this.button2.mousePressed(()=>{
            this.button2.hide();
         })

         this.button3.mousePressed(()=>{
            this.button3.hide();
            this.input.hide();
            
        })
         
         this.question.html("Question :- Peter's father has five sons. The names of four sons are Fefe, Fifi, Fafa and Fufu respectively. What is the name of the fifth son? 🤔")
            this.question.position(320,50);
            this.option1.html("1: Fvfv");
            this.option1.position(370,120);
            this.option2.html("2: Peter");
            this.option2.position(370,150);
            this.option3.html("3: Peetr");
            this.option3.position(370,180);
            this.option4.html("4: FnFn")
           this.option4.position(370,210);

        
       }
        }