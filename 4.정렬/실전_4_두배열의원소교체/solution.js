const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((row) => row.split(" ").map((el) => Number(el)));

console.log(input);
const [N, K] = input[0];
let arr_A = input[1];
let arr_B = input[2];

arr_A.sort((a, b) => a - b);
arr_B.sort((a, b) => b - a);

for (let i = 0; i < K; i++) {
  if (arr_A[i] < arr_B[i]) [arr_A[i], arr_B[i]] = [arr_B[i], arr_A[i]];
  else break;
}

const result = arr_A.reduce((acc, cur) => acc + cur, 0);
console.log(result);
