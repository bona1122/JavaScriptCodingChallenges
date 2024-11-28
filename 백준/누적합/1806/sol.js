const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .split("\n");
const log = console.log;

const [n, s] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

// 수열길이 n, 부분합 중 S이상되는 것 중, 가장짧은 것 길이 찾기

/*
let intervalSum = 0;
let end = 0;
let result = Infinity;
for (let start = 0; start < n; start++) {
  while (intervalSum < s && end < n) {
    intervalSum += arr[end];
    end++;
  }
  if (intervalSum >= s) {
    // log(start, end, intervalSum);
    result = Math.min(end - start, result);
  }
  intervalSum -= arr[start];
}
log(result === Infinity ? 0 : result); */
 
// 첫번째 코드에 비해, 초기 intervalSum을 첫 원소로하여 end - start + 1 로 정확한 길이계산 가능
// 단순히 조건을 만족하는 갯수가 아니라, 인덱스의 차이를 계산하는 것이므로 부분누적합 투포인터 문제에서
// intervalSum을 0으로 두는 것과 차이가 있다.
let start = 0;
let end = 0;
let intervalSum = arr[0];
let result = 1e9;

while (true) {
  while (end < n - 1 && intervalSum < s) {
    end += 1;
    intervalSum += arr[end];
  }
  if (intervalSum >= s) {
    result = Math.min(result, end - start + 1);
  }
  intervalSum -= arr[start];
  start += 1;
  if (start >= n) break;
}
if (result === 1e9) result = 0;
log(result);
