// ref video:  https://www.youtube.com/watch?v=QXyt7yJSqLo

const readFile = require("fs").readFileSync;
const res = readFile("./02-data", "utf-8")
  .split("\n")
  .filter((str) => str.trim())
  .filter((line) => {
    const [rule, password] = line.split(": ");
    let [, min, max, letter] = rule.match(/(\d+)\-(\d+) (\w)/);
    min = parseInt(min, 10);
    max = parseInt(max, 10);

    const count = password.split("").filter((e) => e === letter).length;
    return count >= min && count <= max;
  });

console.log(res.length);
