const readFile = require("fs").readFileSync;
const res = readFile("./03-data", "utf-8").split("\n");

const directions = [
  { r: 1, d: 1 },
  { r: 3, d: 1 },
  { r: 5, d: 1 },
  { r: 7, d: 1 },
  { r: 1, d: 2 },
];

const countTrees = function (data, direction) {
  const right = direction[0];
  const down = direction[1];
  let xIndex = 0;
  let yIndex = 0;
  const xLength = data[0].split("").length - 1;
  const yLength = data.length - 1;

  let treeCount = 0;

  while (yIndex < yLength) {
    xIndex += right;
    yIndex += down;

    if (xIndex > xLength) {
      xIndex -= xLength + 1;
    }

    if (data[yIndex][xIndex] === "#") {
      treeCount++;
    }
  }
  return treeCount;
};

const multiplyTrees = function (directions) {
  let i = 0;
  let length = directions.length;
  let treeCount = 0;

  while (i < length) {
    if (!treeCount) {
      treeCount = countTrees(res, [directions[i].r, directions[i].d]);
    } else {
      treeCount *= countTrees(res, [directions[i].r, directions[i].d]);
    }
    i++;
  }
  console.log(treeCount);
};

multiplyTrees(directions);
