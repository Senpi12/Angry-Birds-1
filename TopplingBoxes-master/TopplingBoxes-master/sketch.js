const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var box3, box4;
var bird1;
var pig2;
var engine, world;
var box1;
var pig1;
var log1,log2;
var box5;
var log3, log4;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,75,75);
    box2 = new Box(900,300,75,75);
    ground = new Ground(600,height,1200,20)
    pig1 = new pig(800,300);
    log1 = new LOG(800,270,300,PI/2)
    box3 = new Box(700,250,75,75)
    box4 = new Box(900,250,75,75)
    pig2 = new pig(800,270)
    log2 = new LOG(800,180,300,PI/2)
    log3 = new LOG(760,120,150,PI/7)
    log4 = new LOG(860,120,150,-PI/7)
    bird1 = new bird(200,200)
    box5 = new Box(800,160,75,75)
}

function draw(){
    background(0);
    Engine.update(engine);
    pig1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
    box5.display();
    ground.display();
}