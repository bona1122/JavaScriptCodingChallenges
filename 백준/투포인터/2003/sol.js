const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
/*
// 부분합이 m이 되는 부분합의 갯수 구하기

// 누적합 구하기
// 0 1 2 3 4
const prefixSum = Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
}

let left = 0;
let right = 0;
let result = 0;
while (left <= n && right <= n) {
  // right 증가
  while (prefixSum[right] - prefixSum[left] < m && right <= n) {
    right++;
  }
  if (right > n) break;
  if (prefixSum[right] - prefixSum[left] === m) {
    result++;
  }
  left++;
}
log(result);
*/

// prefixSum을 따로 구하지 않는 방법
let cnt = 0;
let intervalSum = 0;
let end = 0;

for (let start = 0; start < n; start++) { // start,end에 대해 배열인덱스 접근을 관리하기에도 위의 코드보다 가독성이 더 좋다
  while (intervalSum < m && end < n) {
    intervalSum += arr[end];
    end++;
  }
  if (intervalSum === m) cnt++;
  intervalSum -= arr[start]; // start값 증가시키기 전에, 지금 start값을 부분합에서 빼주기
}
log(cnt);