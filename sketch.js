var ball;
function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,30,30);
  
}

function draw() 
{
  background("red");

  if(keyIsDown(RIGHT_ARROW)){
    ball.position.x = ball.position.x + 3;
  }

  if(keyIsDown(LEFT_ARROW)){
    ball.position.x = ball.position.x - 3;
  }

  if(keyIsDown(UP_ARROW)){
    ball.position.y = ball.position.y - 3;
  }

  if(keyIsDown(DOWN_ARROW)){
    ball.position.y = ball.position.y + 3;
  }
  drawSprites();
}




