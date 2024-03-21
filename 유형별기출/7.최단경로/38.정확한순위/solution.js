const path = require("path");
const fs = require("fs");
const input = fs
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
// n이 500이하이므로 플로이드 워셜 알고리즘을 사용해도 된다.

const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

for (let i = 1; i < n + 1; i++) {
  graph[i][i] = 0;
}

for (let i = 1; i < m + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a][b] = 1;
}

for (let k = 1; k < n + 1; k++) {
  for (let a = 1; a < n + 1; a++) {
    for (let b = 1; b < n + 1; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
    }
  }
}

let result = 0;
for (let i = 1; i < n + 1; i++) {
  // 각 학생을 확인
  let count = 0;
  for (let j = 1; j < n + 1; j++) {
    if (graph[i][j] !== Infinity || graph[j][i] !== Infinity) {
      count++;
    }
  }
  if (count === n) {
    result++;
  }
}

console.log(result);
