const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

// 최대가 되려면, 차이가 가장 큰거 두개씩 짝짓기
const n = +input[0];
const arr = input[1].split(" ").map(Number);

// 모든 "순열" 중
//|A[0] - A[1]| + |A[1] - A[2]| + ... + |A[N-2] - A[N-1]| 가 최대인것 찾기

const visited = Array(n).fill(false);
const selected = [];
let result = 0;

const calc = (arr) => {
  let sum = 0;
  for (let i = 0; i <= n - 2; i++) {
    sum += Math.abs(arr[i] - arr[i + 1]);
  }
  return sum;
};

const dfs = (depth) => {
  if (depth === n) {
    const sum = calc(selected);
    result = Math.max(result, sum);
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      selected.push(arr[i]);
      dfs(depth + 1);
      visited[i] = false;
      selected.pop();
    }
  }
};

dfs(0);
log(result);
