var fixed,moving
var sofa,tv,bat,desk



function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  fixed.shapeColor="green"
  moving=createSprite(600, 200, 70, 50);
  moving.shapeColor="green"
  sofa=createSprite(100, 100, 50, 50);
  sofa.shapeColor="lightblue"
  tv=createSprite(100, 200, 70, 50);
  tv.shapeColor="yellow"
  bat=createSprite(100, 300, 50, 50);
bat.shapeColor="cyan"
  desk=createSprite(200, 100, 50, 50);
  desk.shapeColor="brown"
}

function draw() {
  background(0);  
  moving.x=mouseX
  moving.y=mouseY
  console.log(moving.x-fixed.x)
 if(isTouching(moving,desk)){
  desk.shapeColor="red"
  moving.shapeColor="red"
 }
 else{
  desk.shapeColor="brown"
  moving.shapeColor="green"
 }
 if(isTouching(moving,bat)){
  bat.shapeColor="red"
  moving.shapeColor="red"
 }
 else{
  bat.shapeColor="cyan"
  moving.shapeColor="green"
 }
  drawSprites();
}

