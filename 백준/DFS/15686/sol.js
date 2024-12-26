const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

// 치킨집 중, m개를 고르고, 도시의 치킨 거리 최솟값 구하기
const [n, m] = input[0].split(" ").map(Number);
const graph = new Array(n);
for (let i = 0; i < n; i++) {
  graph[i] = input[i + 1].split(" ").map(Number);
}
let chickens = [];
let houses = [];
let visited = Array(chickens.length).fill(false);
let answer = Infinity;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === 2) chickens.push([i, j]);
    else if (graph[i][j] === 1) houses.push([i, j]);
  }
}

const totalDist = () => {
  let result = 0;
  for ([x, y] of houses) {
    // 각집마다 최소 치킨거리 계산
    let dist = Infinity;
    for (let i = 0; i < visited.length; i++) {
      if (visited[i]) {
        let [cx, cy] = chickens[i];
        let dx = Math.abs(cx - x);
        let dy = Math.abs(cy - y);
        dist = Math.min(dist, dx + dy);
      }
    }
    result += dist;
  }
  return result;
};

const dfs = (depth, start) => {
  if (depth === m) {
    answer = Math.min(answer, totalDist());
    return;
  }
  for (let i = start; i < chickens.length; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    dfs(depth + 1, i + 1);
    visited[i] = false;
  }
};

dfs(0, 0);
log(answer);
