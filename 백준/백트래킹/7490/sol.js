const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

// n이 주어지면 1부터 n까지의 순열에서 +,-,공백을 넣어서 0을 만드는 수식을 찾자
const testNum = +input.shift();
const testArr = input.map(Number);

const calculate = (str) => {
  str = str.replaceAll(" ", ""); // 공백 제거
  // 연산자를 기준으로 문자열을 분리
  // 예: "1-2+3" -> ["1", "-2", "+3"]
  let numbers = str.split(/(?=[-+])/);
  let result = parseInt(numbers[0]); // 첫번째 숫자로 결과값 초기화

  for (let i = 1; i < numbers.length; i++) {
    result += parseInt(numbers[i]);
  }

  return result;
};

const dfs = (operators, depth, arr, n) => {
  if (depth === n - 1) {
    let str = "";
    for (let i = 0; i < n - 1; i++) {
      // n-1개의 연산자와 수열 처리
      str += arr[i] + operators[i];
    }
    str += arr[n - 1]; // 수열의 마지막 원소 추가

    const result = calculate(str);
    if (result === 0) log(str);
    return;
  }
  for (let x of [" ", "+", "-"]) {
    // 더하기, 빼기, 붙이기
    operators.push(x);
    dfs(operators, depth + 1, arr, n);
    operators.pop();
  }
};

for (const n of testArr) {
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  dfs([], 0, arr, n);
  log();
}
