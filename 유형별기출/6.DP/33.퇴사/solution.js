const path = require("path");
const fs = require("fs");
const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"))
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const time = Array(n).fill(0);
const price = Array(n).fill(0);
const dp = Array(n + 1).fill(0);

// dp[i] = i번째 날부터 마지막 날까지 낼 수 있는 최대 이익

for (let i = 1; i <= n; i++) {
  const [t, p] = input[i].split(" ").map(Number);
  time[i - 1] = t;
  price[i - 1] = p;
}

let maxValue = 0;
for (let i = n - 1; i >= 0; i--) {
  let next = i + time[i]; // 다음 상담을 할 수 있는 날짜
  if (next > n) {
    // 상담이 끝나는 날이 퇴사일을 넘어가면
    // dp[i] = dp[i + 1];
    dp[i] = maxValue;
  } else {
    // 상담이 끝나는 날이 퇴사일을 넘어가지 않으면
    // dp[i] = Math.max(dp[i + 1], price[i] + dp[next]);
    dp[i] = Math.max(maxValue, price[i] + dp[next]);
    maxValue = dp[i];
  }
}

// console.log(dp[0]);
console.log(maxValue);
