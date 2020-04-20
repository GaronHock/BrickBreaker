import Ball from "./ball";
import Paddle from "./paddle";
import Block from "./block";

document.getElementById("start-button").addEventListener("click", ()=>{
  document.getElementById("start-page-div").style.display = "none";
  const FPS = 70; ///FRAMES PER SECOND
  let canvas = document.getElementById("my-canvas");
  canvas.style.display = "flex"
  let context = canvas.getContext("2d");//SETTING 2D DIMENSIONS
  //  let image = new Image();
  //  image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Hubble_ultra_deep_field_high_rez.jpg/600px-Hubble_ultra_deep_field_high_rez.jpg'

  ///SET UP GAME LOOP CALLS IT EVERY THIRTIETH OF A SECOND

  const paddle = new Paddle(context); ///SETTING UP PADDLE INSTANCE
// const block = new Block(context);
  //block.drawBlocks();

  const bricksArray = [] ///CREATING ARRAY OF BRICK INSTANCES
  for (let i = 0; i < 4; i++){
    const rowArray = [];
    for (let j = 0; j < 10; j++){
      rowArray.push(new Block(context, 50 * (j + 1), 50 * (i + 1)))
    }
    //ABOVE I AM USING THE INDEX OF J AND I TO ALSO CHANGE THE POSITIONING OF THE 
    //SQUARE BASED ON THE INDEX, 2D ARRAY OF ROWS AND COLUMNS
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

  ///ABOVE I AM DRWAING EACH BRICK. CALLING ON THE BRICK INSTANCE


  const ball = new Ball(context, paddle, bricksArray);

  ///CREATING NEW BALL AND PASSING IN THE CONTEXT THE PADDLE AND THE BRICS ARRAY
  //ALL OF THESE ARE NECESSARY BECAUSE THE COLLISION METHOD
  ball.startMoving();




  const refreshIntervalId = setInterval(update, 1000 / FPS);

 
    /// takes handler and TIMEOUT --- how often it calls it

  //CALLING THE FUNCTION AND CLEARING CANVAS EVERYTIME IT IS CALLED

   function update() {
    console.log(ball.ballX)
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    paddle.draw();
    drawBlocks();
    paddle.movePaddle();
    ball.collision();
    if (ball.ballY > 600) {
      clearInterval(refreshIntervalId);
    }
  }
})
