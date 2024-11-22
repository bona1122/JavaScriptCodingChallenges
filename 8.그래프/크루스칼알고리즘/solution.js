const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
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
  if (a < b) parent[b] = a;
  else parent[a] = b;
};

const [v, e] = input[0].split(" ").map(Number);
const parent = Array(v + 1)
  .fill(0)
  .map((_, i) => i);

const edges = [];
let result = 0;

for (let i = 1; i < e + 1; i++) {
  const [v1, v2, cost] = input[i].split(" ").map(Number);
  edges.push({
    cost,
    v1,
    v2,
  });
}

edges.sort((a, b) => a.cost - b.cost);

edges.forEach((edge) => {
  const { cost, v1, v2 } = edge;
  if (findParent(parent, v1) !== findParent(parent, v2)) {
    unionParent(parent, v1, v2);
    result += cost;
  }
});

console.log(result);

function isPrime(n){
  if(n < 2) return false; // 2보다 작은거 쳐내기
  if(n === 2) return true; // 2쳐내기
  if(n % 2 === 0) return false; //짝수쳐내기

  for(let i = 3; i <= Math.sqrt(n); i +=2){
    if(n % i === 0) return false;
  }
  return true;
}