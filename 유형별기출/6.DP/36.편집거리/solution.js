const path = require("path");
const fs = require("fs");
const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"))
  .toString()
  .trim()
  .split("\n");

const A = input[0];
const B = input[1];

const n = A.length;
const m = B.length;

const dp = Array(n + 1)
  .fill(0)
  .map(() => Array(m + 1).fill(0));

for (let i = 1; i <= n; i++) {
  dp[i][0] = i;
}
for (let j = 1; j <= m; j++) {
  dp[0][j] = j;
}

// dp[i][j] = A의 i번째 문자열까지와 B의 j번째 문자열까지의 최소 편집 거리 계산
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    if (A[i - 1] === B[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1]; // 같으면 왼쪽 위 그대로
    } else {
      // 다르면 왼쪽, 위, 왼쪽 위 중 최소값 + 1
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
    }
  }
}

console.log(dp[n][m]);
