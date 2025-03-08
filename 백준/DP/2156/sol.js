const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

const [n, ...arr] = input.map(Number)
const dp = Array(10001).fill(0)

// i번째 안마시면 (i-1번쨰까지)
// i번째 마시면, i번째값+(i-2번째까지) or i번째값+(i-1번째까지)+(i-3번째까지)
dp[0] = arr[0]
dp[1] = arr[0] + arr[1]
dp[2] = Math.max(dp[1], arr[2] + arr[0], arr[2] + arr[1])

for (let i = 3; i < n; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    arr[i] + dp[i - 2],
    arr[i] + arr[i - 1] + dp[i - 3]
  )
}

log(dp[n - 1])
