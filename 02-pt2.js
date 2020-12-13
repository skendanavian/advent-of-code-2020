// ref video:  https://www.youtube.com/watch?v=QXyt7yJSqLo

const readFile = require("fs").readFileSync;

const res = readFile("./02-data", "utf-8")
  .split("\n")
  .filter((str) => str.trim())
  .filter((line) => {
    const [rule, password] = line.split(": ");
    console.log(rule.match(/(\d+)\-(\d+) (\w)/));
    let [, min, max, letter] = rule.match(/(\d+)\-(\d+) (\w)/);
    min = parseInt(min, 10);
    max = parseInt(max, 10);

    const count = password.split("").filter((e) => e === letter).length;
    const index1 = min - 1;
    const index2 = max - 1;

    return (
      (password[index1] === letter || password[index2] === letter) &&
      !(password[index1] === letter && password[index2] === letter)
    );
  });

console.log(res.length);
