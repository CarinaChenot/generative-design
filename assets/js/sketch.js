let bgColor;
let seed;
let vertexPoint = [];

function setup() {
  createCanvas(548, 235);
  bgColor = color('rgba(255,255,255,1)');
  background(bgColor);
  grid();
  drawGrid();
}

function drawLines() {
  noFill();
  strokeJoin(ROUND);
  strokeCap(PROJECT);
  let X2 = floor(random(width));
  let Y2 = floor(random(height));
  for (let i = 0; i < stopData.connection.length; i++) {
    let weight = ceil(random(stopData.traffic)) + 10;
    let Y1 = floor(random(height));
    let X1 = floor(random(width));
    let X3 = floor(random(width));
    let Y3 = floor(random(height));
    let YorX = floor(random(2));

    strokeWeight(weight);
    stroke(lineColors[stopData.connection[i]]);
    beginShape();
    YorX === 0 ? vertex(-10, Y1) : vertex(X1, -10);
    vertex(X2, Y2);
    YorX === 0 ? vertex(width + 10, Y3) : vertex(X3, height + 10);
    endShape();
  }
}

function grid() {
  let gridLength = stopData.connection.length;
  for (let i = 0; i < gridLength; i++) {
    vertexPoint[i] = [];
    for (let j = 0; j < gridLength; j++) {
      vertexPoint[i][j] = {
        x: 0,
        y: 0,
      };
      vertexPoint[i][j].x = (width / (gridLength - 1)) * i;
      vertexPoint[i][j].y = (height / (gridLength - 1)) * j;
    }
  }
}

function drawGrid() {
  console.log(vertexPoint);
  let gridLength = stopData.connection.length;
  beginShape(POINTS);
  for (let i = 0; i < gridLength; i++) {
    for (let j = 0; j < gridLength; j++) {
      vertex(vertexPoint[i][j].x, vertexPoint[i][j].y);
    }
  }
  endShape();
}

function keyTyped() {
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
