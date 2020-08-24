const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paperball,dustbin;

function setup() 
{
  createCanvas(1600,700);
  engine = Engine.create();
  world = engine.world;
  
  paperball = new Paper(200,350,70); 
  ground = new Ground(width/2,670,width,20);
  dustbin = new Dustbin(1300,650);
  

}

function draw() 
{
  Engine.update(engine);	
  rectMode(CENTER);
  background(225);

 
  paperball.display();
  ground.display();
  dustbin.display();
  drawSprites();
}

function keyPressed()
{
  if(keyCode == UP_ARROW){
    
	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:140,y:-170});
  }
}