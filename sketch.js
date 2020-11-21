const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;
var ground, ball;

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
  }
  
  ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
  World.add(world, ground);

  var ballOptions = {
    restitution: 1.0
  }

  ball = Bodies.circle(200, 200, 25, ballOptions);
  World.add(world, ball);
}

function draw() {
  background(0);

  Engine.update(engine);

  rectMode(CENTER);
  fill (255, 0, 0);
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(CENTER);
  fill(0, 255, 0);
  ellipse(ball.position.x, ball.position.y, 50, 50);
}