import { getInputContent } from "../helpers";

const currentDay = "01";
const allContents = getInputContent(currentDay);

const sums: number[] = [];
let currentSum = 0;

allContents.split(/\r?\n/).forEach((line: string) => {
  if (line.length === 0) {
    sums.push(currentSum);
    currentSum = 0;
  } else {
    currentSum += Number(line);
  }
});
const max1 = Math.max(...sums);
console.log(max1);
