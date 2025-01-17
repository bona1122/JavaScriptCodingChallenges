const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

const n = +input[0];
const arr = input[1].split(" ").map(Number);
const op = input[2].split(" ").map(Number);
let max = -Infinity;
let min = Infinity;

const calc = (operator, a, b) => {
  switch (operator) {
    case 0:
      return a + b;
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return a >= 0 ? Math.floor(a / b) : -Math.floor(-a / b);
  }
};

// 모든 연산자 순열을 구하기
const dfs = (depth, current) => {
  if (depth === n - 1) {
    // 연산자 모두 고른 경우
    max = Math.max(max, current);
    min = Math.min(min, current);
    return;
  }
  for (let i = 0; i < 4; i++) {
    if (op[i] > 0) {
      op[i] -= 1;
      dfs(depth + 1, calc(i, current, arr[depth + 1]));
      op[i] += 1;
    }
  }
};
dfs(0, arr[0]);
log(max + "\n" + min);
