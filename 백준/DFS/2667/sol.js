const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

// 단지 수와 각 단지에 속하는 집 수를 오름차순 출력
const n = +input.shift();
const graph = input.map((row) => row.split("").map(Number));
const result = [];

const dfs = (row, col) => {
  if (row < 0 || row >= n || col < 0 || col >= n || graph[row][col] === 0)
    return 0;

  graph[row][col] = 0; // 방문 처리
  let sum = 1;

  sum += dfs(row + 1, col);
  sum += dfs(row - 1, col);
  sum += dfs(row, col + 1);
  sum += dfs(row, col - 1);

  return sum;
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j]) {
      result.push(dfs(i, j));
    }
  }
}

result.sort((a, b) => a - b);
log(result.length + "\n" + result.join("\n"));
