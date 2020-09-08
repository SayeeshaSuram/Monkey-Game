var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var bananaGroup;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(400, 400);
  background("black");
  
  monkey = createSprite(200,310, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400,350,900,10);
  console.log(ground.x);
  
  bananaGroup = createGroup();
  
  
  
  score = 0;
}


function draw() {
  background("white")
  
  text("Score: "+ score, 300,50);
  score = score + Math.round(getFrameRate()/60);
  
    ground.velocityX = -4;
  if(ground.x<0){
    ground.x=ground.width/2;
  }
    
  monkey.collide(ground);
                 
  if(keyDown("space")&& monkey.y < 400) {
        monkey.velocityY = -12;
    }
  
 monkey.velocityY = monkey.velocityY + 0.8
    
  spawnBananas();
  drawSprites();
}

function spawnBananas() {
  if (frameCount % 60 === 0) {
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
  
    banana.lifetime = 200;

    bananaGroup.add(banana);
  }
}