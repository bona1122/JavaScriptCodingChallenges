const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

const N = Number(input[0]);
const list = input[1].split(" ").map((item) => Number(item));
const M = Number(input[2]);
const checkList = input[3].split(" ").map((item) => Number(item));

const binary_search = (arr, target, start, end) => {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
};

const sorted_list = list.sort((a, b) => a - b);
for (let i = 0; i < checkList.length; i++) {
  if (binary_search(sorted_list, checkList[i], 0, N - 1)) {
    process.stdout.write("yes ");
  } else {
    process.stdout.write("no ");
  }
}

///////// 계수 정렬을 이용한 방법
// const array = Array.from({ length: 1000001 }, () => 0);
// list.forEach((item) => {
//   array[item] = 1;
// });
// checkList.forEach((item) => {
//   if (array[item] === 1) process.stdout.write("yes ");
//   else process.stdout.write("no ");
// });


