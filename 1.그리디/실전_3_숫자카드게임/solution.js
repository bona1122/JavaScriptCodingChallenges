let fs = require("fs");

let input = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((item) => item.split(" "))
  .map((items) => items.map((item) => Number(item)));
// console.log(input);

// N, M 뽑아내기
const N = input[0][0];
const M = input[0][1];

// 카드 배열 뽑아내기
const [, ...matrix] = input;
// console.log(matrix);

const result = matrix.reduce((acc, row) => { // 각 행에서 최소 값 찾고, 현재까지 찾은 최대값과 비교
  return Math.max(acc, Math.min(...row));
}, 0);

console.log(result);

