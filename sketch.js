const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var box10,box11,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21;
var box22,box23,box24;
var box25;
var ground1,ground2,weight;
var x,y,width,height;
var gameState,points,a,highscore;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  gameState = "onSling";

  ground1 = new Ground(315,230,300,10);
  ground2 = new Ground(0,400,2000,50);
  box1 = new Box(200,200);
  box2 = new Box(230,200);
  box3 = new Box(260,200);
  box4 = new Box(290,200);
  box5 = new Box(320,200);
  box6 = new Box(350,200);
  box7 = new Box(380,200);
  box8 = new Box(410,200);
  box9 = new Box(440,200);
  box10= new Box(230,150);
  box11 = new Box(260,150);
  box12 = new Box(290,150);
  box13 = new Box(320,150);
  box14 = new Box(350,150);
  box15 = new Box(380,150);
  box16 = new Box(410,150);
  box17 = new Box(260,100);
  box18 = new Box(290,100);
  box19 = new Box(320,100);
  box20 = new Box(350,100);
  box21 = new Box(380,100);
  box22 = new Box(290,50);
  box23 = new Box(320,50);
  box24 = new Box(350,50);
  box25 = new Box(320,0);

  weight = new Weight(100,150);
  
  sling = new SlingShot(weight.body,{x:100, y:150});

  points = 0;
    
}

function draw() {
  background(255,255,255);
  Engine.update(engine);  
  ground1.display();
  ground2.display();
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

  sling.display();
  weight.display();

  if(gameState!=="launched"&&weight.body.position.x>100){
    weight.body.position.x = 100;
  }

  drawSprites();

  fill(255,255,255);
  text("your total points are:"+points,50,50);
  text("knock out as many gold bars as you can to get points(max is 25)",50,300);
}
function mouseDragged(){
  if(gameState!=="launched"){
  Matter.Body.setPosition(weight.body, {x: mouseX , y: mouseY});
  }
  
}


function mouseReleased(){
  sling.fly();
  gameState = "launched";
}