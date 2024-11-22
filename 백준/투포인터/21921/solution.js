const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .split("\n");
const log = console.log;

const [n, x] = input[0].split(" ").map(Number);
const arr = [0, ...input[1].split(" ").map(Number)];
// log(arr)

let partialSum = 0;
let maxPartialSum = 0;
for (let i = 1; i <= x; i++) {
  // 첫번째날부터 x번째 날까지 합(첫번째 슬라이딩 윈도우 합)
  partialSum += arr[i];
}
let cnt = 1; // 첫번째 슬라이딩 윈도우 구간을 구했으므로 1
maxPartialSum = partialSum;

let left = 1;
let right = x;
while (true) {
  // 윈도우 이동(고정 크기 윈도우 이므로 left,right 하나씩 추가)
  left++;
  right++;
  if (right > n) break; // 배열 범위 넘어가면 중단
  partialSum = partialSum + arr[right] - arr[left - 1]; // 변경된 윈도우에 맞는 부분합 갱신
  if (partialSum > maxPartialSum) {
    maxPartialSum = partialSum; // 최대 부분합 갱신
    cnt = 1; // 새로운 최대 부분합을 찾았으므로 카운트 초기화
  } else if (partialSum === maxPartialSum) {
    cnt++; // 최대 부분합과 같으면 카운트 증가
  }
}

if (maxPartialSum === 0) log("SAD");
else {
  log(maxPartialSum);
  log(cnt);
}
