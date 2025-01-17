const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

// 벽은 꼭 3개를 세워야함
// 벽세개를 짓고, 안전영역 크기의 최댓삾 구하기
// 0(빈칸) 중 3개를 골라서 바이러스 퍼지고 안전영역(0)구하기
const [n, m] = input.shift().split(" ").map(Number);
const graph = input.map((row) => row.split(" ").map(Number));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let result = 0;

const countSafeArea = (g) => {
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (g[i][j] === 0) cnt++;
    }
  }
  return cnt;
};

const virus = (x, y, graph) => {
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (graph[nx][ny] === 0) {
      graph[nx][ny] = 2;
      virus(nx, ny, graph);
    }
  }
};

// 3개의 벽 세우기(조합)
const combination = (depth) => {
  if (depth === 3) {
    let g = graph.map((row) => [...row]);
    // 바이러스 퍼뜨리기
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (g[i][j] === 2) {
          virus(i, j, g);
        }
      }
    }
    // 안전 영역 크기 계산 및 최댓값 갱신
    result = Math.max(result, countSafeArea(g));
    return;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 0) {
        graph[i][j] = 1;
        combination(depth + 1);
        graph[i][j] = 0;
      }
    }
  }
};
combination(0);
log(result);