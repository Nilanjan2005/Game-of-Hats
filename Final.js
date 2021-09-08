class Final{
    constructor(){
    this.greeting = createElement('h2');
    }
    hide(){
    this.greeting.hide();
    }
    display(){
        this.greeting.position(1000,150);
        this.greeting.html("COLLECTION OF HATS :-");
        this.greeting.style('color','Green');


    }
}