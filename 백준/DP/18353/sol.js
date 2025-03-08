const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

// 입력: N개의 병사, 각 병사의 전투력 나열
// 병사 배치 시, 전투력 높은 병사가 앞쪽에(내림차순) 돼야함
// 특정 병사를 제외시켜서 내림차순 만족하도록하면서 남은 병사수 최대되도록 열외시킬 병사수 구하기
// => LIS(가장 긴 증가하는 부분수열) 문제
const N = +input[0]
const arr = [0, ...input[1].split(" ").map(Number)]

const dp = Array(N + 1).fill(0)
// dp[i] : arr[i]를 마지막 원소로 가지는 부분수열의 최대 길이

for (let i = 1; i <= N; i++) {
  dp[i] = 1 // 자기자신만 있는 부분수열 길이
  for (let j = 0; j < i; j++) {
    // 마지막 요소 arr[j]와 비교해서 현재 arr[i] 비교
    if (arr[j] > arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1)
    }
  }
}

log(N - Math.max(...dp))
