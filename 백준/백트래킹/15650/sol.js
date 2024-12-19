const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim();
const log = console.log;

const [n, m] = input.split(" ").map(Number); //예제: 2, 4
// n, m이 주어지면 길이가 m인 수열 찾기
// 1~n까지 중 중복없이 m개 고르기(오름차순될것)

// 풀이 1
const dfs = (cur, depth, str) => {
  if (depth === m) {
    log(str);
    return;
  }
  for (let i = cur + 1; i <= n; i++) {
    dfs(i, depth + 1, str + i + " "); 
  }
};

dfs(0, 0, "");

// 풀이 2
// let arr = [];
// for (let i = 1; i <= n; i++) arr.push(i);
// let visited = new Array(n).fill(false);
// let selected = [];

// let answer = "";
// const dfs = (arr, depth, start) => {
//   if (depth === m) {
//     let result = [];
//     for (let i of selected) result.push(arr[i]);
//     for (let x of result) answer += x + " ";
//     answer += "\n";
//     return;
//   }
//   for (let i = start; i < arr.length; i++) {
//     if (visited[i]) continue;
//     selected.push(i);
//     visited[i] = true;
//     dfs(arr, depth + 1, i + 1);
//     selected.pop();
//     visited[i] = false;
//   }
// };

// dfs(arr, 0, 0);
// log(answer);
