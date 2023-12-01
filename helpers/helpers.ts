const fs = require("fs");

const getPath = (day: string) =>
  `/Users/schliengeranais/Documents/FR-theodo/labs/advent-of-code-2023/day-${day}/input.txt`;

const getTestPath = (day: string) =>
  `/Users/schliengeranais/Documents/FR-theodo/labs/advent-of-code-2023/day-${day}/test.txt`;

export const getInputContent = (day: string, isTest: boolean) =>
  fs.readFileSync(isTest ? getTestPath(day) : getPath(day), "utf-8");
