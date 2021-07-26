
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const MouseConstraint=Matter.MouseConstraint;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var ground, roof;
var canvas;
function preload()
{
	
}

function setup() {
	canvas=createCanvas(1200,800);
	engine = Engine.create();
	world = engine.world;
	console.log(canvas.elt)
	// let canvasmouse=Mouse.create(canvas.elt);
	// canvasmouse.pixelRatio = pixelDensity();
	// let options={
	// 	mouse:canvasmouse
	// };
	// mConstraint = MouseConstraint.create(engine, options);
	// World.add(world, mConstraint);

	bob1=new Bob(400,420);
	bob2=new Bob(460,420);
	bob3=new Bob(520,420);
	bob4=new Bob(580,420);
	bob5=new Bob(640,420);
	sling1= new Rope(bob1.body,{x:400, y:200});
	sling2= new Rope(bob2.body,{x:460, y:200});
	sling3= new Rope(bob3.body,{x:520, y:200});
	sling4= new Rope(bob4.body,{x:580, y:200});
	sling5= new Rope(bob5.body,{x:640, y:200});

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
  	background(0);
  
  	bob1.display();
  	bob2.display();
  	bob3.display();
  	bob4.display();
    bob5.display();
	sling1.display();
  	sling2.display();
  	sling3.display();
  	sling4.display();
  	sling5.display();
	
	  
}

function mouseDragged(){
	Body.setPosition(bob1.body,{ x:mouseX, y:mouseY});
}

