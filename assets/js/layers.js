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
    if (randomSelectTwo()) circle(LARGE);
    else circle(MEDIUM);
    if (randomSelectTwo()) circle(SMALL);
  }
  pop();
};

const circle = ratioSize => {
  const layerColor = getRandomFromPalette();
  const shapeSize = squareSize * ratioSize;
  const offset = -(squareSize / 2);

  push();
  fill(layerColor);
  noStroke();
  arc(offset, offset, shapeSize, shapeSize, 0, 90);
  pop();
};

const overlay = () => {
  // Consts
  let overlayOpacity = 255;

  // Text
  textSize(20);
  textFont(font);
  textFont('ParisineOfficeStd-Bold');
  textStyle(BOLD);
  textAlign(LEFT, BOTTOM);
  // Stop name
  fill(00, 00, 00, overlayOpacity);
  text(stopData.name, 25, height - 25);

  // Number
  const number = Math.floor(random(99999));
  textAlign(LEFT, TOP);
  textSize(40);
  rotate(90);
  fill(00, 00, 00, overlayOpacity);
  text(number, 25, 25 - width);
  rotate(-90);

  //Image
  loadImage('assets/img/t-img.png', tImg => {
    tint(255, overlayOpacity);
    image(tImg, 25, 25, 56, 90);
  });
};
