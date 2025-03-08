const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

// 한칸아래랑 한칸아래오른쪽 값을 비교하면 됨.
const n = +input[0]
let [_, ...triangle] = input
triangle = triangle.map((item) => item.split(" ").map(Number))

const dp = Array.from({ length: n }, (_, idx) => Array(idx + 1).fill(0))
dp[0][0] = triangle[0][0]

// "위"에서 온거랑 "왼쪽위"에서 온거 고려
for (let i = 1; i < dp.length; i++) {
  for (let j = 0; j < dp[i].length; j++) {
    dp[i][j] =
      triangle[i][j] +
      Math.max(
        j - 1 >= 0 ? dp[i - 1][j - 1] : 0,
        j < dp[i - 1].length ? dp[i - 1][j] : 0
      )
  }
}

log(Math.max(...dp[n - 1]))
