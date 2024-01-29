// 입력된 수열이 내림차순으로 정렬된 결과를 공백으로 구분하여 출력하기.
const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\n")
  .map((el) => Number(el));

let [, ...arr] = input;

arr.sort((a, b) => b - a);
console.log(arr);