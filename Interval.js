class Interval{

 constructor(){
        this.greetings = createElement('h2');
        this.greetings2 = createElement('h2')
        this.button11 = createButton('Task3➡️');
        this.greetings3 = createElement('h2');
            }
hide(){
this.button11.hide();
this.greetings.hide();
this.greetings2.hide();
this.greetings3.hide();
}

 
 display(){
     this.greetings.position(300,260);
     this.greetings.html("CONGRATS!!!Your HERO is upgraded ");
     this.greetings.style('color','white');

     this.greetings2.position(1040,80);
     this.greetings2.html("*Achieved Hats🤠🤠:-");
     this.greetings2.style('color','white')

     this.button11.position(1450,700);
     this.greetings3.position(100,50);

     this.button11.mousePressed(()=>{
    this.button11.hide();  
    this.greetings.hide();
    this.greetings2.hide();
    yellow.destroy();
    red.destroy();
   table.destroy();   
   this.greetings3.html("TASK -3");
   this.greetings3.style('color','Blue');
    blue = createSprite(1600,150);
    blue.addImage(bluehat);

  task3 = new Task3();
  task3.display();
})

 }


}
