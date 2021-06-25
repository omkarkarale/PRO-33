const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var leftboyImg, rightboyImg, boyImg, boy, bgImg;
function preload(){
  bgImg = loadImage("snow1.jpg");
  boyImg = loadAnimation("left/left1.PNG")
  leftboyImg = loadAnimation("left/left1.PNG", "left/left2.PNG", "left/left3.PNG", "left/left4.PNG", "left/left5.PNG", "left/left6.PNG");
  rightboyImg = loadAnimation("right/right1.PNG", "right/right2.PNG", "right/right3.PNG", "right/right4.PNG", "right/right5.PNG", "right/right6.PNG");
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
