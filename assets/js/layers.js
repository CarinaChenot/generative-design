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
  fill(7, 1, 99);
  blendMode(OVERLAY);
  text(stopData.name, 25, height - 25);
  blendMode(NORMAL);
  fill(7, 1, 99, overlayOpacity);
  text(stopData.name, 25, height - 25);

  // Number
  const number = Math.floor(random(99999));
  textAlign(LEFT, TOP);
  textSize(40);
  rotate(90);
  fill(7, 1, 99);
  blendMode(OVERLAY);
  text(number, 25, 25 - width);
  blendMode(NORMAL);
  fill(7, 1, 99, overlayOpacity);
  text(number, 25, 25 - width);
  rotate(-90);

  //Image
  loadImage('assets/img/t-img.png', tImg => {
    blendMode(OVERLAY);
    tint(255, overlayOpacity);
    image(tImg, 25, 25, 56, 90);
    blendMode(NORMAL);
    tint(255, overlayOpacity);
    image(tImg, 25, 25, 56, 90);
  });
};
