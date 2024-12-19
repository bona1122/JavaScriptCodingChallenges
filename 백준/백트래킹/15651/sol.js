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
// 1~n까지 중 중복괜찮게 m개 고르기

let arr = Array.from({ length: n }, (_, i) => i + 1);
let selected = [];
let answer = "";

const dfs = (arr, depth) => {
  if (depth === m) {
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + " ";
    answer += "\n";
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    selected.push(i);
    dfs(arr, depth + 1);
    selected.pop();
  }
};

dfs(arr, 0);
log(answer);
