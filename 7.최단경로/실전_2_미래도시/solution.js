const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const [x, k] = input[input.length - 1].split(" ").map(Number);
const graph = Array(n + 1)
  .fill()
  .map(() => Array(n + 1).fill(Infinity));

for (let i = 1; i < n + 1; i++) {
  graph[i][i] = 0;
}

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a][b] = 1;
  graph[b][a] = 1;
}

for (let k = 1; k < n + 1; k++) {
  for (let a = 1; a < n + 1; a++) {
    for (let b = 1; b < n + 1; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
    }
  }
}

const distance = graph[1][k] + graph[k][x];

distance >= Infinity ? console.log(-1) : console.log(distance);
