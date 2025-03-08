const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

const [testCase, ...arr] = input.map((item) => +item)

// 0은 0: 1번, 1: 0번
// 1은 0: 0번, 1: 1번
const dp = Array(41).fill(0)
dp[0] = [1, 0]
dp[1] = [0, 1]
for (let i = 2; i <= 40; i++) {
  dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]]
}

arr.forEach((n) => {
  let [a, b] = dp[n];
  log(a, b)
})