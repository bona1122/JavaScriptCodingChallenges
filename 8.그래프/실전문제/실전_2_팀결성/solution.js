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

for (let i = 1; i < m + 1; i++) {
  const [calc, a, b] = input[i].split(" ").map(Number);
  if (calc === 0) {
    unionParent(parent, a, b);
  } else {
    findParent(parent, a) === findParent(parent, b)
      ? console.log("YES")
      : console.log("NO");
  }
}
