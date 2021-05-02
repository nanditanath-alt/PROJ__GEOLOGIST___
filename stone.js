class Stone{
    constructor(x,y,w,h){
        var options={
            isStatic: false,
            restitution: 0.8,
            friction: 0.9,
            density: 15
        }
        this.x=x;
		this.y=y;
        this.w=w;
        this.h=h;
        this.body = Bodies.rectangle(x,y,this.w,this.h,options);
        World.add(world, this.body);
    }
    display(){
        var sPos = this.body.position;
        var sAng = this.body.angle;
        push()
        translate(sPos.x, sPos.y);
        rectMode(CENTER)
        rotate(sAng);
        strokeWeight(2);
        stroke("black");
       
        rect(0,0, 70, 40);
        pop();
    }
}