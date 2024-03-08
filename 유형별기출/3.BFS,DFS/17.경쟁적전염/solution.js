const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"))
  .toString()
  .trim()
  .split("\n");

const [n, k] = input[0].split(" ").map(Number);
const virusData = [];
const graph = Array(n);
for (let i = 0; i < n; i++) {
  graph[i] = input[i + 1].split(" ").map(Number);
  for (let j = 0; j < n; j++) {
    if (graph[i][j] !== 0)
      virusData.push({
        virus: graph[i][j],
        time: 0,
        x: i,
        y: j,
      });
  }
}

virusData.sort((a, b) => a.virus - b.virus);
// console.log(virusData);

const [row, col, sec] = input[input.length - 1].split(" ").map(Number);
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const q = virusData;
// BFS 진행
while (q.length) {
  const { virus, time, x, y } = q.shift();
  if (sec === time) break;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
      if (graph[nx][ny] === 0) {
        graph[nx][ny] = virus;
        q.push({ virus, time: time + 1, x: nx, y: ny });
      }
    }
  }
}

console.log(graph[row - 1][col - 1]);
