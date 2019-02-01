// Colors
const lineColors = {
  1: 'rgb(255,192,0)',
  2: '#294992',
  3: '#A29917',
  4: '#BE428E',
  5: '#F09043',
  6: '#85C18E',
  7: '#F2A4B7',
  8: '#CCACCF',
  9: '#D5C900',
  10: '#E4B228',
  11: '#8C5E24',
  12: '#007F49',
  13: '#99D3DE',
};

const stops = {
  nation: {
    nbExit: 6,
    connections: [1, 2, 6, 9],
  },
};

let bgColor;
let seed;

function setup() {
  createCanvas(548, 235);
  bgColor = color('rgba(255,255,255,1)');
  initRandom()
}

// devrait s'appeller loop
function draw() {
  randomSeed(seed)
  background(bgColor);
  noFill();
  strokeWeight(15);
  strokeJoin(ROUND);
  for(let i = 0; i < stops.nation.connections.length; i++)
  {
    let X2 = floor(random(width))
    let Y1 = floor(random(height))
    let Y2 = floor(random(height))
    let Y3 = floor(random(height))

    beginShape();
    stroke(lineColors[stops.nation.connections[i]])
    vertex(0, Y1);
    vertex(X2, Y2);
    vertex(width, Y3);
    endShape();
  }
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

function initRandom() {
  seed = random(1500)
}
