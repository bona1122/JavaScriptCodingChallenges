const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

const n = +input[0];
// 1부터 n까지의 순열을 사전순으로 출력하는 프로그램

const visited = Array(n + 1).fill(false);
const selected = Array(n).fill(0);
let result = "";

const dfs = (depth) => {
  if (depth === n) {
    result += selected.join(" ") + "\n";
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      selected[depth] = i;
      dfs(depth + 1);
      visited[i] = false;
    }
  }
};

dfs(0);
log(result);
