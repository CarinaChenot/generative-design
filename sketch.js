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
