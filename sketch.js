
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var groundObj;
var ball;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	groundObj = new Ground(width/2, 670, width,20);

	leftSide = new Wall(width/2.5, 600, 20, 120);
	rightSide = new Wall(width/1.5, 600, 20, 120);
	

	var ball_options={
		isStatic:false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ball = Bodies.circle(200,50,10,ball_options);
	World.add(world,ball);

	Engine.run(engine);
  
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  background(51);
  
  ellipse(ball.position.x,ball.position.y,20);

  groundObj.display();
  leftSide.display();
  rightSide.display();
  console.log();

  drawSprites();
  Engine.update(engine);
}

function keyPressed() {
	if(keyCode == UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0, y:0}, {x:3, y:3});
	}
}



