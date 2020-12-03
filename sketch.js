
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var bob1 , bob2, bob3, bob4, bob5;
var string1,string2,string3,string4,string5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(width/2,150,300,30);
	bob1 = new bob(width/2,ground1.y+300,50);
	bob2 = new bob(bob1.x-52,bob1.y,50);
	bob3 = new bob(bob1.x-184,bob1.y-20,50);
	bob4 = new bob(bob1.x+52,bob1.y,50);
	bob5 = new bob(bob4.x+52,bob1.y,50);
	string1 = new string(bob1.body,{x:width/2,y:ground1.y});
	string2 = new string(bob2.body,{x:350,y:ground1.y});
	string3 = new string(bob3.body,{x:300,y:ground1.y});
	string4 = new string(bob4.body,{x:450,y:ground1.y});
	string5 = new string(bob5.body,{x:500,y:ground1.y});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  drawSprites();
 
}



