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

const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const parent = Array(n + 1)
  .fill(0)
  .map((_, i) => i);
const edges = [];
let last = 0;
let result = 0;

for (let i = 1; i <= m; i++) {
  const [v1, v2, cost] = input[i].split(" ").map(Number);
  edges.push({ cost, v1, v2 });
}
edges.sort((a, b) => a.cost - b.cost);
edges.forEach((edge) => {
  const { cost, v1, v2 } = edge;
  if (findParent(parent, v1) !== findParent(parent, v2)) {
    unionParent(parent, v1, v2);
    result += cost;
    last = cost;
  }
});

console.log(result - last);
