//reference video -> https://dev.to/thibpat/solving-day-4-of-advent-of-code-2020-in-javascript-3fhi
// used this resource as tutorial for this one

const readFile = require("fs").readFileSync;
const res = readFile("./04-data", "utf-8").split("\n\n");

console.log(res);

class Passport {
  constructor(input) {
    this.map = new Map();
    const list = input.split(/\s+/g);
    console.log(list);
  }
}
