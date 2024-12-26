const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

// 방법 1
/*
const visited = new Array(10).fill(false);
const selected = [];
const available = [];
const k = +input[0];
const signs = [0, ...input[1].split(" ")];

const dfs = (depth, start) => {
  if (depth === k + 1) {
    available.push(selected.join(""));
    return;
  }
  for (let i = 0; i <= 9; i++) {
    if (visited[i]) continue;
    if (
      (signs[depth] === "<" && start < i) ||
      (signs[depth] === ">" && start > i)
    ) {
      visited[i] = true;
      selected.push(i);
      dfs(depth + 1, i);
      visited[i] = false;
      selected.pop();
    }
  }
};

for (let i = 0; i <= 9; i++) {
  visited[i] = true;
  selected.push(i);
  dfs(1, i);
  visited[i] = false;
  selected.pop();
}
available.sort();

log(available[available.length - 1]);
log(available[0]);
*/

// 방법2
const visited = new Array(10).fill(false);
const selected = [];
const k = +input[0];
const signs = input[1].split(" ");
let first = "";
let current = "";

const dfs = (depth) => {
  if (depth === k + 1) {
    let available = true;
    for (let i = 0; i < k; i++) {
      if (signs[i] === "<" && selected[i] > selected[i + 1]) {
        available = false;
        break;
      } else if (signs[i] === ">" && selected[i] < selected[i + 1]) {
        available = false;
        break;
      }
    }
    if (available) {
      current = selected.join("");
      if (first === "") first = current;
    }
  }
  for (let i = 0; i <= 9; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(i);
    dfs(depth + 1);
    selected.pop();
    visited[i] = false;
  }
};

dfs(0);
log(current + "\n" + first);
