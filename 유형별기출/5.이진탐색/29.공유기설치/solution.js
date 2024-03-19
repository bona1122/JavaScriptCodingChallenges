const path = require("path");
const fs = require("fs");
const input = fs
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

const [n, c] = input[0].split(" ").map(Number);
const arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(Number(input[i]));
}
arr.sort((a, b) => a - b);

let start = 1;
let end = arr[n - 1] - arr[0];
let result = 0;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  let value = arr[0];
  let count = 1;
  for (let i = 1; i < n; i++) {
    if (arr[i] >= value + mid) {
      value = arr[i];
      count++;
    }
  }
  if (count >= c) {
    start = mid + 1;
    result = mid;
  } else {
    end = mid - 1;
  }
}
console.log(result);

// 집 5개, 공유기 3개
// 1 , 2, 4, 8, 9
// 가장인접한 두 공유기 사이의 최대거리?
