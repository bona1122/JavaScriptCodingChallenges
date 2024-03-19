const path = require("path");
const fs = require("fs");
const input = fs
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

const arr = input[1].split(" ").map(Number);

const findFix = (arr, start, end) => {
  if (start > end) return;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === mid) return mid;
  else if (arr[mid] > mid) return findFix(arr, start, mid - 1);
  else return findFix(arr, mid + 1, end);
};

const result = findFix(arr, 0, arr.length - 1);
console.log(result === undefined ? -1 : result);
