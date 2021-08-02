class Interval{

 constructor(){
        this.greetings = createElement('h2');
        //  this.button11 = createButton('Restart');
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

     this.greetings2.position(820,80);
     this.greetings2.html("*Achieved Hats🤠🤠:-");
     this.greetings2.style('color','white')

     this.button11.position(1250,600);
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
   
})
 }


}
