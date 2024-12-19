const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

input.pop();
const testCase = input.map((row) => {
  const [n, ...arr] = row.split(" ").map(Number);
  return [n, arr];
});

const dfs = (depth, start, visited, selected, arr) => {
  if (depth === 6) {
    let result = [];
    for (let i of selected) result.push(arr[i]);
    log(result.join(" "));
    return;
  }
  for (let i = start; i < arr.length; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(i);
    dfs(depth + 1, i + 1, visited, selected, arr);
    visited[i] = false;
    selected.pop();
  }
};

testCase.forEach((test) => {
  let [n, arr] = test;
  let visited = new Array(n).fill(false);
  let selected = [];
  dfs(0, 0, visited, selected, arr);
  log();
});
