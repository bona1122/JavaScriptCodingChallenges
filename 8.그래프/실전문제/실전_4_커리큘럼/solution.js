const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .split("\n");

const n = Number(input[0]);
const indegree = Array(n + 1).fill(0);
const graph = Array.from({ length: n + 1 }, () => []);
const time = Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
  const data = input[i].split(" ").map(Number);
  time[i] = data[0];
  for (let j = 1; j < data.length - 1; j++) {
    graph[data[j]].push(i);
    indegree[i] += 1;
  }
}

const topologySort = () => {
  const result = [...time];
  const queue = [];
  for (let i = 1; i <= n; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    const now = queue.shift();
    graph[now].forEach((i) => {
      result[i] = Math.max(result[i], result[now] + time[i]);
      indegree[i] -= 1;
      if (indegree[i] === 0) {
        queue.push(i);
      }
    });
  }

  for (let i = 1; i <= n; i++) {
    console.log(result[i]);
  }
};

topologySort();
