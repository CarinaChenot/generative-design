const CRYSTAL_SIZE = 500;
const SIDES = 6;
let PALETTE = [];

const layers = [];

let t = 0;

function setup() {
  createCanvas(500, 500);

  PALETTE = [
    color(255, 192, 0), // pink
    color(41, 73, 146), // blue
    color(213, 201, 0), // blue
  ];
}

function draw() {
  stroke(getRandomFromPalette());
  strokeWeight(random(0, 5));
  translate(width / 100, height / 2);
  point(t, sin(t * 5) * 150);
  t += 0.85;
}

// function setup() {
//   pixelDensity(3);
//   createCanvas(530, 530);

//   PALETTE = [
//     color(255, 192, 0), // pink
//     color(41, 73, 146), // blue
//   ];

//   noLoop();
//   angleMode(DEGREES);
//   rectMode(CENTER);
// }

// function draw() {
//   let picker = random(1);
//   if (picker > 0.3) layers.push(new OutlineShape());

//   picker = random(1);
//   if (picker > 0.3) layers.push(new SimpleLines());

//   picker = random(1);
//   if (picker > 0.3) layers.push(new SteppedHexagons());

//   picker = random(1);
//   if (picker > 0.3) layers.push(new Circles());

//   layers.forEach(layer => layer.render());
// }
