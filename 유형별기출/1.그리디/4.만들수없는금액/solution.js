const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const coins = input[1].split(" ").map(Number);
coins.sort((a, b) => a - b);

let target = 1;
for (let i = 0; i < n; i++) {
  if (target < coins[i]) break;
  target += coins[i];
}

console.log(target);
