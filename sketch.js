const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var box21, box22, box23, box24, box25;
var ball, rope;

function setup(){
  createCanvas(3500, 1000);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 600, 2200, 25);

  box1 = new Box(900, 100, 75, 75);
  box2 = new Box(900, 110, 75, 75)
  box3 = new Box(900, 120, 75, 75)
  box4 = new Box(900, 130, 75, 75)
  box5 = new Box(900, 140, 75, 75)
  box6 = new Box(900, 150, 75, 75)
  box7 = new Box(900, 160, 75, 75)
  box8 = new Box(900, 170, 75, 75)
  box9 = new Box(900, 180, 75, 75)
  box10 = new Box(900, 190, 75, 75)
  box11 = new Box(720, 100, 75, 75)
  box12 = new Box(720, 110, 75, 75)
  box13 = new Box(720, 120, 75, 75)
  box14 = new Box(720, 130, 75, 75)
  box15 = new Box(720, 140, 75, 75)
  box16 = new Box(720, 150, 75, 75)
  box17 = new Box(720, 160, 75, 75)
  box18 = new Box(720, 170, 75, 75)
  box19 = new Box(720, 180, 75, 75)
  box20 = new Box(720, 190, 75, 75)
  box21 = new Box(640, 100, 75, 75)
  box22 = new Box(640, 110, 75, 75)
  box23 = new Box(640, 120, 75, 75)
  box24 = new Box(640, 130, 75, 75)
  box25 = new Box(640, 140, 75, 75)

  ball = new Ball(205,200, 85, 85)

  rope = new Rope(ball.body, {x: 500, y: 50});
}

function draw(){
  background("lightblue");
  Engine.update(engine);

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  ball.display();

  rope.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX, y:mouseY})
}



