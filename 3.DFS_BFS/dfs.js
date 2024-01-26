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

// 스택을 이용하는 것이 정석
const dfs = (graph, v, visited) => {
  visited[v] = true;
  process.stdout.write(v + " ");
  graph[v].forEach((el) => {
    if (!visited[el]) {
      dfs(graph, el, visited);
    }
  });
};

dfs(graph, 1, visited);
