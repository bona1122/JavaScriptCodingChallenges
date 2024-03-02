const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");
const n = Number(input[0]);
const food = input[1].split(" ").map(Number);

// 현재의 식량창고(i)에서 (i-1)을 털고 i를 털지 않는 경우 와 (i-2)를 털고 i를 터는 경우 중 큰 값을 선택
const memo = Array(100).fill(0);
memo[0] = food[0];
memo[1] = Math.max(food[0], food[1]);

for(let i = 2; i < n; i++){
  memo[i] = Math.max(memo[i-1], memo[i-2] + food[i]);
}

console.log(memo[n-1]);