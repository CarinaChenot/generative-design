const grid = () => {
  push();
  for (let x = 0; x < COLUMNS; x++) {
    push();
    for (let y = 0; y < ROWS; y++) {
      square();
      quadrants();
      translate(0, SQUARE_SIZE);
    }
    pop();
    translate(SQUARE_SIZE, 0);
  }
  pop();
};

const square = () => {
  const layerColor = getRandomFromPalette();
  push();
  fill(layerColor);
  noStroke();
  rect(0, 0, SQUARE_SIZE, SQUARE_SIZE);
  pop();
};

const quadrants = () => {
  push();
  translate(SQUARE_SIZE / 2, SQUARE_SIZE / 2);

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
  const shapeSize = SQUARE_SIZE * 0.3;
  const offset = -(SQUARE_SIZE / 2);

  push();
  fill(layerColor);
  noStroke();
  arc(offset, offset, shapeSize, shapeSize, 0, 90);
  pop();
};

const mediumCircle = () => {
  const layerColor = getRandomFromPalette();
  const shapeSize = SQUARE_SIZE * 0.75;
  const offset = -(SQUARE_SIZE / 2);

  push();
  fill(layerColor);
  noStroke();
  arc(offset, offset, shapeSize, shapeSize, 0, 90);
  pop();
};

const largeCircle = () => {
  const layerColor = getRandomFromPalette();
  const shapeSize = SQUARE_SIZE;
  const offset = -(SQUARE_SIZE / 2);

  push();
  fill(layerColor);
  arc(offset, offset, shapeSize, shapeSize, 0, 90);
  pop();
};
