const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

let [n, m] = input[0].split(" ").map(Number);
const ballCnt = Array(m + 1).fill(0);
const balls = input[1].split(" ").map(Number);

balls.forEach((ball) => {
  ballCnt[ball]++;
});

let result = 0;
ballCnt.forEach((cnt, i) => {
  n -= cnt;
  result += cnt * n;
});

console.log(result);
