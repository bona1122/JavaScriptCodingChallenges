const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

const [row, col] = input.shift().split(" ").map(Number);
const graph = input.map((row) => row.split(""));

// const selected = new Set();
const visited = new Array(26).fill(false);

const dir = [
  [1, 0],
  [-1, 0],
  [0, -1],
  [0, 1],
];
let result = 0;
const dfs = (x, y, cnt) => {
  result = Math.max(result, cnt);
  // 4방향 중, 갈 수 있으면 가기.
  for (let [r, c] of dir) {
    let newX = x + r;
    let newY = y + c;
    if (newX <= -1 || newX >= row || newY <= -1 || newY >= col) continue;
    // if (!selected.has(graph[newX][newY])) {
    //   selected.add(graph[newX][newY]);
    //   dfs(newX, newY, cnt + 1);
    //   selected.delete(graph[newX][newY]);
    // }

    const alphabetIndex = graph[newX][newY].charCodeAt(0) - "A".charCodeAt(0);
    if (!visited[alphabetIndex]) {
      visited[alphabetIndex] = true;
      dfs(newX, newY, cnt + 1);
      visited[alphabetIndex] = false;
    }
  }
};

// selected.add(graph[0][0]);
const startAlphabetIndex = graph[0][0].charCodeAt(0) - "A".charCodeAt(0);
visited[startAlphabetIndex] = true;
dfs(0, 0, 1);
log(result);
