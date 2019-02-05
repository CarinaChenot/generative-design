const TICKET_WIDTH = 548;
const TICKET_HEIGHT = 235;
const CORNERS = 4;
const REGEX = /1\)/gm;

let font;

let squareSize;
let rows;
let columns;
let squareNumber;
let palette;

function setup() {
  // reset variable values
  squareNumber = floor(stopData.traffic / 1000000);
  if (squareNumber > 20) squareNumber = 20;
  palette = [];
  squareSize = ceil(height / squareNumber);
  rows = squareNumber;
  columns = ceil(width / squareSize);

  // Setup canvas property
  createCanvas(TICKET_WIDTH, TICKET_HEIGHT);
  angleMode(DEGREES);
  ellipseMode(CORNERS);
  noStroke();
  background('rgba(255,255,255)');
  font = loadFont('assets/fonts/ParisineOfficeStd-Bold.otf');

  // create color palette from connections
  if (stopData.connection.length > 1) {
    for (let i = 0; i < stopData.connection.length; i++) {
      palette.push(lineColors[stopData.connection[i]]);
    }
  } else {
    for (let i = 0.2; i <= 1; i = i + 0.2) {
      let color = lineColors[stopData.connection[0]].replace(REGEX, i + ')');
      palette.push(color);
    }
  }

  // draw
  grid();

  //overlay info
  overlay();
}

const grid = () => {
  push();
  for (let x = 0; x < columns; x++) {
    push();
    for (let y = 0; y < rows; y++) {
      if (randomSelectTwo()) square();
      quadrants();
      translate(0, squareSize);
    }
    pop();
    translate(squareSize, 0);
  }
  pop();
}

function keyTyped () {
  if (key === 'r') {
    setup()
  }
}
