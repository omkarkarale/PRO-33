const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var leftboyImg, rightboyImg, boyImg, boy, bgImg;
function preload(){
  bgImg = loadImage("snow1.jpg");
  boyImg = loadAnimation("left/left1.png")
  leftboyImg = loadAnimation("left/left1.png", "left/left2.png", "left/left3.png", "left/left4.png", "left/left5.png", "left/left6.png");
  rightboyImg = loadAnimation("right/right1.png", "right/right2.png", "right/right3.png", "right/right4.png", "right/right5.png", "right/right6.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  boy = createSprite(400, 300, 50, 50);
  boy.addAnimation("boy", boyImg);
  ground = createSprite(width/2, height-10, width, 10);
  ground.visible = false;
  snow = new Snow();
}

function draw() {
  background(bgImg);  
  Engine.update(engine);
  drawSprites();
  snow.display();
  boy.collide(ground);
  console.log(boy.y);
  if(keyDown("space") && boy.y > 290){
    boy.y -= 27
  }
  boy.y += 5;
}

function keyPressed(){
  if(keyCode === 37){
    boy.addAnimation("leftboy", leftboyImg);
    boy.changeAnimation("leftboy");
    boy.velocityX = -2;
  }
  if(keyCode === 39){
    boy.addAnimation("rightboy", rightboyImg);
    boy.changeAnimation("rightboy");
    boy.velocityX = 2;
  }
}
