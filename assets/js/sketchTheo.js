const TICKET_WIDTH = 548;
const TICKET_HEIGHT = 235;
const CORNERS = 10;
const REGEX = /1\)/gm

let squareSize;
let rows;
let columns;
let squareNumber;
let palette;

function setup() {
  // reset variable values
  squareNumber = floor(stopData.traffic / 1000000);
  palette = [];
  squareSize = ceil(height/squareNumber);
  rows = squareNumber;
  columns = ceil(width/squareSize);

  // Setup canvas property
  createCanvas(TICKET_WIDTH, TICKET_HEIGHT);
  angleMode(DEGREES);
  ellipseMode(CORNERS);
  noStroke();
  background('rgba(255,255,255)')

  // create color palette from connections
  if (stopData.connection.length > 1) {
    for (let i = 0; i < stopData.connection.length; i++) {
      palette.push(lineColors[stopData.connection[i]])
    }
  } else {
    for (let i = 0.2; i <= 1; i = i+0.2) {
      let color = lineColors[stopData.connection[0]].replace(REGEX, i + ')')
      palette.push(color)
    }
  }

  // draw
  grid()
}

const grid = () => {
  push();
  for (let x = 0; x < columns; x++) {
    push();
    for (let y = 0; y < rows; y++) {
      square();
      quadrants();
      translate(0, squareSize);
    }
    pop();
    translate(squareSize, 0);
  }
  pop();
};

const square = () => {
  const layerColor = getRandomFromPalette();
  push();
  fill(layerColor);
  noStroke();
  rect(0, 0, squareSize, squareSize);
  pop();
};

const quadrants = () => {
  push();
  translate(squareSize / 2, squareSize / 2);

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
  const shapeSize = squareSize * 0.3;
  const offset = -(squareSize / 2);

  push();
  fill(layerColor);
  noStroke();
  arc(offset, offset, shapeSize, shapeSize, 0, 90);
  pop();
};

const mediumCircle = () => {
  const layerColor = getRandomFromPalette();
  const shapeSize = squareSize * 0.75;
  const offset = -(squareSize / 2);

  push();
  fill(layerColor);
  noStroke();
  arc(offset, offset, shapeSize, shapeSize, 0, 90);
  pop();
};

const largeCircle = () => {
  const layerColor = getRandomFromPalette();
  const shapeSize = squareSize;
  const offset = -(squareSize / 2);

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
  const rando = floor(random(0, palette.length));
  return palette[rando];
}
