class Game {
  drawGrid() {
    // Iteration 1
    // Draw the grid
    // https://p5js.org/reference/#/p5/line
    for (let x = 0; x <= WIDTH; x += SQUARE_SIDE) {
      line(x, 0, x, HEIGHT);
    }
    for (let y = 0; y <= HEIGHT; y += SQUARE_SIDE) {
      line(0, y, WIDTH, y);
    }
  }
}

class Player {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.img;
  }

  moveLeft() {
    this.col -= SQUARE_SIDE;
  }
  moveRight() {
    this.col += SQUARE_SIDE;
  }
  moveUp() {
    this.row -= SQUARE_SIDE;
  }
  moveDown() {
    this.row += SQUARE_SIDE;
  }

  draw() {
    image(this.img, this.col, this.row, SQUARE_SIDE, SQUARE_SIDE);
  }

  keyPressed() {
    clear();
    //if (keyIsDown(40)) this.moveDown();
    //if (keyIsDown(38)) this.moveUp();
    if (keyCode === 40) this.moveDown();
    if (keyCode === 39) this.moveRight();
    if (keyCode === 38) this.moveUp();
    if (keyCode === 37) this.moveLeft();
    console.log(player.col, player.row);
  }
}

let counter = 0;

class Treasure{
  constructor (col , row){
    this.col = col;
    this.row = row;
    this.img;
  }
  setRandomPosition(){
    this.col = Math.floor(Math.random()*10)*SQUARE_SIDE;
    this.row = Math.floor(Math.random()*10)*SQUARE_SIDE;
  };

  drawTreasure(){
    if (frameCount%150 === 0) {
      counter -= 1;
      this.setRandomPosition();
    }
    if (this.col === player.col && this.row === player.row) {
      frameCount = 0;
      counter += 1;
      this.setRandomPosition();
    }
    document.querySelector("h2 span").innerHTML = counter;

    image(this.img, this.col, this.row, SQUARE_SIDE , SQUARE_SIDE)
  }
} 