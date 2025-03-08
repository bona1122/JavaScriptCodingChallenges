const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

// N개의 실수가 있을 떄, 연속된 곱이 최대 되는 부분 찾고 값 출력
// N은 최대 10,000 -> 2중 for문 시간초과 -> dp

const [n, ...arr] = input.map((item) => Number(item))

// dp[i] = Math.max(arr[i], arr[i] * dp[i-1])
// dp[i]: i를 마지막 인덱스로하는 연속곱의 최댓값
const dp = Array(n).fill(0)
dp[0] = arr[0]

for (let i = 1; i < n; i++) {
  dp[i] = Math.max(arr[i], arr[i] * dp[i - 1])
}

log(Math.max(...dp).toFixed(3))
