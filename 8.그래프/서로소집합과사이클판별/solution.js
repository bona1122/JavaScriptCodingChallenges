// 각 간선에 대해 union, find 함수 호출. (무향 그래프에서만 가능)
const findParent = (parent, x) => {
  if (parent[x] !== x) {
    parent[x] = findParent(parent, parent[x]);
  }
  return parent[x];
};

const unionParent = (parent, a, b) => {
  a = findParent(parent, a);
  b = findParent(parent, b);
  if (a < b) parent[b] = a;
  else parent[a] = b;
};

const path = require("path");
const fs = require("fs");
const input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .split("\n");
const [v, e] = input[0].split(" ").map(Number);
const parent = Array(v + 1)
  .fill(0)
  .map((_, i) => i);

let cycle = false;

for (let i = 1; i < e + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  if (findParent(parent, a) === findParent(parent, b)) {
    cycle = true;
    break;
  } else {
    unionParent(parent, a, b);
  }
}

console.log(cycle ? "사이클이 발생했습니다." : "사이클이 발생하지 않았습니다.");
