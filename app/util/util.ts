function randomFromMinMax(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomSeed(seedSource: string[]) {
  const randomPos = Math.floor(Math.random() * seedSource.length);
  return seedSource[randomPos];
}

export { randomFromMinMax, getRandomSeed };
