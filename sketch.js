
var garden;
var cat1;
var mouse1;
function preload() {
grImg=loadImage("garden.png");
cat1_running=loadImage("cat1.png","cat2.png","cat3.png","cat4.png")
 mouse1_running=loadImage("mouse1.png",);  
}

function setup(){
createCanvas(windowWidth,windowHeight);
  
  garden=createSprite(100,200,10,10);
  garden.addImage(grImg);
  garden.scale=1;
  
  cat1=createSprite(500,420,10,10);
  cat1.addImage("running",cat1_running);
  cat1.scale=0.1;

  mouse1=createSprite(100,420,10,10);
  mouse1.addImage("running",mouse1_running)
  mouse1.scale=0.1;
  
  


}

function draw() {
background("black");

if(cat1.x=mouse1.x<(cat1.width-mouse1.width)/5){
    cat1.velocityX=0;
    cat1.addAnimation("cat4.png")
    cat1.changeAnimation("cat4.png");
    mouse1.addAnimation("mouse4.png")
    mouse1.scale=0.2;
    mouse1.changeAnimation("mouse4.png")

}






drawSprites();
}

function keyPressed(){

    if(keyCode === LEFT_ARROW){
      cat1.velocityX=-5;
      cat1.addAnimation("cat1_running",cat4.png);
      cat1.changeAnimation("cat1_running");

      mouse1.addAnimation("mouse1_running",mouse4.png);
      mouse1.frameDelay=25;
      mouse1.changeAnimation("mouse1_running")

    

    }




}

 
