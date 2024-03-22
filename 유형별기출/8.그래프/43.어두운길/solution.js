const path = require("path");
const fs = require("fs");
const input = fs
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);

const parent = Array(n + 1)
  .fill(0)
  .map((_, i) => i);

const findParent = (parent, x) => {
  // 특정 원소가 속한 집합 찾기
  if (parent[x] !== x) {
    parent[x] = findParent(parent, parent[x]);
  }
  return parent[x];
};

const unionParent = (parent, a, b) => {
  a = findParent(parent, a);
  b = findParent(parent, b);
  a < b ? (parent[b] = a) : (parent[a] = b);
};

const line = [];
// 크루스칼 알고리즘을 이용한 최소 신장 트리 구하는 문제
for (let i = 1; i <= m; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  line.push({ v1: a, v2: b, cost: c });
}
line.sort((a, b) => a.cost - b.cost);
// console.log(line);

let result = 0;
for (let i = 0; i < m; i++) {
  const { v1, v2, cost } = line.shift();
  if (findParent(parent, v1) === findParent(parent, v2)) { // 사이클이 발생하는 경우, 간선 제외
    result += cost;
  } else {
    unionParent(parent, v1, v2);
  }
}

console.log(result);
