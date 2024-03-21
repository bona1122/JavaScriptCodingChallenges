const path = require("path");
const fs = require("fs");
const input = fs
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);

const distance = Array(n + 1).fill(Infinity);
distance[1] = 0; // 1번 헛간에서 1번 헛간으로 가는 거리는 0

const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i < m + 1; i++) {
  // 연결 정보
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const queue = [1];
while (queue.length) {
  queue.sort((a, b) => a - b);
  const now = queue.shift();
  graph[now].forEach((node) => {
    if (distance[node] > distance[now] + 1) {
      distance[node] = distance[now] + 1;
      queue.push(node);
    }
  });
}

let maxNode = 0;
let maxDistance = 0;
let result = [];
for (let i = 1; i < n + 1; i++) {
  if (maxDistance < distance[i]) {
    maxNode = i;
    maxDistance = distance[i];
    result = [maxNode];
  } else if (maxDistance === distance[i]) {
    result.push(i);
  }
}

console.log(maxNode, maxDistance, result.length);
