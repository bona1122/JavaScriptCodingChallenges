const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

// 그래프가 주어진 경우, 트리의 개수 구하기
// 트리는 사이클이없는 연결 요소.

const hasCycle = (v, prev, visited, graph) => {
  visited[v] = true;
  for (let node of graph[v]) {
    if (!visited[node]) {
      if (hasCycle(node, v, visited, graph)) return true; // 방문 안했고, 다음 노드 기준으로 사이클이면
    }
    // 방문했었고, 직전 노드이면 제외(무방향 그래프)
    else if (node !== prev) return true; // 방문했었고, 직전 노드가 아니면
  }
  return false;
};

let line = 0;
let testNum = 1;
while (true) {
  let [n, m] = input[line].split(" ").map(Number);
  let result = `Case ${testNum}: `;
  if (n === 0) break;
  let graph = Array.from({ length: n + 1 }, () => []);
  for (let i = 1; i <= m; i++) {
    let [a, b] = input[line + i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }
  let visited = new Array(n + 1).fill(false);
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      if (!hasCycle(i, 0, visited, graph)) cnt++;
    }
  }
  switch (cnt) {
    case 0:
      result += "No trees.";
      break;
    case 1:
      result += "There is one tree.";
      break;
    default:
      result += `A forest of ${cnt} trees.`;
  }
  log(result);
  line += m + 1;
  testNum++;
}
