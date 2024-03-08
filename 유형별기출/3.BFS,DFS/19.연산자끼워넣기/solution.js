const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"))
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const nums = input[1].split(" ").map(Number);
let [add, sub, mul, div] = input[2].split(" ").map(Number);

let minVal = 1e9;
let maxVal = -1e9;

const dfs = (nextIdx, now) => {
  if (nextIdx === n) { // 마지막 피연산자에 도달했을 때
    minVal = Math.min(minVal, now);
    maxVal = Math.max(maxVal, now);
  } else {
    if (add > 0) {
      add -= 1;
      dfs(nextIdx + 1, now + nums[nextIdx]);
      add += 1;
    }
    if (sub > 0) {
      sub -= 1;
      dfs(nextIdx + 1, now - nums[nextIdx]);
      sub += 1;
    }
    if (mul > 0) {
      mul -= 1;
      dfs(nextIdx + 1, now * nums[nextIdx]);
      mul += 1;
    }
    if (div > 0) {
      div -= 1;
      dfs(nextIdx + 1, parseInt(now / nums[nextIdx]));
      div += 1;
    }
  }
};

dfs(1, nums[0]);
console.log(maxVal);
console.log(minVal);
