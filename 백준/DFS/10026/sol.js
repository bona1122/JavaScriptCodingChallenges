const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

const n = +input.shift();
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let graph = input.map((item) => item.split(""));
let visited = Array.from({ length: n }, () => Array(n).fill(false));
/*
방법1: 적록색약 여부를 받고 visited 를 이용

const result = [];
let visited = Array.from({ length: n }, () => Array(n).fill(false));

const dfs = (x, y, color, isColorBlind = false) => {
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= n || ny >= n || visited[nx][ny]) continue;

    // 적록색약이 아닌 경우
    if (!isColorBlind && graph[nx][ny] === color) {
      dfs(nx, ny, color, isColorBlind);
    }
    // 적록색약인 경우
    else if (isColorBlind) {
      if (color === "B") {
        if (graph[nx][ny] === color) {
          dfs(nx, ny, color, isColorBlind);
        }
      } else if (graph[nx][ny] === "R" || graph[nx][ny] === "G") {
        dfs(nx, ny, color, isColorBlind);
      }
    }
  }
};

for (let i = 0; i < 2; i++) {
  let sum = 0;
  visited = Array.from({ length: n }, () => Array(n).fill(false));
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      if (!visited[j][k]) {
        dfs(j, k, graph[j][k], i === 1);
        sum++;
      }
    }
  }
  result.push(sum);
}
log(result.join(" "));
*/

// 방법2: dfs호출 후, R->G로 변경 후 다시 dfs호출
const dfs = (x, y) => {
  if (!visited[x][y]) {
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
      if (graph[x][y] === graph[nx][ny]) dfs(nx, ny);
    }
  }
};

let result1 = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j]) {
      dfs(i, j);
      result1++;
    }
  }
}

// R -> G 변환하고 다시 수행
let result2 = 0;
visited = visited.map((row) => row.map((col) => false));
graph = graph.map((row) => row.map((item) => (item === "R" ? "G" : item)));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j]) {
      dfs(i, j);
      result2++;
    }
  }
}

log(result1 + " " + result2);
