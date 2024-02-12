// 파라메트릭 서치 유형. -> 최적화 문제를 결정 문제로 바꾸어 해결하는 기법. -> 보통 이진탐색을 이용하여 해결

const fs = require("fs");
const { resourceLimits } = require("worker_threads");
const input = fs.readFileSync("./input.txt").toString().split("\n");

const [N, M] = input[0].split(" ").map((item) => Number(item));
const height_list = input[1].split(" ").map((item) => Number(item));

// 절단기의 최소, 최대 ? =>  0, 가장 큰 길이의 떡
let start = 0;
let end = Math.max(...height_list);
let result = 0;

while (start <= end) {
  let total = 0;
  let mid = Math.floor((start + end) / 2);
  height_list.forEach((item) => {
    if (item > mid) total += item - mid;
  });
  if (total < M) end = mid - 1;
  else {
    result = mid; // 최대한 덜 잘랐을 때가 정답이니까, 여기서 result 기록
    start = mid + 1;
  }
}

console.log(result);
