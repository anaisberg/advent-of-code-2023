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
