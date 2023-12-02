import { getInputContent } from "../helpers";

const currentDay = "02";
const isTest = true;
const allContents = getInputContent(currentDay, isTest);

const Cube = {
  GREEN: "green",
  RED: "red",
  BLUE: "blue",
} as const;

type Game = {
  [Cube.GREEN]: number;
  [Cube.BLUE]: number;
  [Cube.RED]: number;
};

const initialGame: Game = {
  [Cube.GREEN]: 0,
  [Cube.BLUE]: 0,
  [Cube.RED]: 0,
};

const targetGame: Game = {
  [Cube.GREEN]: 13,
  [Cube.BLUE]: 14,
  [Cube.RED]: 12,
};

// Part 1
let possibleGamesSum = 0;
allContents.split(/\r?\n/).forEach((line: string, index: number) => {
  const gameNumber = index + 1;
  const currentGame = { ...initialGame };
  const rounds = line.split(": ")[1].split("; ");
  rounds.forEach((round) => {
    const draws = round.split(", ");
    draws.forEach((draw) => {
      const cubeNumber = draw.split(" ");
      const cubeColor = cubeNumber[1] as (typeof Cube)[keyof typeof Cube];
      const amount = cubeNumber[0];
      if (currentGame[cubeColor] < Number(amount)) {
        currentGame[cubeColor] = Number(amount);
      }
    });
  });
  let isGamePossible = true;
  Object.values(Cube).forEach((cube) => {
    if (currentGame[cube] > targetGame[cube]) {
      isGamePossible = false;
    }
  });
  if (isGamePossible) {
    possibleGamesSum += gameNumber;
  }
});

console.log("PART 1:");
console.log(possibleGamesSum);
