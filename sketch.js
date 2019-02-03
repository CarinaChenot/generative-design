const SQUARE_SIZE = 80;
const TICKET_WIDTH = 548;
const TICKET_HEIGHT = 235;
const ROWS = 3;
const COLUMNS = 8;
const CORNERS = 4;
let PALETTE = [];

function setup() {
  createCanvas(TICKET_WIDTH, TICKET_HEIGHT);
  noLoop();
  angleMode(DEGREES);
  ellipseMode(CORNERS);
  noStroke();

  PALETTE = [
    color(255, 192, 0), // pink
    color(41, 73, 146), // blue
    color(213, 201, 0), // blue
  ];
}

function draw() {
  grid();
}
