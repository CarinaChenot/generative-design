let SQUARE_SIZE;
const TICKET_WIDTH = 548;
const TICKET_HEIGHT = 235;
let ROWS;
let COLUMNS;
const CORNERS = 10;
let PALETTE;
let REGEX = /1\)/gm

function setup() {
  // reset variable values
  PALETTE = [];
  SQUARE_SIZE = ceil(height/stopData.connection.length)
  ROWS = stopData.connection.length;
  COLUMNS = ceil(width/SQUARE_SIZE)
  console.log(COLUMNS)

  // Setup canvas property
  createCanvas(TICKET_WIDTH, TICKET_HEIGHT);
  angleMode(DEGREES);
  ellipseMode(CORNERS);
  noStroke();
  background('rgba(255,255,255)')

  // create color palette from connections
  if (stopData.connection.length > 1) {
    for (let i = 0; i < stopData.connection.length; i++) {
      PALETTE.push(lineColors[stopData.connection[i]])
    }
  } else {
    for (let i = 0.2; i <= 1; i = i+0.2) {
      let color = lineColors[stopData.connection[0]].replace(REGEX, i + ')')
      PALETTE.push(color)
    }
  }

  // draw
  grid()
}

const grid = () => {
  push();
  for (let x = 0; x < COLUMNS; x++) {
    push();
    for (let y = 0; y < ROWS; y++) {
      square();
      quadrants();
      translate(0, SQUARE_SIZE);
    }
    pop();
    translate(SQUARE_SIZE, 0);
  }
  pop();
};

const square = () => {
  const layerColor = getRandomFromPalette();
  push();
  fill(layerColor);
  noStroke();
  rect(0, 0, SQUARE_SIZE, SQUARE_SIZE);
  pop();
};

const quadrants = () => {
  push();
  translate(SQUARE_SIZE / 2, SQUARE_SIZE / 2);

  for (let i = 0; i < CORNERS; i++) {
    rotate(90);
    largeCircle();
    mediumCircle();
    smallCircle();
  }
  pop();
};

const smallCircle = () => {
  const layerColor = getRandomFromPalette();
  const shapeSize = SQUARE_SIZE * 0.3;
  const offset = -(SQUARE_SIZE / 2);

  push();
  fill(layerColor);
  noStroke();
  arc(offset, offset, shapeSize, shapeSize, 0, 90);
  pop();
};

const mediumCircle = () => {
  const layerColor = getRandomFromPalette();
  const shapeSize = SQUARE_SIZE * 0.75;
  const offset = -(SQUARE_SIZE / 2);

  push();
  fill(layerColor);
  noStroke();
  arc(offset, offset, shapeSize, shapeSize, 0, 90);
  pop();
};

const largeCircle = () => {
  const layerColor = getRandomFromPalette();
  const shapeSize = SQUARE_SIZE;
  const offset = -(SQUARE_SIZE / 2);

  push();
  fill(layerColor);
  arc(offset, offset, shapeSize, shapeSize, 0, 90);
  pop();
};

function randomSelectTwo() {
  const rando = random(1);
  if (rando > 0.5) return true;
  return false;
}

function getRandomFromPalette() {
  const rando = floor(random(0, PALETTE.length));
  return PALETTE[rando];
}
