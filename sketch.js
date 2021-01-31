var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime=0;
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
    
  monkey=createSprite(80,290,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(600,350,1200,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  bananaGroup = new Group();
  
}


function draw() {
  background("white");
  stroke("black");
  textSize(15);
  text("SurvivalTime: "+ survivalTime, 450,50);
  text("Score: "+ score, 200,50);

  
  survivalTime = survivalTime + Math.round(getFrameRate()/60);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
   
  
  console.log(monkey.velocityY);
  monkey.velocityY=monkey.velocityY+0.8;
  
  
  createBananaGroup();
  createObstacleGroup();
  if(bananaGroup.isTouching(monkey)){
    score=score+10;
  }
  monkey.collide(ground);

  drawSprites();

  
}

function createBananaGroup(){
  if (frameCount % 80 === 0){
    var banana=createSprite(580,100,20,20);
    banana.y=Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-4;
    banana.lifetime=150;
    bananaGroup.add(banana);
  } 
}

function createObstacleGroup(){
  if(frameCount%300===0){
    var obstacle=createSprite(580,310,20,20);
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-4;
    obstacle.lifetime=150;
  }
  
}
