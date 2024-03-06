const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim();

// const oneArr = input.match(/1+/g);
// const zeroArr = input.match(/0+/g);

// console.log(Math.min(oneArr.length, zeroArr.length));

/////////////////////////////// 책 풀이
let cnt0 = 0;
let cnt1 = 0;
input[0] === "1" ? cnt1++ : cnt0++;

for (let i = 0; i < input.length - 1; i++) {
  if (input[i] !== input[i + 1]) {
    input[i + 1] === "1" ? cnt1++ : cnt0++;
  }
}

console.log(Math.min(cnt0, cnt1));
