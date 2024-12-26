const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

const n = +input.shift();
const m = +input.shift();
const graph = Array.from({ length: n + 1 }, () => []);
input
  .map((row) => row.split(" ").map(Number))
  .forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });
const visited = new Array(n + 1).fill(false);

let result = 0;
const dfs = (v) => {
  visited[v] = true;
  result++;
  for (let node of graph[v]) {
    if (!visited[node]) dfs(node);
  }
};

dfs(1);
log(result - 1);
