const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

// 정렬된 배열 2개.
// 두 배열 합치고 정렬하는 프로그램 작성
const [n, m] = input[0].split(" ").map(Number);
const a = input[1].split(" ").map(Number);
const b = input[2].split(" ").map(Number);

let idxA = 0;
let idxB = 0;
let resultIdx = 0;
const result = Array(n + m).fill(0);

while (idxA < n && idxB < m) {
  if (a[idxA] < b[idxB]) {
    result[resultIdx++] = a[idxA++];
  } else {
    result[resultIdx++] = b[idxB++];
  }
}

while(idxA < n){ // 남은 a 배열 넣기
  result[resultIdx++] =  a[idxA++];
}
while(idxB < m){ // 남은 b 배열 넣기
  result[resultIdx++] =  b[idxB++];
}

log(result.join(" "));
