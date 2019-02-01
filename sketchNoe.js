// Colors
const lineColors = {
  1: '#FFC000',
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
  bgColor = color(lineColors[1]);
  background(bgColor);
  
  noFill();
  strokeWeight(10.0);
  stroke(lineColors(9))
  strokeJoin(ROUND);
  beginShape();
  vertex(30, 20);
  vertex(85, 20);
  vertex(85, 75);
  vertex(30, 75);
  endShape();


}