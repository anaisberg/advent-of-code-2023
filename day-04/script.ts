import { getInputContent } from "../helpers";

const currentDay = "04";
const isTest = false;
const allContents = getInputContent(currentDay, isTest);

// Part 1
let points = 0;
allContents.split(/\r?\n/).forEach((line: string, index: number) => {
  const card = line.split(" | ")[0].split(": ")[1].split(" ").map(Number);
  const hand = line.split(" | ")[1].split(" ").map(Number);
  let total = 0;
  card.forEach((cardNumber) => {
    const isNumberInHand = hand.includes(cardNumber);
    if (isNumberInHand && cardNumber !== 0) {
      total += 1;
    }
    return;
  });
  if (total !== 0) {
    const worth = 2 ** (total - 1);
    points += worth;
  }
});

console.log("PART 1:");
console.log(points);

// Part 2
let cardsInDeck = 0;
const cards: {
  [key: number]: {
    total: number;
    cardsWon: number;
  };
} = {};

allContents.split(/\r?\n/).forEach((line: string, index: number) => {
  const card = line.split(" | ")[0].split(": ")[1].split(" ").map(Number);
  const hand = line.split(" | ")[1].split(" ").map(Number);
  let total = 0;
  card.forEach((cardNumber) => {
    const isNumberInHand = hand.includes(cardNumber);
    if (isNumberInHand && cardNumber !== 0) {
      total += 1;
    }
    return;
  });
  cards[index + 1] = { total, cardsWon: 1 };
});

Object.entries(cards)
  .reverse()
  .forEach(([cardNumber, card]) => {
    const cardNumberInt = Number(cardNumber);
    const total = card.total;
    for (let i = cardNumberInt + 1; i <= cardNumberInt + total; i += 1) {
      if (cards[i]) {
        const { cardsWon: cardsWon_i } = cards[i];
        cards[cardNumberInt].cardsWon += cardsWon_i;
      }
    }
    cardsInDeck += cards[cardNumberInt].cardsWon;
  });

console.log("PART 2:");
console.log(cardsInDeck);
