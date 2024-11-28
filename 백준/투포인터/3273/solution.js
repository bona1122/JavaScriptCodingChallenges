const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

const n = +input[0];
const arr = input[1].split(" ").map(Number);
const x = +input[2];

// 합이 x인 (i,j)쌍의 갯수 구하기
// 모두 양의 정수이며, 서로 다름
arr.sort((a, b) => a - b); // 오름차순 정렬

let right = 0;
let left = n - 1;
let result = 0;
while (right < left) {
  const sum = arr[right] + arr[left];
  if (sum === x) {
    result++;
    right++;
    left--;
  } else if (sum < x) {
    right++;
  } else {
    left--;
  }
}

log(result);
