// 큐를 사용하는 것이 정석, 일반적인 경우에 실행 수행 시간이 dfs보다 좋은 편이다.

const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];
let visited = Array.from({ length: 9 }, (_, i) => false);
let queue = [];

const bfs = (graph, v, visited) => {
  // 먼저 방문 처리하고 큐에 넣기
  visited[v] = true;
  queue.push(v);

  // 큐가 빌 때까지 반복
  while (queue.length != 0) {
    let shifted_item = queue.shift(); // 큐에서 꺼내고, 연결된 안가본 것들 있으면 방문 후, 큐에 넣기.
    process.stdout.write(shifted_item + " ");
    graph[shifted_item].forEach((el) => {
      if (!visited[el]) {
        visited[el] = true;
        queue.push(el);
      }
    });
  }
};

bfs(graph, 1, visited);