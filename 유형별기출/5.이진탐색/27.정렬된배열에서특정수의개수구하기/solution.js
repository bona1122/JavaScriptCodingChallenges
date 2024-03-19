const path = require("path");
const fs = require("fs");
const input = fs
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

const [n, x] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const findFistIdx = (arr, target, start, end) => {
  if (start > end) return;
  let mid = Math.floor((start + end) / 2);
  if ((mid === 0 || target > arr[mid - 1]) && arr[mid] === target) return mid;
  else if (arr[mid] >= target) return findFistIdx(arr, target, start, mid - 1);
  else return findFistIdx(arr, target, mid + 1, end);
};

const findLastIdx = (arr, target, start, end) => {
  if (start > end) return;
  let mid = Math.floor((start + end) / 2);
  if ((mid === arr.length - 1 || target < arr[mid + 1]) && arr[mid] === target)
    return mid;
  else if (arr[mid] > target) return findLastIdx(arr, target, start, mid - 1);
  else return findLastIdx(arr, target, mid + 1, end);
};

const countByValue = (arr, target) => {
  const n = arr.length;
  let firstIdx = findFistIdx(arr, target, 0, n - 1);
  if (firstIdx === undefined) return -1;
  let lastIdx = findLastIdx(arr, target, 0, n - 1);
  return lastIdx - firstIdx + 1;
};

const result = countByValue(arr, x);
console.log(result === -1 ? -1 : result);
