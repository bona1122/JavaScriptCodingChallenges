const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim();

let result = Number(input[0]);

for (let i = 1; i < input.length; i++) {
  let num = Number(input[i]);
  if (num <= 1 || result <= 1) {
    result += num;
  } else {
    result *= num;
  }
}
console.log(result);
