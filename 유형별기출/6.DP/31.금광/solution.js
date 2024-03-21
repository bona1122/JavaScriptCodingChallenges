const path = require("path");
const fs = require("fs");
const input = fs
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
//3행 4열
const goldData = input[1].split(" ").map(Number);
const gold = Array(n)
  .fill()
  .map(() => Array(m).fill(0));
let k = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    gold[i][j] = goldData[k++];
  }
}
// console.log(gold);
const dp = Array(n)
  .fill()
  .map(() => Array(m).fill(0));
for (let i = 0; i < n; i++) {
  // 첫번째 열은 그대로
  dp[i][0] = gold[i][0];
}

for (let j = 1; j < m; j++) {
  // 두번째 열부터 dp 채우기
  for (let i = 0; i < n; i++) {
    // 각 행 dp 채우기
    dp[i][j] =
      gold[i][j] +
      Math.max(
        dp[i][j - 1], // 왼쪽에서 온 경우
        i - 1 >= 0 ? dp[i - 1][j - 1] : 0, // 왼쪽 위에서 온 경우
        i + 1 <= n - 1 ? dp[i + 1][j - 1] : 0 // 왼쪽 아래에서 온 경우
      );
  }
}

console.log(Math.max(...dp.map((v) => v[m - 1])));
