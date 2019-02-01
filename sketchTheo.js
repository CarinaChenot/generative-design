// Colors
const lineColors = {
  1: 'rgba(255,192,0,1)',
  2: 'rgba(41, 73, 146,1)',
  3: 'rgba(162 153, 23, 1)',
  4: 'rgba(190, 66, 142, 1)',
  5: 'rgba(240, 144, 67, 1)',
  6: 'rgba(133, 193, 142, 1)',
  7: 'rgba(242,  164, 183, 1)',
  8: 'rgba(204, 172, 207, 1)',
  9: 'rgba(213, 201, 0, 1)',
  10: 'rgba(228, 178, 40, 1)',
  11: 'rgba(140, 94, 36, 1)',
  12: 'rgba(0, 127, 73, 1)',
  13: 'rgba(153, 211, 222, 1)',
  14: 'rgba(98, 33, 128, 1)'
};

const stops = {
  nation: {
    nbExit: 6,
    connections: [1, 2, 6, 9],
    traffic: 8.718463
  },
};

let bgColor;
let seed;
let vertexPoint = [];

function setup () {
  createCanvas(548, 235);
  bgColor = color('rgba(255,255,255,1)');
  background(bgColor)
  grid()
  drawGrid()
}

function drawLines () {
  noFill()
  strokeJoin(ROUND)
  strokeCap(PROJECT)
  let X2 = floor(random(width))
  let Y2 = floor(random(height))
  for (let i = 0; i < stops.nation.connections.length; i++) {
    let weight = ceil(random(stops.nation.traffic)) + 10
    let Y1 = floor(random(height))
    let X1 = floor(random(width))
    let X3 = floor(random(width))
    let Y3 = floor(random(height))
    let YorX = floor(random(2))

    strokeWeight(weight)
    stroke(lineColors[stops.nation.connections[i]])
    beginShape();
    (YorX === 0) ? vertex(-10, Y1) : vertex(X1, -10);
    vertex(X2, Y2);
    (YorX === 0) ? vertex(width+10, Y3) : vertex(X3, height+10);
    endShape();
  }
}

function grid () {
  let gridLength = stops.nation.connections.length
  for (let i = 0; i < gridLength; i++) {
   vertexPoint[i] = []
   for (let j = 0; j < gridLength; j++) {
    vertexPoint[i][j] = { 
      x: 0, 
      y: 0 
    }
    vertexPoint[i][j].x = (width / (gridLength - 1)) * i
    vertexPoint[i][j].y = (height / (gridLength - 1)) * j
   }
  }
}

function drawGrid () {
  console.log(vertexPoint)
  let gridLength = stops.nation.connections.length
  beginShape(POINTS);
  for (let i = 0; i < gridLength; i++) {
    for (let j = 0; j < gridLength; j++) {
      vertex(vertexPoint[i][j].x, vertexPoint[i][j].y);
    }
  }
  endShape();
}

function keyTyped () {
  if (key === 'n') {
    initRandom();
  }
  if (key === 'r') {
    document.location.reload();
  }
  if (key === 's') {
    saveCanvas(`${year()}`);
  }
}
