const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

const n = +input[0];
let [_, ...arr] = input;

arr = arr.map((item, idx) => [idx, ...item.split(" ").map(Number)]);
arr.sort((a, b) => a[2] - b[2]);

const cnt = {};
let totalSum = 0;
const result = Array(n).fill(0);

/*
for (let i = 0; i < n; i++) {
  const [idx, color, size] = arr[i];
  
  // 현재 색을 제외한 총합을 계산
  result[idx] = totalSum - (cnt[color] || 0);
  
  // 현재 공의 크기를 누적합에 추가
  cnt[color] = (cnt[color] || 0) + size;
  totalSum += size;
}

log(result.join("\n"));
*/

// 위의 코드는 정렬했어도 크기가 같은 공에 대한 처리가 제외되지 않는다
let start = 0;
while (start < n) {
  let end = start;
  // 크기가 같은 공들 한번에 처리하기 위해, while+반복문
  while (end < n && arr[start][2] === arr[end][2]) end++;
  for (let i = start; i < end; i++) { // 크기가 같은 공들의 경우 result 한번에 처리
    const [idx, color, _] = arr[i];
    result[idx] = totalSum - (cnt[color] || 0);
  }

  for (let i = start; i < end; i++) { // 크기가 같은 공들의 경우, totalSum에 한꺼번에 반영
    const [_, color, size] = arr[i];
    cnt[color] = (cnt[color] || 0) + size;
    totalSum += size;
  }
  // 다음에 처리할 크기를 가지는 인덱스로 이동
  start = end;
}

log(result.join("\n"));
