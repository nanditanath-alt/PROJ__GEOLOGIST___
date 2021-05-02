const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1, rubber2, rubber3, rubber4;
var stone1, stone2;
var iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    //the ground
    plane = new Plane(600,height-50,1200,100)

    //the hammer
    hammer = new Hammer(10,100);

    //the rubber
    rubber1 = new Rubber(300,500,50);
    rubber2 = new Rubber(100,500,45);
    rubber3 = new Rubber(500,500,10);

    //the stones
    stone1 = new Stone(700,100,20,20);
    stone2 = new Stone(200,200,30,30);

    //the iron pieces
    iron = new Iron(600, 100, 20,20);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    //displaying the rubber
    fill("pink")
    rubber1.display();
    fill("green")
    rubber2.display();
    rubber3.display();

    //displaying the stone
    fill("brown")
    stone1.display();
    fill("brown");
    stone2.display();

    //displaying the iron
    fill("black")
    iron.display();
}