//import paddle from './paddle';
class Ball{
  constructor(context, paddle, blockArray){
  this.radius = 30;
  this.ballX = 300;
  this.ballY = 300;
  this.color = "red";
  this.ballXVelocity = Math.floor(Math.random() * 150 + 125) / 70; //FPS = 70 FRAMES PER SECOND
  this.ballYVelocity = Math.floor(Math.random() * 150 + 125) / 70; //FPS
  this.context = context;
  this.paddle = paddle;
  this.blockArray = blockArray;
  }

  
  draw() {
    this.ballX += this.ballXVelocity;
    this.ballY += this.ballYVelocity;
    this.context.beginPath();
    this.context.arc(this.ballX, this.ballY, this.radius, 0, 2 * Math.PI, false);
    this.context.fillStyle = this.color;
    this.context.fill();
    this.context.lineWidth = 5;
    this.context.stroke();
  }

  startMoving() {
    if (Math.floor(Math.random() * 2) == 0) {
      this.ballXVelocity = -this.ballXVelocity;
    }
    if (Math.floor(Math.random() * 2) == 0) {
      this.ballYVelocity = -this.ballYVelocity;
    }
  }

  randomDirection(){
    if (Math.floor(Math.random() * 2) == 0) {
      this.ballXVelocity = -this.ballXVelocity;
    }
    if (Math.floor(Math.random() * 2) == 0) {
      this.ballYVelocity = -this.ballYVelocity;
    }
  }
  collision() {
    if (this.ballX - this.radius + (this.radius / 1.25) < + this.radius / 2 && this.ballXVelocity < 0) {
      this.ballXVelocity = -this.ballXVelocity;
    }
    if (this.ballX + this.radius + (this.radius / 1.25) > 600 +  this.radius && this.ballXVelocity > 0) {
      this.ballXVelocity = -this.ballXVelocity;
    }
    if (this.ballY - this.radius + (this.radius / 1.25) < this.radius / 2 && this.ballYVelocity < 0) {
      this.ballYVelocity = -this.ballYVelocity;
    }
    if ((this.ballX > this.paddle.rectangleX && 
      this.ballX + this.radius - (this.radius / 2) < 
      this.paddle.rectangleX + this.paddle.rectangleWidth) && 
      (this.ballY >= this.paddle.rectangleY - this.paddle.rectangleHeight) 
      && this.ballYVelocity > 0) { 
      this.ballYVelocity = - this.ballYVelocity;
    }

    // for(let i = 0; i < this.blockArray.length; i++){
    //   console.log(this.blockArray[i]);
    //   debugger;
    // }

    [].concat(...this.blockArray).forEach(block =>{
      if((this.ballX > block.blockX) && this.ballX < block.blockX + block.blockWidth
      && this.ballY > block.blockY && this.ballY < block.blockY + block.blockHeight && this.ballYVelocity !== 0 &&
      block.shown ){
  
        block.shown = false;
        this.ballYVelocity = -this.ballYVelocity;
      }

    });

  }
}


export default Ball;






// let ballX = canvas.width / 2;
// let ballY = canvas.height / 2;
// let ballSize = 30;

// let ballXVelocity = Math.floor(Math.random() * 150 + 125) / FPS; ///Math.random creates a value between zero and one
// //gives me a number between 100, 25
// let ballYVelocity = Math.floor(Math.random() * 150 + 125) / FPS;
// //random ball direction
// if (Math.floor(Math.random() * 2) == 0) {
//   ballXVelocity = -ballXVelocity;
// }
// if (Math.floor(Math.random() * 2) == 0) {
//   ballYVelocity = -ballYVelocity;
// }


