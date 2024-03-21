const path = require("path");
const fs = require("fs");
const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"))
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const tri = Array(n);

for (let i = 1; i <= n; i++) {
  tri[i - 1] = input[i].split(" ").map(Number);
}

const dp = Array(n)
  .fill()
  .map(() => Array(n).fill(0));

dp[0][0] = tri[0][0];

// tri.forEach((row, i) => {
//   if (i === 0) return;
//   row.forEach((num, j) => {
//     if (j === 0) dp[i][j] = dp[i - 1][j] + num;
//     else if (j === row.length - 1) dp[i][j] = dp[i - 1][j - 1] + num;
//     else dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + num;
//   });
// });

// const result = Math.max(...dp[n - 1]);
// console.log(result);

////////////////////////////////// 책 풀이
for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    let upLeft;
    let up;
    if (j === 0) upLeft = 0;
    else upLeft = dp[i - 1][j - 1];

    if (j === i) up = 0;
    else up = dp[i - 1][j];

    dp[i][j] = Math.max(upLeft, up) + tri[i][j];
  }
}
console.log(Math.max(...dp[n - 1]));
