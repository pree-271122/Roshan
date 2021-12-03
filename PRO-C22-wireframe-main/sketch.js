const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var ground;
var bgImage;



function preload() {

 bgImage=loadImage("assets/background.gif");

}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  var options={
    isStatic : true
  }
  
  ground = Bodies.rectangle(600,600,1200,10,options);
  World.add(world,ground);
 
}

function draw() {
  background(189);

  image(bgImage,0,0,1200,600);
 
  Engine.update(engine);

  rectMode(CENTER);
  fill("black");
  rect(ground.position.x,ground.position.y,1200,10);
  
   
}
