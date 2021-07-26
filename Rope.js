class Rope {
    constructor(bodyA, pointB) {
        var options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            angularStiffness:1,
            length: 220
        };
        this.pointX = bodyA.x;
        this.pointY = bodyA.y-250;    
        this.rope = Constraint.create(options);
        World.add(world,this.rope)
    }
    
    display(){
        if(this.rope.bodyA){
            var bodyA = this.rope.bodyA.position;
            var pointB = this.rope.pointB;
            push();
            
            stroke("white");
            strokeWeight(2);
            fill("#fff");
            line( bodyA.x, bodyA.y,pointB.x, pointB.y);
            ellipse(bodyA.x,bodyA.y,5,5);
            ellipse(pointB.x,pointB.y,5,5);
            pop();
        }
    }
}