const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

const [n, m] = input[0].split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i < n; i++) {
  let [a, b, cost] = input[i].split(" ").map(Number);
  graph[a].push([b, cost]);
  graph[b].push([a, cost]);
}

const dfs = (from, dist, visited, distance) => {
  if (visited[from]) return; // 각 노드를 한번씩만 방문하게끔 
  visited[from] = true; // 방문처리
  distance[from] = dist;
  for (let [to, cost] of graph[from]) {
    dfs(to, dist + cost, visited, distance);
  }
};

// 각 쿼리 처리. (쿼리마다 dfs 수행 및 방문처리/거리 배열 초기화)
for (let i = 0; i < m; i++) {
  let [from, to] = input[n + i].split(" ").map(Number);
  const visited = new Array(n + 1).fill(false);
  const distance = new Array(n + 1).fill(-1);
  dfs(from, 0, visited, distance); // from 노드부터 모든 노드까지의 거리 계산
  log(distance[to]); // to 노드까지의 최단거리 출력
}