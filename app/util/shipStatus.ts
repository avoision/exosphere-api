import { buildPersonalityPrompt } from './aiPersonality';
import { randomFromMinMax } from './util';
import { add } from 'date-fns';

type GameData = {
  aiSettings: {
    personality: string;
  };
  gameData: {};
  shipStatus: ShipStatus;
};

type ShipStatus = {
  fuel: number;
  electricity: number;
  electricityType: string;
  humans: number;
  lifeSupport: number;
  distance: number;
  distanceType: string;
};

function initGame(): GameData {
  const gameStartTime = new Date().toISOString();
  const gameEndTime = add(gameStartTime, { minutes: 5 });

  return {
    aiSettings: {
      personality: buildPersonalityPrompt(),
    },
    gameData: {
      gameStartTime,
      gameEndTime,
    },
    shipStatus: {
      fuel: randomFromMinMax(80, 97),
      electricity: 10000,
      electricityType: 'Kilowatts',
      humans: 300,
      lifeSupport: randomFromMinMax(90, 97),
      distance: 6200,
      distanceType: 'miles',
    },
  };
}

export type { GameData, ShipStatus };
export { initGame };
