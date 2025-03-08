const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

// 나선에서 가장긴변 길이 k면, 해당변에 k인 정삼각형 추가
const T = +input[0]
const dp = Array(100 + 1).fill(0)
dp[1] = 1
dp[2] = 1
dp[3] = 1
dp[4] = 2
dp[5] = 2
dp[6] = 3
dp[7] = 4
dp[8] = 5
dp[9] = 7
dp[10] = 9

// dp[11] = dp[10] + dp[6] = 13
// dp[12] = dp[11] + dp[7] = 18
// dp[13] = dp[12] + dp[8] = 23

for (let i = 11; i <= 100; i++) {
  dp[i] = dp[i - 1] + dp[i - 1 - 4]
}

for (let i = 1; i <= T; i++) {
  const N = +input[i]
  log(dp[N])
}

// 방법2 - 숫자로 규칙 찾기
const d = new Array(101).fill(0)
d[1] = 1
d[2] = 1
d[3] = 1

for (let i = 4; i <= 100; i++) {
  d[i] = d[i - 2] + d[i - 3]
}
