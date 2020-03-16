class Block{
  constructor(context, blockX, blockY){
    this.blockX = blockX;
    this.blockY = blockY;
    this.blockWidth = 50;
    this.blockHeight = 50;
    this.context = context;
    this.shown = true;
}
draw(){
    this.context.beginPath();
    this.context.rect(this.blockX, this.blockY, this.blockWidth, this.blockHeight);
    function get_random_color() {
      function c() {
        var hex = Math.floor(Math.random() * 256).toString(16);
        return ("0" + String(hex)).substr(-2);
      }
      return "#" + c() + c() + c();
    }
    this.context.fillStyle = get_random_color();
    this.context.fill();
    this.context.stroke();
    }
}

export default Block;








