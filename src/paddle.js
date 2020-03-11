class Paddle{
  constructor(context){
    this.rectangleX = 250;
    this.rectangleY = 570;
    this.rectangleWidth = 100;
    this.rectangleHeight = 25;
    this.color = "red";
    this.context = context;
  }


  draw(){
     this.context.beginPath();
     this.context.rect(this.rectangleX, this.rectangleY, this.rectangleWidth, this.rectangleHeight);
     this.context.fillStyle = this.color;
     this.context.fill();
     this.context.stroke();
  }

  movePaddle(){
    if (key.isPressed("left") && this.rectangleX > 0) {
      //console.log(rectangleX)
   //   console.log(canvas.width)
      this.rectangleX -= 250 / 70;
    }

    if (key.isPressed("right") && this.rectangleX < 500) {
      this.rectangleX += 250 / 70;
    //  console.log(rectangleX)
    //  console.log(canvas.width)
    }
  }
}

export default Paddle;