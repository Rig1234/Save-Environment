class Paper {
    constructor(x,y){
     var options = {
         isStatic : false,
         restitution:0.3,
         density:1.2,
         friction:0
     }
     this.image=loadImage("paper.png")
     this.body = Bodies.circle(x, y, 50, options);
     this.radius = 50;
     
     World.add(world, this.body);
    
    }

    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        //strokeWeight(3);
        //stroke('white')
        //fill('orange')
        //rectMode(CENTER)
        //rect(0, 0, this.width, this.height);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();

        
    }
}