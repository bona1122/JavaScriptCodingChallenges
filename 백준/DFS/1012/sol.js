const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

//////// 방법1
/*
const testNum = +input.shift();
const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const dfs = (x, y, row, col, graph) => {
  graph[x][y] = 0;
  for (let [cx, cy] of dir) {
    let newX = x + cx;
    let newY = y + cy;
    if (newX < 0 || newX >= row || newY < 0 || newY >= col) continue;
    if (graph[newX][newY]) {
      dfs(newX, newY, row, col, graph);
    }
  }
};
for (let i = 0; i < testNum; i++) {
  let [row, col, k] = input.shift().split(" ").map(Number);
  let graph = Array.from({ length: row }, () => Array(col).fill(0));
  let result = 0;
  input
    .splice(0, k)
    .map((data) => data.split(" "))
    .forEach(([a, b]) => (graph[a][b] = 1));

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (graph[i][j]) {
        result++;
        dfs(i, j, row, col, graph);
      }
    }
  }
  log(result);
}*/

/////// 방법2
let testNum = Number(input[0]);
const dfs = (graph, n, m, x, y) => {
  if (x <= -1 || x >= n || y <= -1 || y >= m) {
    return false;
  }
  if (graph[x][y] === 1) {
    graph[x][y] = -1;
    dfs(graph, n, m, x - 1, y);
    dfs(graph, n, m, x, y - 1);
    dfs(graph, n, m, x + 1, y);
    dfs(graph, n, m, x, y + 1);
    return true;
  }
  return false;
};
let line = 1;
while (testNum--) {
  let [m, n, k] = input[line].split(" ").map(Number);
  let graph = Array.from({ length: n }, () => Array(m).fill(0));
  for (let i = 1; i <= k; i++) {
    let [y, x] = input[line + i].split(" ").map(Number);
    graph[x][y] = 1;
  }
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(graph, n, m, i, j)) result++;
    }
  }
  line += k + 1;
  log(result);
}
