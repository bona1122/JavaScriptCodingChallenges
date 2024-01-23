// 배열의 크기(N) / 더해지는 횟수(M) / 연속해서 사용할 수 있는 횟수(K)
// 배열 요소들

let fs = require("fs");

let input = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((el) => el.split(" "))
  .map((el) => el.map((el) => Number(el)));
// console.log(input);

const [N, M, K] = input[0];
const arr = input[1];

arr.sort((a, b) => b - a); // 배열 내림차순 정렬
const first = arr[0];
const second = arr[1];

//////////////////////// 방법 1
// 총 k번 반복 가능.
// 6 6 6 5, 6 6 6 5
// 가장 큰 수가 더해지는 횟수 계산
let max_count = Math.floor(M / (K + 1)) * K;
max_count += M % (K + 1);

let result = 0;
result = max_count * first; // 가장 큰 수 더하기
result += (M - max_count) * second; // 두 번째로 큰 수 더하기
console.log(result);

//////////////////////// 방법 2
// 직관적인 방법
let result2 = 0;
let plus_num = M;
while (true) {
  for (let i = 0; i < K; i++) {
    if (plus_num == 0) break;
    result2 += first;
    plus_num--;
  }
  if (plus_num == 0) break;
  result2 += second;
  plus_num--;
}
console.log(result2);
