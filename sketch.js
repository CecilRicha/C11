var ground, ground_ing
var trex ,trex_running;
var dummyGround
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  ground_ing = loadImage ("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite (200,150,50,30);
  trex.addAnimation("running",trex_running)
  trex.scale = 0.75

// create a ground
  ground = createSprite (300,185,600,60);
  ground.addImage (ground_ing);
  ground.velocityX = -2
 // ground.debug = true

// create dummyGround
dummyGround = createSprite(300,190,600,10)
dummyGround.visible = false
}

function draw(){
  background("white")
if (ground.x < 0){
  ground.x = 300;
}

// for jumping
if (keyDown("SPACE") && (trex.isTouching (ground))){
  trex.velocityY = -7

}
trex.velocityY = trex.velocityY + 0.25
trex.collide (dummyGround);

  drawSprites()
}
