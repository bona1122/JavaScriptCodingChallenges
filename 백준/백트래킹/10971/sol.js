const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

// 외판원(TSP 문제)
// 1-n 도시 있음. n개의 도시를 모두거쳐서 원래도시로 순회
// 가장 적은 비용
// 방향 그래프. 비용 0이면 갈수없는 것.

// 풀이 1
// const n = +input.shift();
// const graph = input.map((row) => row.split(" ").map(Number));

// let visited = new Array(n).fill(false);

// let result = Infinity;
// const dfs = (start, depth, visited, cur, weight) => {
//   if (depth === n - 1) {
//     if (graph[cur][start] !== 0) {
//       result = Math.min(weight + graph[cur][start], result);
//     }
//     return;
//   }
//   for (let i = 0; i < n; i++) {
//     if (!visited[i] && graph[cur][i] !== 0) {
//       // 방문 안했고 길 있으면
//       visited[i] = true;
//       dfs(start, depth + 1, visited, i, weight + graph[cur][i]);
//       visited[i] = false;
//     }
//   }
// };

// // 첫번째 노드부터 시작
// visited[0] = true;
// dfs(0, 0, visited, 0, 0);

// log(result);

// 풀이 2
// 2-n까지의 수를 하나씩 고르는 모든 순열 계산
const n = Number(input[0]);
const graph = [Array(n + 1).fill(0)];
const restGraph = input
  .slice(1)
  .map((line) => [0, ...line.split(" ").map(Number)]);
graph.push(...restGraph);

let visited = new Array(11).fill(false);
let result = [];
let minVal = 1e9;
dfs(0);
log(minVal);

function dfs(depth) {
  if (depth === n - 1) {
    let totalCost = 0;
    let cur = 1;
    for (let i = 0; i < n - 1; i++) {
      let next = result[i];
      let cost = graph[cur][next];
      if (cost === 0) return;
      totalCost += cost;
      cur = next;
    }
    let cost = graph[cur][1];
    if (cost === 0) return;
    totalCost += cost;
    minVal = Math.min(minVal, totalCost);
  }
  for (let i = 2; i <= n; i++) {
    if (visited[i]) continue;
    result.push(i);
    visited[i] = true;
    dfs(depth + 1);
    result.pop();
    visited[i] = false;
  }
}
