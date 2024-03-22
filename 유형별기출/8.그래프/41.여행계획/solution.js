const path = require("path");
const fs = require("fs");
const input = fs
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

const findParent = (parent, x) => {
  // 특정 원소가 속한 집합 찾기
  if (parent[x] != x)
    // 루트 노드가 아니라면, 루트 노드를 찾을 때까지 재귀적으로 호출
    parent[x] = findParent(parent, parent[x]);
  return parent[x];
};

const unionParent = (parent, a, b) => {
  // 두 원소가 속한 집합을 합치기
  a = findParent(parent, a);
  b = findParent(parent, b);
  a < b ? (parent[b] = a) : (parent[a] = b);
};

const [n, m] = input[0].split(" ").map(Number);
const plan = input[input.length - 1].split(" ").map(Number);
const parent = Array(n + 1)
  .fill(0)
  .map((_, idx) => idx);
for (let i = 1; i < input.length; i++) {
  const row = input[i].split(" ").map(Number);
  row.forEach((v, idx) => {
    if (v === 1) {
      unionParent(parent, i, idx + 1);
    }
  });
}

let result = true;
for (let i = 0; i < m - 1; i++) {
  if (findParent(parent, plan[i]) !== findParent(parent, plan[i + 1])) {
    result = false;
  }
}

console.log(result ? "YES" : "NO");
