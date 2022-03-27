
function preload(){
  //pre-load images
  pathImage=loadImage("path.png");
  boy_running=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY=4;
  path.scale=1.2;
  
  boy=createSprite(180,340,30,30)
  boy.addAnimation("running",boy_running);
  boy.scale=0.05

  boundaryLeft=createSprite(40,200,10,400)
  boundaryLeft.visible=false
  boy.collide(boundaryLeft)
  
  boundaryRight=createSprite(360,200,10,400)
  boundaryRight.visible=false
  boy.collide(boundaryRight)
  
}

function draw() {
  background(0)
  if (path.y>400){
    path.y=height/2;
  }
  boy.MouseX

 drawSprites();
}
