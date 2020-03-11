import Ball from "./ball";
import Paddle from "./paddle";
import Block from "./block";
document.addEventListener("DOMContentLoaded", ()=>{
  const FPS = 70; ///FRAMES PER SECOND
  let canvas = document.getElementById("my-canvas");
  let context = canvas.getContext("2d");
  ///SET UP GAME LOOP CALLS IT EVERY THIRTIETH OF A SECOND
  const paddle = new Paddle(context);
//  const block = new Block(context);

  //block.drawBlocks();

  const bricksArray = []
  for(let i = 0; i < 4; i++){
    const rowArray = [];
    for(let j = 0; j < 10; j++){
      rowArray.push(new Block(context, 50 * (j + 1), 50 * (i + 1)))
    }

    bricksArray.push(rowArray);
  }


  const drawBlocks = () =>{
     bricksArray.forEach(row => {
       row.forEach(block => {
         if(block.shown){
           block.draw();
         } 

        
       })
    }) 
  }


  const ball = new Ball(context, paddle, bricksArray);
  ball.startMoving();

  setInterval(update, 1000 / FPS) /// takes handler and TIMEOUT --- how often it calls it

  function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    paddle.draw();
    drawBlocks();
    paddle.movePaddle();
    ball.collision();
  }
})
