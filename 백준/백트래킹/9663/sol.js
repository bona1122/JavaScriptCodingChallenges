const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString();
const log = console.log;

const n = +input;
const selected = []; // 선택된 인데스 좌표들
let result = 0;

const canSelect = (row, col) => {
  for (let [sr, sc] of selected) {
    if (row === sr || col === sc) return false; // 같은 행 or 열에 있는지
    let rowDiff = Math.abs(row - sr);
    let colDiff = Math.abs(col - sc);
    if (colDiff === rowDiff) return false; // 대각선에 있는지
  }
  return true;
};
const dfs = (depth, curRow) => {
  if (depth === n) {
    result++;
    return;
  }
  for (let i = 0; i < n; i++) {
    // 첫번째 열부터 선택하기
    if (canSelect(curRow, i)) {
      selected.push([curRow, i]);
      dfs(depth + 1, curRow + 1);
      selected.pop();
    }
  }
};

dfs(0, 0); // 댑스 0, 0행(첫번째 행부터 시작)
log(result);
