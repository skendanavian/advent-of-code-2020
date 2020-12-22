const readFile = require("fs").readFileSync;
const res = readFile("./03-data", "utf-8").split("\n");

const countTrees = function (data) {
  // keep track of coordinates

  let xIndex = 0;
  let yIndex = 0;
  const xLength = data[0].split("").length - 1;
  const yLength = data.length - 1;

  let treeCount = 0;

  while (yIndex < yLength) {
    xIndex += 3;
    yIndex++;

    if (xIndex > xLength) {
      xIndex -= xLength + 1;
    }

    if (data[yIndex][xIndex] === "#") {
      treeCount++;
    }
  }
  console.log(treeCount);
};



countTrees(res);
