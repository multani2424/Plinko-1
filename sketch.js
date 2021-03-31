//Namespacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

//Variables
var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;

var upground,leftground,rightground;
var bottomdivision;

function setup() {
  //To create canvas
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  //Creating bottom division using ground class
  bottomdivision=new Ground(240,795,width,10);


 // upground=new Ground(width/2,2.5,width,5);
  //leftground=new Ground(1,height/2,5,height);
 // rightground=new Ground(479.5,height/2,5,height);
 
}

function draw() {
  //black background
  background(0);  

  Engine.update(engine);

  //displaying ground
  bottomdivision.display();

  //Creating multiple divisions using for loop
  for(var d=0; d<=width; d=d+80)
  {
    divisions.push(new Divisions(d,height-divisionHeight/2,10,divisionHeight));
  }

  //Displaying divisions
  for(var z=0; z<=divisions.length-1; z=z+1)
  {
    divisions[z].display();
  }

  //Creating first line of multiple plinkos
  for(var a=40; a<=width; a=a+50)
  {
    plinkos.push(new Plinko(a,75))
  }

  //Creating second line of multiple plinkos
  for(var b=15; b<width-10; b=b+50)
  {
    plinkos.push(new Plinko(b,175));
  }

  //Creating third line of multiple plinkos
  for(var c=40; c<width; c=c+50)
  {
    plinkos.push(new Plinko(c,275));
  }

  //Creating fourth line of multiple plinkos
  for(var d=15; d<width-10; d=d+50)
  {
    plinkos.push(new Plinko(d,375));
  }

  //Displaying plinkos
  for(var e=0; e<=plinkos.length-1; e=e+1)
  {
    plinkos[e].display();
  }

  //Displaying particles after every 60 frames
  if(frameCount%60===0)
  {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  
  //Displaying particles
  for(var f=0; f<=particles.length-1; f=f+1)
  {
    particles[f].display();
  }
  
 

 
 // upground.display();
 // leftground.display();
 // rightground.display();
}