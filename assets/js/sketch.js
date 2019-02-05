const TICKET_WIDTH = 548;
const TICKET_HEIGHT = 235;
const CORNERS = 10;
const REGEX = /1\)/gm

let font

let squareSize;
let rows;
let columns;
let squareNumber;
let palette;


function setup() {
  // reset variable values
  squareNumber = floor(stopData.traffic / 1000000);
  if (squareNumber > 20) squareNumber = 20
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
  font = loadFont('assets/fonts/ParisineOfficeStd-Bold.otf');
  
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

  //overlay info
  overlay()
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

const overlay = () => {
  // Consts
  let overlayOpacity = 1000;
  

  // Text
  textSize(20);
  textFont(font); 
  textFont('ParisineOfficeStd-Bold'); 
  textStyle(BOLD); 
  textAlign(LEFT, BOTTOM);
  // Stop name
  fill(7, 1, 99)
  blendMode(OVERLAY)
  text(stopData.name, 25, height-25);
  blendMode(NORMAL)
  fill(7, 1, 99, overlayOpacity)
  text(stopData.name, 25, height-25);
  
  // Number
  const number = Math.floor(random(99999))
  textAlign(LEFT, TOP);
  textSize(40);
  rotate(90);
  fill(7, 1, 99)
  blendMode(OVERLAY)
  text(number, 25, 25-width);
  blendMode(NORMAL)
  fill(7, 1, 99, overlayOpacity)
  text(number, 25, 25-width);
  rotate(-90)
  
  //Image
  loadImage('assets/img/t-img.png', (tImg) => {
    blendMode(OVERLAY)
    tint(255, overlayOpacity)
    image(tImg, 25, 25, 56, 90);
    blendMode(NORMAL)
    tint(255, overlayOpacity)
    image(tImg, 25, 25, 56, 90);
  })
  
}