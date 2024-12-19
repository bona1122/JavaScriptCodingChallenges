let n = 8;
let queens = [];

function possible(x, y) {
  for (let [a, b] of queens) {
    // 이미 놓인 퀸들과 비교하며, 배치가 가능한지.
    if (a === x || b === y) return false; // 같은 행/열 불가
    if (Math.abs(a - x) === Math.abs(b - y)) return false; // 대각선 불가
  }
  return true;
}

let cnt = 0;
function dfs(row) {
  if (row === n) cnt++;
  for (let i = 0; i < n; i++) {
    // 현재 행에 존재하는 열 확인
    if (!possible(row, i)) continue;
    queens.push([row, i]);
    dfs(row + 1);
    queens.pop();
  }
}
dfs(0);
console.log(cnt);
