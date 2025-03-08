const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString()
const log = console.log

// 1 or 00
const n = +input
const dp = Array(n + 1).fill(0)
dp[1] = 1
dp[2] = 2

for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 15746
}

log(dp[n])
