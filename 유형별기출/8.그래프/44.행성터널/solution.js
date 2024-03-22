const path = require("path");
const fs = require("fs");
const input = fs
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

const findParent = (parent, x) => {
  if (parent[x] !== x) {
    parent[x] = findParent(parent, parent[x]);
  }
  return parent[x];
};

const unionParent = (parent, a, b) => {
  a = findParent(parent, a);
  b = findParent(parent, b);
  a > b ? (parent[a] = b) : (parent[b] = a);
};
const n = Number(input[0]);
const planet = [];
const line = [];
const parent = Array(n)
  .fill(0)
  .map((_, idx) => idx);

// for (let i = 1; i <= n; i++) {
//   const [x, y, z] = input[i].split(" ").map(Number);
//   planet.push({ x, y, z });
// }

// for (let i = 0; i < n; i++) {
//   let cost = 0;
//   for (let j = i + 1; j < n; j++) {
//     const x = Math.abs(planet[i].x - planet[j].x);
//     const y = Math.abs(planet[i].y - planet[j].y);
//     const z = Math.abs(planet[i].z - planet[j].z);
//     const minValue = Math.min(x, y, z);
//     line.push({ v1: i, v2: j, cost: minValue });
//   }
// }
// line.sort((a, b) => a.cost - b.cost);

// let addedLineCnt = 0;
// let result = 0;
// while (true) {
//   if (addedLineCnt === n - 1) break;
//   const { v1, v2, cost } = line.shift();
//   if (findParent(parent, v1) !== findParent(parent, v2)) {
//     unionParent(parent, v1, v2);
//     addedLineCnt++;
//     result += cost;
//   }
// }
// console.log(result);

////////////////// 위의 방식은 모든 간선을 고려하는 점에서 비효율적임.
const x = [];
const y = [];
const z = [];

for (let i = 1; i <= n; i++) {
  const [dx, dy, dz] = input[i].split(" ").map(Number);
  x.push(dx);
  y.push(dy);
  z.push(dz);
}

x.sort((a, b) => a - b);
y.sort((a, b) => a - b);
z.sort((a, b) => a - b);

for (let i = 0; i < n - 1; i++) {
  line.push({ v1: i, v2: i + 1, cost: x[i + 1] - x[i] });
  line.push({ v1: i, v2: i + 1, cost: y[i + 1] - y[i] });
  line.push({ v1: i, v2: i + 1, cost: z[i + 1] - z[i] });
}

line.sort((a, b) => a.cost - b.cost);

let addedLineCnt = 0;
let result = 0;
while (true) {
  if (addedLineCnt === n - 1) break;
  const { v1, v2, cost } = line.shift();
  if (findParent(parent, v1) !== findParent(parent, v2)) {
    unionParent(parent, v1, v2);
    addedLineCnt++;
    result += cost;
  }
}
console.log(result);
