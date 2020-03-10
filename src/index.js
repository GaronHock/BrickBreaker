
document.addEventListener("DOMContentLoaded", ()=>{
  const FPS = 70; ///FRAMES PER SECOND
  let canvas = document.getElementById("my-canvas");
  let context = canvas.getContext("2d");
  ///SET UP GAME LOOP CALLS IT EVERY THIRTIETH OF A SECOND
  setInterval(update, 1000 / FPS) /// takes handler and TIMEOUT --- how often it calls it
  //SET THE BALL STARTING POSITION
  let ballX = canvas.width / 2;
  let ballY = canvas.height / 2;
  let ballSize = 30;

  //MAKE RECTANGLE AND STARTING POSITION;
  let rectangleX = 250;
  let rectangleY = 570;
  let rectangleWidth = 100;
  let rectangleHeight = 25;


  //MAKE BLOCKS AND STARTING POSITION
  let blockX = 50;
  let blockY = 30;
  let blockWidth = 50;
  let blockHeight = 50;

  const array = []
  let i = 0
  const squareObject = {}
  while(i < 40){
    context.beginPath();
    context.rect(blockX, blockY, blockWidth, blockHeight);
      function get_random_color() {
        function c() {
          var hex = Math.floor(Math.random() * 256).toString(16);
          return ("0" + String(hex)).substr(-2); 
        }
        return "#" + c() + c() + c();
      }
    context.fillStyle = get_random_color();
    context.fill();
    context.stroke();
    Object.assign(squareObject, context);
      if (blockX >= 500) {
        blockX = 0;
        blockY += blockHeight;
      }
    i += 1
    blockX += blockWidth;
  }

  
  //MAX, MIN
  let ballXVelocity = Math.floor(Math.random() * 150 + 125) / FPS; ///Math.random creates a value between zero and one
  //gives me a number between 100, 25
  let ballYVelocity = Math.floor(Math.random() * 150 + 125) / FPS;
  //random ball direction
  if (Math.floor(Math.random() * 2) == 0) {
    ballXVelocity = -ballXVelocity;
  }
  if (Math.floor(Math.random() * 2) == 0) {
    ballYVelocity = -ballYVelocity;
  }
  ///UPDATE FUNCTION
  function update() {

    ballX += ballXVelocity;
    ballY += ballYVelocity;


    context.beginPath();
    context.rect(rectangleX, rectangleY, rectangleWidth, rectangleHeight);
    context.fillStyle = 'red';
    context.fill();
    context.stroke();

    
    context.beginPath();
    context.arc(ballX, ballY, ballSize, 0, 2 * Math.PI, false);
    context.fillStyle = 'green';
    context.fill();
    context.lineWidth = 5;
    context.stroke();



    if (ballX - ballSize + (ballSize / 1.25 ) < ballSize /2 && ballXVelocity < 0) {
      ballXVelocity = -ballXVelocity;
      console.log(rectangleX)
      console.log(ballY)
    }
    if (ballX + ballSize + (ballSize / 1.25) > canvas.width + ballSize && ballXVelocity > 0) {
      ballXVelocity = -ballXVelocity;
      console.log(rectangleX)
      console.log(ballY)
    }
    if (ballY - ballSize + (ballSize / 1.25) < ballSize / 2 && ballYVelocity < 0) {
      ballYVelocity = -ballYVelocity;
      console.log(rectangleX)
      console.log(ballY)
    }

    if ((ballX > rectangleX && ballX + ballSize - ballSize / 2 < rectangleX + rectangleWidth) && (ballY >= rectangleY - rectangleHeight) && ballYVelocity > 0){  // && ballY > rectangleY + rectangleHeight  && ballYVelocity > 0
      ballYVelocity = - ballYVelocity;
    }




    if (key.isPressed("left") && rectangleX > 0){
      console.log(rectangleX)
      console.log(canvas.width)
      rectangleX -= 250 / FPS;
    }

    if (key.isPressed("right") && rectangleX < 500) {
      rectangleX += 250 / FPS;
      console.log(rectangleX)
      console.log(canvas.width)
    }
  }
})












///DRAWTING ON WINDOW STEPS BELOW 

// undefined
// const ctx = canvasEl.getContext("2d")
// undefined
// hello.draw(ctx)
// VM3875: 1 Uncaught ReferenceError: hello is not defined
// at<anonymous>: 1: 1
//   (anonymous) @VM3875: 1
// const hello = new MovingObject({
//   pos: [30, 30],
//   vel: [10, 10],
//   radius: 5,
//   color: "#00FF00"
// });
// undefined
// hello.draw(ctx)
// undefined
// hello.move(ctx)
// undefined
// hello.move(ctx)
// undefined
// hello.draw(ctx)
// undefined
// hello.draw(ctx)
// undefined
// hello.move(ctx)
// undefined
// hello.move(ctx)
// undefined
// hello.move(ctx)
// undefined
// hello.draw(ctx)
// undefined