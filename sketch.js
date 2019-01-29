// let rectColor;
let rectColors;
let bgColor;
let startX;
let startY;
let rectWidth;
let rectHeight;
let rectCount;
let seed;
let webImage;

function preload() {
  webImage = loadImage(
    'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  );
}

function setup() {
  pixelDensity(3);
  createCanvas(600, 600);
  bgColor = color(160);
  rectCount = 15;
  initRandom();
}

function initRandom() {
  seed = random(1500);
  rectColors = [];
  for (let i = 0; i < rectCount; i++) {
    let x = floor(random(webImage.width));
    let y = floor(random(webImage.height));
    let c = webImage.get(x, y);
    // let r = 237;
    // let g = 0;
    // let b = floor(random(10, 255));
    // let c = color(r, g, b);
    rectColors.push(c);
  }

  startX = 75;
  startY = 75;
  rectWidth = 450 / rectCount;
  rectMaxHeight = 150;
  seed = random(1500);
  background(bgColor);
}

// devrait s'appeller loop
function draw() {
  randomSeed(seed);
  background(bgColor);
  noStroke();
  // fill(rectColor); // on peut en mettre une 4ème pour la transparence
  // on peut aussi récrire :
  /*fill('rgb(237,0,62)');
fill('#ED03E');
*/

  // principe seed random seed pour fixer le point de départ de la variable aléatoire pour avoir tjr les mêmes random

  for (let i = 0; i < rectCount; i++) {
    fill(rectColors[i]);
    let x = startX + rectWidth * i;
    rect(x, startY, rectWidth, random(rectMaxHeight)); // width et height prend automatiquement la taille du canvas
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
