const path = require("path");
const fs = require("fs");
const input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .split("\n");

const n = Number(input[0]);
const m = Number(input[1]);

const graph = Array(n + 1)
  .fill()
  .map(() => Array(n + 1).fill(Infinity));

for (let i = 0; i < n + 1; i++) {
  // 자기 자신으로 가는 비용은 0으로 초기화
  graph[i][i] = 0;
}

// 간선 정보 입력받기
for (let i = 2; i < input.length; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  graph[a][b] = c;
}

// 플로이드 워셜 알고리즘
for (let k = 1; k < n + 1; k++) {
  for (let a = 1; a < n + 1; a++) {
    for (let b = 1; b < n + 1; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
    }
  }
}

// 결과 출력
for (let a = 1; a < n + 1; a++) {
  for (let b = 1; b < n + 1; b++) {
    if (graph[a][b] === Infinity) {
      process.stdout.write("INFINITY ");
    } else {
      process.stdout.write(`${graph[a][b]} `);
    }
  }
  process.stdout.write("\n");
}
