const game = new Game();

function preload() {
  player.img = loadImage("/assets/character-down.png");
  treasure.img = loadImage("/assets/treasure.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
}

function draw() {
  clear();
  game.drawGrid();
  player.draw();
  //player.keyPressed();
  treasure.drawTreasure();
}

function keyPressed() {
  player.keyPressed();
}

const player = new Player(0, 0); // (0,0) = Initial position (col, row)
// player.moveDown(); // Increase by 1 the value of player.row
// player.moveDown(); // Increase by 1 the value of player.row
// player.moveRight(); // Increase by 1 the value of player.col
// console.log(player.col, player.row); // => 1,2

const treasure = new Treasure();
