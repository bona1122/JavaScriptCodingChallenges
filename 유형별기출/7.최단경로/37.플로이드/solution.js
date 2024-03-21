const path = require("path");
const fs = require("fs");
const input = fs
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

// 플로이드 워셜 알고리즘
// n 이 100이하이므로 플로이드 워셜 알고리즘을 사용해도 된다.
const n = parseInt(input[0]);
const m = parseInt(input[1]);

const graph = Array(n + 1)
  .fill()
  .map(() => Array(n + 1).fill(Infinity));

for (let i = 1; i < n + 1; i++) {
  graph[i][i] = 0;
}

for (let i = 2; i < input.length; i++) {
  const [a, b, c] = input[i].split(" ").map((el) => parseInt(el));
  graph[a][b] = Math.min(graph[a][b], c);
}

for (let k = 1; k < n + 1; k++) {
  for (let a = 1; a < n + 1; a++) {
    for (let b = 1; b < n + 1; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
    }
  }
}
console.log(graph);
