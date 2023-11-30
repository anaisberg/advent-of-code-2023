const fs = require("fs");

export const getPath = (day: string) =>
  `/Users/schliengeranais/Documents/FR-theodo/labs/advent-of-code-2023/day-${day}/input.txt`;

export const getInputContent = (day: string) =>
  fs.readFileSync(getPath(day), "utf-8");
