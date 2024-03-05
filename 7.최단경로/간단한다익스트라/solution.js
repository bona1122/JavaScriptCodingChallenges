///////////////////////////// 시간복잡도 O(V^2) -> 노드 수가 5000개 이하일 때 사용
const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const start = Number(input[1]);

const graph = Array(n + 1)
  .fill()
  .map(() => []);

const visited = Array(n + 1).fill(false);
const distance = Array(n + 1).fill(Infinity);

for (let i = 2; i < input.length; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  graph[a].push({ dest: b, weight: c });
}

const getSmallestNode = () => {
  let minValue = Infinity;
  let index = 0;
  for (let i = 1; i < n + 1; i++) {
    if (distance[i] < minValue && !visited[i]) {
      minValue = distance[i];
      index = i;
    }
  }
  return index;
};

const dijkstra = (start) => {
  distance[start] = 0;
  visited[start] = true;
  graph[start].forEach((path) => {
    distance[path.dest] = path.weight;
  });
  for (let i = 0; i < n - 1; i++) {
    const now = getSmallestNode();
    visited[now] = true;
    graph[now].forEach((path) => {
      const cost = distance[now] + path.weight;
      if (cost < distance[path.dest]) {
        distance[path.dest] = cost;
      }
    });
  }
};

dijkstra(start);

distance.forEach((el) => {
  el === Infinity ? console.log("INFINITY") : console.log(el);
});
