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
};

const stops = {
  nation: {
    nbExit: 6,
    connections: [1, 2, 6, 9],
    traffic: 8718463,
  },
};

let rectColors;
let bgColor;
let startX;
let startY;
let rectWidth;
let rectHeight;
let rectCount;
let seed;

function setup() {
  createCanvas(548, 235);
  bgColor = color(lineColors[1]);
  background(bgColor);
  rectCount = 15;

  strokeWeight(20);
  point(85, 75);
  stroke(126);

  strokeWeight(10);
  stroke(80);

  noFill();
  strokeWeight(10.0);
  strokeJoin(MITER);
  beginShape();
  vertex(35, 20);
  vertex(95, 20);
  vertex(35, 80);
  endShape();

  beginShape();
  vertex(95, 80);
  vertex(95, 20);
  endShape();

  // initRandom();
}

// function initRandom() {
//   seed = random(1500);
//   rectColors = [];
//   for (let i = 0; i < rectCount; i++) {
//     let x = floor(random(webImage.width));
//     let y = floor(random(webImage.height));
//     let c = webImage.get(x, y);
//     // let r = 237;
//     // let g = 0;
//     // let b = floor(random(10, 255));
//     // let c = color(r, g, b);
//     rectColors.push(c);
//   }

//   startX = 75;
//   startY = 75;
//   rectWidth = 450 / rectCount;
//   rectMaxHeight = 150;
//   seed = random(1500);
//   background(bgColor);

//   for (let i = 0; i < rectCount; i++) {
//     fill(rectColors[i]);
//     let x = startX + rectWidth * i;
//     rect(x, startY, rectWidth, rectWidth * 2); // width et height prend automatiquement la taille du canvas
//   }
// }

// // devrait s'appeller loop
// function draw() {
//   randomSeed(seed);
//   // background(bgColor);
//   // noStroke();
//   // fill(rectColor); // on peut en mettre une 4ème pour la transparence
//   // on peut aussi récrire :
//   /*fill('rgb(237,0,62)');
// fill('#ED03E');
// */

//   // principe seed random seed pour fixer le point de départ de la variable aléatoire pour avoir tjr les mêmes random
// }

// function keyTyped() {
//   if (key === 'n') {
//     initRandom();
//   }
//   if (key === 'r') {
//     document.location.reload();
//   }
//   if (key === 's') {
//     saveCanvas(`${year()}`);
//   }
// }
