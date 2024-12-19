const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

const [n, m] = input[0].split(" ").map((i) => +i);

const visited = Array(n + 1).fill(false);
const selected = Array(m).fill(0);
let result = "";

const dfs = (idx) => {
  if (idx === m) {
    result += selected.join(" ") + "\n";
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      selected[idx] = i;
      visited[i] = true;
      dfs(idx + 1);
      visited[i] = false;
    }
  }
};

dfs(0);
log(result);