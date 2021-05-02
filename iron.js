class Iron{
    constructor(x,y,w,h){
        var parameters={
            isStatic: false,
            restitution: 0.8,
            friction: 3,
            density: 35
        }
        this.x=x;
		this.y=y;
        this.w=w;
        this.h=h;
        this.body = Bodies.rectangle(x,y,this.w,this.h,parameters);
        World.add(world, this.body);
    }
    display(){
        var ironPos = this.body.position;
        var ironAng = this.body.angle;
        push()
        translate(ironPos.x, ironPos.y);
        rectMode(CENTER)
        rotate(ironAng);
        strokeWeight(2);
        stroke("black");
       
        rect(0,0, 100, 100);
        pop();
    }
}