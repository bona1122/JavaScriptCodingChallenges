const path = require("path");
const fs = require("fs");
const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"))
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);

const dp = Array(1001).fill(0);
dp[1] = 1;

let idx2 = 1;
let idx3 = 1;
let idx5 = 1;

for (let i = 2; i <= n; i++) {
  let next2 = 2 * idx2;
  let next3 = 3 * idx3;
  let next5 = 5 * idx5;

  dp[i] = Math.min(next2, next3, next5);

  if (dp[i] === next2) idx2++;
  if (dp[i] === next3) idx3++;
  if (dp[i] === next5) idx5++;
}
console.log(dp[n]);