const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var snowflakes = [];

function setup() {
  createCanvas(999,721);
  engine = Engine.create();
  world = engine.world;
}

function preload(){
  backgroundImg = loadImage("snow3.jpg");
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  if(frameCount % 60 === 0){
    snowflakes.push(new Snow(random(100,10000),10));
  }

  for (var m = 0; m < snowflakes.length; m++){
    snowflakes[m].display();
  }
}