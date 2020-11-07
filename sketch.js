
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var bananaGroup;
var obstacleGroup;
var survivalTime = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var ground;
var groundImage;
var haha;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  
  sprite_0 = loadImage("sprite_0.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 groundImage = loadImage("ground.png");
 
}



function setup() {
ground = createSprite(400,270,200,20);
ground.addImage("ground",groundImage);
ground.scale = 2.7;
ground.x = ground.width/2;
  
monkey = createSprite(100,340,20,20)
monkey.addAnimation("running",monkey_running);
monkey.scale = 0.1;
monkey.setCollider("rectangle",0,0,400,monkey.height);
monkey.debug = false;
  
haha = createSprite(200,355,800,20)
haha.x = haha.width/2;

}

function draw() {
  createCanvas(500,500);
  background("white");
  fill("white");
  text("Score : " + score,200,40);
  textSize(20);
  
  monkey.collide(haha);
  haha.visible = false;
  
  stroke("black");
  
  fill("red");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival time :" + survivalTime,120,70)
  
  
  stroke("blue");
  fill("green");
  text("NOTE :collect bananas and avoid obstacles",20,30);
  textSize(10);
  
  
  if(gameState === PLAY){
    ground.velocityX = -3;
    
    
  if(keyDown("space")&& monkey.y>=235) {
        monkey.velocityY = -12;
        
  }
    monkey.velocityY = monkey.velocityY + 0.8;
  }

  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  spawnBananas();
  spawnObstacles();
  
  drawSprites();
}


function spawnBananas() {
  if (frameCount%80 === 0) {
    banana = createSprite(400,100,40,10);
    banana.y = Math.round(random(150,300));
    banana.addImage(bananaImage);
    banana.scale = 0.06;
    banana.velocityX = -4;
    banana.depth = monkey.depth;
    banana.depth = monkey.depth - 1;
     
    }
}

function spawnObstacles(){
  if(frameCount%200 === 0){
  obstacle = createSprite(400,330,40,20);
  obstacle.x = Math.round(random(300,400));
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -3;
  obstacle.depth = monkey.depth;
  obstacle.depth = monkey.depth-1;
  obstacle.scale = 0.1;   
}
}

//end

