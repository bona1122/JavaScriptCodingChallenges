// 위상정렬의 시간 복잡도는 O(V + E)

const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .split("\n");

const [v, e] = input[0].split(" ").map(Number);
const indegree = Array(v + 1).fill(0); // 모든 노드에 대한 진입차수는 0으로 초기화

const graph = Array.from({ length: v + 1 }, () => []); // 각 노드에 연결된 간선 정보를 담기 위한 연결 리스트 초기화

for (let i = 1; i < e + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b); // 정점 A에서 B로 이동 가능
  indegree[b] += 1; // 진입 차수 1 증가
}

// 위상 정렬 함수
const topologySort = () => {
  const result = [];
  const q = [];

  // 처음 시작할 때는 진입차수가 0인 노드를 큐에 삽입
  for (let i = 1; i < v + 1; i++) {
    if (indegree[i] === 0) q.push(i);
  }

  // 큐가 빌 때까지 반복
  while (q.length) {
    const now = q.shift();
    result.push(now);
    graph[now].forEach((v) => {
      indegree[v] -= 1;
      if (indegree[v] === 0) q.push(v);
    });
  }

  // 위상 정렬을 수행한 결과 출력
  console.log(result.join(" "));
};

topologySort();

var obj = {
  logThis: function () {
    console.log(this);
  },
  logThisLater: function () {
    setTimeout(this.logThis, 500);
  },
};

obj.logThisLater();
