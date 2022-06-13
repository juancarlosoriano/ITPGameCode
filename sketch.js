//* Declare variables *//
let gameChar_x;
let gameChar_y;
let floorPos_y;
let scrollPos;

function setup() {
  //* Initialize defaults *//
  createCanvas(1024, 576);
  floorPos_y = (height * 3) / 4;
  gameChar_x = width / 2;
  gameChar_y = floorPos_y + 20;
}

function draw() {
  //* Draw background *//
  background(100, 155, 255);

  //* Draw floor *//
  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, width, height / 4);

  //! Freeze frame coordinates //
  push();

  //! Unfreeze frame coordinates //
  pop();
}
