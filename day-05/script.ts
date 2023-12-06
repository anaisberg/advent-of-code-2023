import { getInputContent } from "../helpers";

const currentDay = "05";
const isTest = false;
const allContents = getInputContent(currentDay, isTest);

// Part 1
let points = 0;
let seeds: number[] = [];
let isLineText = false;

const maps: Record<string, Record<number, number>> = {};
let currentOrigin = "";
let currentDestination = "";
const mapOrder: string[] = [];

allContents.split(/\r?\n/).forEach((line: string, index: number) => {
  if (index === 0) {
    seeds = line.split(": ")[1].split(" ").map(Number);
    mapOrder.push("seed");
    console.log(seeds);
    return;
  }
  if (line === "") {
    isLineText = true;
    return;
  }
  if (isLineText) {
    const text = line.split(" ")[0].split("-");
    currentOrigin = text[0];
    currentDestination = text[2];
    mapOrder.push(currentOrigin);
    maps[currentOrigin] = {} as Record<number, number>;
    isLineText = false;
    return;
  }
  const [destinationStart, originStart, range] = line.split(" ");
  const sourceMapping: Record<number, number> = { ...maps[currentOrigin] };
  for (let i = 0; i < Number(range); i += 1) {
    sourceMapping[Number(originStart) + i] = Number(destinationStart) + i;
  }
  maps[currentOrigin] = sourceMapping;
});

const locations = seeds.map((seed) => {
  const location = mapOrder.reduce((acc, key) => {
    if (key === "location") {
      return acc;
    }
    if (!(acc in maps[key])) {
      return acc;
    }
    return maps[key][acc];
  }, seed);

  return location;
});

console.log("locations", locations);

console.log("PART 1:");
console.log(Math.min(...locations));
