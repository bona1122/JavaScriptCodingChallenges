const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

// 풀이 1
// 모든 조합을 구하기. -> 댑스는 각재료의 추가여부와 관련 -> n 될것
// const n = +input.shift();
// const ingredient = input.map((row) => row.split(" ").map(Number));
// const selected = [];
// let result = 1e9;

// const dfs = (depth, startIdx) => {
//   if (depth === n) {
//     if (selected.length === 0) return;
//     let totalSour = 1;
//     let totalBitter = 0;
//     for (const i of selected) {
//       const [sour, bitter] = ingredient[i];
//       totalSour *= sour;
//       totalBitter += bitter;
//     }
//     result = Math.min(result, Math.abs(totalBitter - totalSour));
//     return;
//   }
//   if (startIdx < n) {
//     selected.push(startIdx);
//     dfs(depth + 1, startIdx + 1);
//     selected.pop();
//     dfs(depth, startIdx + 1);
//   }
// };

// dfs(0, 0);
// log(result);

// 풀이 2
// let n = Number(input[0]);
// let arr = [];
// for (let i = 1; i <= n; i++) {
//   arr.push(input[i].split(" ").map(Number));
// }
// let visited = new Array(n).fill(false);
// let result = [];
// let answer = 1e9;
// function dfs(depth, start) {
//   if (depth >= 1) {
//     let totalX = 1;
//     let totalY = 0;
//     for (let i of result) {
//       let [x, y] = arr[i];
//       totalX *= x;
//       totalY += y;
//     }
//     answer = Math.min(answer, Math.abs(totalX - totalY));
//   }
//   for (let i = start; i < n; i++) {
//     if (visited[i]) continue;
//     visited[i] = true;
//     result.push(i);
//     dfs(depth + 1, i + 1);
//     visited[i] = false;
//     result.pop();
//   }
// }

// dfs(0, 0);
// log(answer);

// 풀이 3
const n = +input.shift();
const ingredients = input.map((row) => row.split(" ").map(Number));
let minDifference = Infinity;

// 가능한 모든 조합을 비트마스크로 표현
for (let mask = 1; mask < 1 << n; mask++) {
  let sourTotal = 1;
  let bitterTotal = 0;

  for (let i = 0; i < n; i++) {
    if (mask & (1 << i)) {
      // i번째 비트가 1이면 재료 포함된 것
      sourTotal *= ingredients[i][0];
      bitterTotal += ingredients[i][1];
    }
  }

  minDifference = Math.min(minDifference, Math.abs(sourTotal - bitterTotal));
}

log(minDifference);
