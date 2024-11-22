const n = 8;
const m = 5;
const arr = [3, 2, 4, 1, 2, 2, 1, 5];

let cnt = 0;
let sum = 0;
let end = 0;

// 투포인터 구현: start 고정 후, end를 최대로 이동시키기
for (let start = 0; start < n; start++) {
  while (sum < m && end < n) {
    // end가 범위 넘치치 않으면서, 부분합이 m보다 작은 경우
    // 계속 end증가
    sum += arr[end++];
  }
  if (sum === m) cnt++; // 부분합이 같은 경우, 카운트
  // 여기까지 온 경우는, 부분합이 m보다 같거나 큰 경우니까
  // start 증가시키기 위해 부분합 수정
  sum -= arr[start];
}
console.log(cnt);
