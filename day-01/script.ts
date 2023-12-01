import { getInputContent } from "../helpers";

const currentDay = "01";
const isTest = false;
const allContents = getInputContent(currentDay, isTest);

const calibrations: number[] = [];
let calibrationSum = 0;

// Part 1
allContents.split(/\r?\n/).forEach((line: string) => {
  let calibration: string[] = [];
  line.split("").forEach((char: string) => {
    if (!Number.isNaN(Number(char))) {
      calibration.push(char);
    }
  });

  const firstNumber = calibration[0];
  const secondNumber = calibration.pop();
  const newCalibration = Number(`${firstNumber}${secondNumber}`);
  calibrations.push(newCalibration);
  calibrationSum += newCalibration;
});

console.log("PART 1:");
console.log(calibrationSum);

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
