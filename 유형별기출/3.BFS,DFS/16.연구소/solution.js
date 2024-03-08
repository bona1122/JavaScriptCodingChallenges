const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"))
  .toString()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = Array(n);
const temp = Array(n)
  .fill(0)
  .map(() => Array(m).fill(0));

for (let i = 1; i < n + 1; i++) {
  const row = input[i].split(" ").map(Number);
  graph[i - 1] = row;
}

// 4가지 이동방향 정의
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const virus = (x, y) => {
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
      if (temp[nx][ny] === 0) {
        temp[nx][ny] = 2;
        virus(nx, ny);
      }
    }
  }
};

const getScore = () => {
  let score = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (temp[i][j] === 0) {
        score += 1;
      }
    }
  }
  return score;
};

const dfs = (count) => {
  if (count === 3) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        temp[i][j] = graph[i][j];
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (temp[i][j] === 2) {
          virus(i, j);
        }
      }
    }

    return getScore();
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 0) {
        graph[i][j] = 1;
        count += 1;
        result = Math.max(result, dfs(count));
        graph[i][j] = 0;
        count -= 1;
      }
    }
  }

  return result;
};

console.log(dfs(0));
