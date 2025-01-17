import { Queue } from "./Queue.js";

function bfs(graph, start, visited) {
  let queue = new Queue();
  // 시작노드 방문처리 + 큐에 삽입
  queue.enqueue(start);
  visited[start] = true;
  // 큐가 빌 때까지 반복
  while (queue.getLength() !== 0) {
    // 큐에서 하나 빼기
    const v = queue.dequeue();
    console.log(v);
    // 인접 노드 방문처리 + 큐에 삽입
    for (let i of graph[v]) {
      if (!visited[i]) {
        queue.enqueue(i);
        visited[i] = true;
      }
    }
  }
}

let graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]];
let visited = Array(9).fill(false);
bfs(graph, 1, visited);
