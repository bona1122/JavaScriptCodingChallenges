const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

// n개로 이루어진 수열에서 최대 k번 원소 삭제하고
// 짝수로 이루어진 연속부분수열 최대길이 출력
const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
let result = 0;
let removed = 0;
let start = 0;

for (let end = 0; end < n; end++) {
  if (arr[end] % 2 === 1) removed++; // 홀수면 지우기
  while (removed > k && start < n) {
    // 지워진게 많으면, start 포인트 이동
    if (arr[start] % 2 === 1) removed--;
    start++;
  }
  if (removed <= k) { 
    result = Math.max(result, end - start - removed + 1);
  }
}

log(result);
