var box = createSprite(200,200,200,200)
box.shapeColor("grey")

function setup() {
  createCanvas(400,400);
  
}

function draw() {
  background("yellow");

 
if(keyIsDown(UP_ARROW)){
  background("red")
}

if(keyIsDown(DOWN_ARROW)){
  background("blue")
}

if(keyIsDown(LEFT_ARROW)){
  background("black")
}

if(keyIsDown(RIGHT_ARROW)){
  background("brown")
}
  drawSprite();
}




