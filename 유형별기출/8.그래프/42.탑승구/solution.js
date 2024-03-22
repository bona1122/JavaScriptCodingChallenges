const path = require("path");
const fs = require("fs");
const input = fs
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

const g = Number(input[0]);
const p = Number(input[1]);

const findParent = (parent, x) => {
  if (parent[x] != x) {
    parent[x] = findParent(parent, parent[x]);
  }
  return parent[x];
};

const unionParent = (parent, a, b) => {
  a = findParent(parent, a);
  b = findParent(parent, b);
  a > b ? (parent[a] = b) : (parent[b] = a);
};

const parent = Array(g + 1)
  .fill(0)
  .map((_, i) => i);

let result = 0;
for (let i = 2; i < p + 1; i++) {
  const gi = Number(input[i]);
  const giParent = findParent(parent, gi);
  if (giParent === 0) break;
  unionParent(parent, giParent, giParent - 1);
  result++;
}

console.log(result);
