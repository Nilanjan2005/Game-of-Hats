class Task3{
 constructor(){
    this.feedback = createElement('h2');
    this.question = createElement('h2');
    this.button12 = createButton(' 1 : Norway');
    this.button13 = createButton('4 : Australia');
    this.button14 = createButton('3 : Canada');
    this.button15 = createButton('2 : Brazil');
 }
    hide(){
     
this.button12.hide();
this.button13.hide();
this.button14.hide();
this.button15.hide();
this.feedback.hide();
this.question.hide();
 }
 display(){
    this.feedback.position(835,350)

    this.question.html("QUESTION 3:-In which country the lungs of Earth are found ?");
    this.question.position(180,80);
    this.question.style('color','blue');
    
    this.button12.position(700,360);
    this.button13.position(970,460);
    this.button14.position(700,460);
    this.button15.position(970,360);

    this.button12.mousePressed(()=>{
        this.button12.hide();
        this.button13.hide();
        this.button14.hide();
        this.button15.hide();
        this.feedback.html("Oops ! You lose your hat ")
        this.feedback.style('color','red')
        this.question.hide();
        blue.destroy();
        restart3= new Restart3();
        restart3.display();
     this.question.hide();
   
    })
 this.button13.mousePressed(()=>{
        this.button12.hide();
        this.button13.hide();
        this.button14.hide();
        this.button15.hide();
        this.feedback.html("Oops ! You lose your hat ")
        this.feedback.style('color','red')
        this.question.hide();
        blue.destroy();
        restart3= new Restart3();
       restart3.display();
   this.question.hide();
    })
 this.button14.mousePressed(()=>{
        this.button12.hide();
        this.button13.hide();
        this.button14.hide();
        this.button15.hide();
        this.feedback.html("Oops ! You lose your Hat ")
        this.feedback.style('color','red')
       blue.destroy();
       this.question.hide();
       restart3= new Restart3();
       restart3.display();
    })
 this.button15.mousePressed(()=>{
        this.button12.hide();
        this.button13.hide();
        this.button14.hide();
        this.button15.hide();
        this.feedback.html("Wow! You won the Hat.")
        this.feedback.style('color','white');
   
        this.question.hide();
        blue.x = 210;
        blue.y = 190;
        blue.scale = 0.9;
        sound2.play();
        next2 = new Next2();
        next2.display();
    }) 

 }
}