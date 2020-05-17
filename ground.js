class ground {
    constructor(){
        var ground_options ={
            isStatic:true
        }
    
        this.ground1 = Bodies.rectangle(600,390,1200,20,ground_options);
        this.width=1200;
        this.height=20;
        
        World.add(world,this.ground1);
    
    }
    
   display(){
       fill('brown')
       rectMode(CENTER);
    rect(this.ground1.position.x,this.ground1.position.y,this.width,this.height);
} 
}
