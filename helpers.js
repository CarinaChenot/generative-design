function randomSelectTwo() {
  const rando = random(1);
  if (rando > 0.5) return true;
  return false;
}

function getRandomFromPalette() {
  const rando = floor(random(0, PALETTE.length));
  return PALETTE[rando];
}
