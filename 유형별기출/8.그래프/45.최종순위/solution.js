const path = require("path");
const fs = require("fs");
const input = fs
  .readFileSync(path.resolve(__dirname, "input1.txt"))
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const indegree = Array(n + 1).fill(0);
const graph = Array(n + 1)
  .fill(0)
  .map(() => Array(n + 1).fill(Infinity));
  
const lastData = input[1].split(" ").map(Number); // 작년 순위 데이터
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    graph[lastData[i]][lastData[j]] = 1;
    indegree[lastData[j]]++;
  }
}

const m = Number(input[2]);
for (let i = 3; i < m + 3; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  // 간선 방향 뒤집기
  if (graph[a][b] !== Infinity) {
    graph[a][b] = Infinity;
    graph[b][a] = 1;
    indegree[a] += 1;
    indegree[b] -= 1;
  } else {
    graph[a][b] = 1;
    graph[b][a] = Infinity;
    indegree[a] -= 1;
    indegree[b] += 1;
  }
}

const result = [];
const q = [];

for (let i = 1; i <= n; i++) {
  if (indegree[i] === 0) {
    q.push(i);
  }
}

let certain = true;
let cycle = false;

for (let i = 0; i < n; i++) {
  if (q.length === 0) {
    cycle = true;
    break;
  }
  if (q.length >= 2) {
    certain = false;
    break;
  }
  const now = q.shift();
  result.push(now);
  for (let j = 1; j <= n; j++) {
    if (graph[now][j] === 1) {
      indegree[j] -= 1;
      if (indegree[j] === 0) q.push(j);
    }
  }
}

if (cycle) console.log("IMPOSSIBLE");
else if (!certain) console.log("?");
else {
  console.log(result);
}
