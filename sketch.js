
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var left_box, bottom_box, right_box;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boxX = 450;
	boxY=610;

	//Create the Bodies Here.

	ball = new Paper(100, 200, 20);
	ground = new Ground(400,650, 800, 10);

	left_box = new Dustbin(461, 590, 20,100);
	right_box = new Dustbin(689, 590, 20,100);
	bottom_box = new Dustbin(570, 635, 250,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();
  ground.display();

  left_box.display();
  right_box.display();
  bottom_box.display();

  if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball.body, ball.body.position, {x:5, y:-5});
  }

  drawSprites();
 
}



