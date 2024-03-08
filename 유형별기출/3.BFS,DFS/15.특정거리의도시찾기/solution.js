// 그래프에서 모든 간선의 비용이 동일할 때는 너비우선탐색을 활용하여 최단거리를 찾을 수 있다. 

const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"))
  .toString()
  .trim()
  .split("\n");

const [n, m, k, x] = input[0].split(" ").map(Number);
const graph = Array(n + 1)
  .fill()
  .map(() => []);
for (let i = 1; i < m + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
}

const distance = Array(n + 1).fill(-1);
distance[x] = 0;

const q = [x];
while (q.length) {
  const now = q.shift();
  graph[now].forEach(v => {
    if(distance[v] === -1){
      distance[v] = distance[now] + 1;
      q.push(v);
    }
  });
}

let check = false;
for (let i = 1; i < n + 1; i++) {
  if (distance[i] === k) {
    console.log(i);
    check = true;
  }
}
if(!check) console.log(-1);
