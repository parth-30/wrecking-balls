class Ball{
    constructor(x,y,radius){
        var options={
            frictionAir:0.005,
            density:0.04,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body)
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("red");
        stroke("white");
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
    
}