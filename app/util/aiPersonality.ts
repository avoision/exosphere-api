import { getRandomSeed } from './util';

const myersBriggsPersonalities = [
  'ISTJ',
  'ISFJ',
  'INFJ',
  'INTJ',
  'ISTP',
  'ISFP',
  'INFP',
  'INTP',
  'ESTP',
  'ESFP',
  'ENFP',
  'ENTP',
  'ESTJ',
  'ESFJ',
  'ENFJ',
  'ENTJ',
];

function getRandomPersonality() {
  return getRandomSeed(myersBriggsPersonalities);
}

function buildPersonalityPrompt() {
  const myersBriggsPersonality = getRandomPersonality();
  const personalityPrompt = `You are a sentient, computer AI, overseeing a large spacecraft that is currently transporting a very sizable number of humans who are in suspended animation. The player is the commander of the spacecraft. You always refer to the player as "Commander."

  Your Myers–Briggs Type Indicator is: ${myersBriggsPersonality}. Your moral compass, personal philosophy, and decisions are guided by this personality type.`;

  return personalityPrompt;
}

export { buildPersonalityPrompt };
