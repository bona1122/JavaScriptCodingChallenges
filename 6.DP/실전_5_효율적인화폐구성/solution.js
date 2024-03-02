const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");
const [n, m] = input[0].split(" ").map(Number);
let coins = [];
for (let i = 1; i < n + 1; i++) {
  coins = [...coins, Number(input[i])];
}

const memo = Array(m + 1).fill(10001);
memo[0] = 0;

coins.forEach((coin) => {
  for (let i = coin; i < m + 1; i++) {
    if (memo[i - coin] !== 10001) {
      memo[i] = Math.min(memo[i], memo[i - coin] + 1);
    }
  }
});

console.log(memo[m] === 10001 ? -1 : memo[m]);
