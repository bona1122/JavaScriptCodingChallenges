const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();
const n = Number(input);

const memo = Array(1000).fill(0);

memo[0] = 1;
memo[1] = 3;

for (let i = 2; i < n; i++) {
  memo[i] = (memo[i - 1] + memo[i - 2] * 2) % 796796;
}

console.log(memo[n - 1]);
