const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);

// let idx = 0;
// let result = 0;
// while (idx < n) {
//   let scared = arr[idx];
//   let sliced = arr.slice(idx, idx + scared);
//   if (Math.max(...sliced) <= sliced.length) {
//     result++;
//     idx += scared;
//   } else {
//     break;
//   }
// }
// console.log(result);

//////// 책 풀이
let result = 0;
let count = 0;
arr.forEach((i) => {
  count++;
  if (count >= i) {
    result++;
    count = 0;
  }
});
console.log(result);
