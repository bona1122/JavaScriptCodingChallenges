const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

// 마찬가지로 사이클을 구성하는 부분그래프에 포함된 노드를 구하는 문제
// => 방향그래프에서 사이클이 발생하는 모든 모드 구하기
const n = +input.shift();
const graph = [0, ...input.map(Number)];
const allCycles = new Set(); // 모든 사이클의 원소를 담을 Set

const dfs = (current, graph, visited, finished) => {
  visited[current] = true;
  let next = graph[current];

  if (!visited[next]) {
    dfs(next, graph, visited, finished);
  } else if (!finished[next]) {
    // 사이클 발견
    let temp = next;
    // 현재 사이클의 모든 원소를 allCycles에 추가
    while (temp !== current) {
      allCycles.add(temp);
      temp = graph[temp];
    }
    allCycles.add(current); // 현재 노드도 사이클에 포함
  }

  finished[current] = true;
};

let finished = Array(n + 1).fill(false);
let visited = Array(n + 1).fill(false);

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i, graph, visited, finished);
  }
}

const answer = Array.from(allCycles).sort((a, b) => a - b);
log(answer.length + "\n" + answer.join("\n"));