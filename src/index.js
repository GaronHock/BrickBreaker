// import MovingObject from './movingObject';
// console.log("Webpack is working!")
// window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", ()=>{
  const FPS = 30; ///FRAMES PER SECOND
  let ballSize = 30;
  let ballX
  let ballY;
  let ballXVelocity
  let ballYVelocity;
  let canvas;
  let context;
  debugger;
  canvas = document.getElementById("my-canvas");
  context = canvas.getContext("2d");


  ///SET UP GAME LOOP CALLS IT EVERY THIRTIETH OF A SECOND
  setInterval(update, 1000 / FPS) /// takes handler and TIMEOUT --- how often it calls it

  //SET THE BALL STARTING POSITION

  ballX = canvas.width / 2;
  ballY = canvas.height / 2;



  ballXVelocity = Math.floor(Math.random() * 76 + 25) / FPS; ///Math.random creates a value between zero and one
  ballYVelocity = Math.floor(Math.random() * 76 + 25) / FPS;

  //random ball direction
  if (Math.floor(Math.random() * 2) == 0) {
    ballXVelocity = -ballXVelocity;
  }
  if (Math.floor(Math.random() * 2) == 0) {
    ballYVelocity = -ballYVelocity;
  }

  ///UPDATE FUNCTION
  function update() {
    //move the ball
    ballX += ballXVelocity;
    ballY += ballYVelocity;
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "yellow";
    context.fillRect(ballX - ballSize / 2, ballY - ballSize / 2, ballSize, ballSize);
    if (ballX - ballSize / 2 < 0 && ballXVelocity < 0) {
      ballXVelocity = -ballXVelocity;
    }
    if (ballX + ballSize / 2 > canvas.width && ballXVelocity > 0) {
      ballXVelocity = -ballXVelocity;
    }
    if (ballY - ballSize / 2 < 0 && ballYVelocity < 0) {
      ballYVelocity = -ballYVelocity;
    }
    if (ballY + ballSize / 2 > canvas.height && ballYVelocity > 0) {
      ballYVelocity = -ballYVelocity;
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