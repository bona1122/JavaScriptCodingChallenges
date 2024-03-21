const path = require("path");
const fs = require("fs");
const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"))
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number).reverse();

// 가장 긴 증가하는 부분 수열 문제 -> 전형적인 dp 문제
const dp = Array(n).fill(1); // dp[i] = i번째 원소를 마지막 원소로 가질 때 가장 긴 증가하는 부분 수열의 길이
for (let i = 1; i < n; i++) {
  // 1부터 시작(i)
  for (let j = 0; j < i; j++) {
    // 0부터 i-1까지의 모든 j에 대해서
    if (arr[i] > arr[j]) {
      // 현재 값이 이전 값보다 크다면
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}
console.log(n - Math.max(...dp)); // 전체 길이에서 가장 긴 증가하는 부분 수열의 길이를 뺀 값
