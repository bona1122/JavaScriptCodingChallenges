let fs = require("fs");

let input = fs
  .readFileSync("input.txt")
  .toString()
  .split(" ")
  .map((item) => Number(item));

let N = input[0];
const K = input[1];
let result = 0;

///////////////// 방법 1. 단순하게
// while (N !== 1) {
//   if (N % K == 0) {
//     N /= K;
//   } else {
//     N -= 1;
//   }
//   result++;
// }
// console.log(result);

/////////////////// 방법 2
// 일일이 1씩 빼는 게 아니라, 한번에 빼기!
while (true) {
  // N이 K로 나뉘어지는 수가 될때까지 1 빼기
  let target = Math.floor(N / K) * K;
  result += N - target; // 한번에 빼고, 횟수 더하기
  N = target;

  // N이 K보다 작으면 반복문 탈출
  if (N < K) break;

  // N이 K보다 크면, 나누고 result++
  N /= K;
  result++;
}
// 남은 수에 대해 1씩 빼기
result += (N -1);
console.log(result);
