const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split("\n");

const findParent = (parent, x) => {
  if (parent[x] !== x) {
    return findParent(parent, parent[x]);
  }
  return x;
};

const unionParent = (parent, a, b) => {
  a = findParent(parent, a);
  b = findParent(parent, b);
  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
};

const [v, e] = input[0].split(" ").map(Number);
const parent = Array(v + 1) // 부모테이블 만들고 초기화(부모가 자기 자신)
  .fill(0)
  .map((_, i) => i);

for (let i = 1; i < e + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  unionParent(parent, a, b);
}

process.stdout.write("각 원소가 속한 집합: ");
for (let i = 1; i < v + 1; i++) {
  process.stdout.write(findParent(parent, i) + " ");
}

process.stdout.write("\n부모 테이블: ");
for (let i = 1; i < v + 1; i++) {
  process.stdout.write(parent[i] + " ");
}
