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

// Part 2
const numbers = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};
type StringDigit = keyof typeof numbers;

const calibrations2: number[] = [];
let calibrationSum2 = 0;

// Part 1
allContents.split(/\r?\n/).forEach((line: string) => {
  let calibration: string[] = [];
  let currentString = "";

  line.split("").forEach((char: string, index) => {
    currentString += char;

    if (!Number.isNaN(Number(char))) {
      calibration.push(char);
      currentString = "";
    } else {
      const currentStringLength = currentString.length;
      const lastString = currentString.slice(
        Math.max(0, currentStringLength - 5)
      );
      Object.keys(numbers).forEach((digit: string) => {
        const stringDigit = digit as StringDigit;
        if (lastString.includes(stringDigit)) {
          calibration.push(numbers[stringDigit]);
        }
      });
    }
  });
  const firstNumber = calibration[0];
  const secondNumber = calibration.pop();
  const newCalibration = Number(`${firstNumber}${secondNumber}`);
  calibrations2.push(newCalibration);
  calibrationSum2 += newCalibration;
});

console.log("PART 2:");
console.log(calibrationSum2);
