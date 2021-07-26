class Bob{
    constructor(x,y){
        var options={
            restitution:1,
            friction:0,
            frictionAir:0.0,
            slop:1,
            inertia: Infinity
        }
        this.body=Bodies.rectangle(x,y,60,60,options);
        this.x=x;
        this.y=y;
        World.add(world,this.body);
    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill ("#0F0E13");
        stroke("white");
        strokeWeight(0.5)
        ellipse(0,0,60,60);
        pop();
    }
}