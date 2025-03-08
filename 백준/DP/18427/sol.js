const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

const [N, M, H] = input[0].split(" ").map(Number)
// N명의 학생들이 최대 M개의 블럭 가짐. 블럭들은 높이가 상이.
// 1-N학생들의 블록을 하나 이하 선택해서 차례로 쌓기.
// 높이가 H인 탑을 만드는 경우의 수 구하기
const arr = Array(N + 1)
for (let i = 1; i <= N; i++) {
  arr[i] = input[i].split(" ").map(Number)
}

// 방법 1
// dp[i][j]: i번째 학생까지 고려했을 떄, 높이 j인 탑을 만드는 경우의 수
const dp = Array.from({ length: N + 1 }, () => Array(H + 1).fill(0))
dp[0][0] = 1 // 아무 학생도 고려하지 않았을 때, 높이 0인 탑을 만드는 방법은 1가지

for (let i = 1; i <= N; i++) {
  // 1. i번째 학생이 블록을 사용하지 않는 경우
  for (let j = 0; j <= H; j++) {
    dp[i][j] = dp[i - 1][j]
  }

  // 2. i번째 학생의 블록을 사용하는 경우
  for (let h of arr[i]) {
    for (let j = h; j <= H; j++) {
      dp[i][j] = (dp[i][j] + dp[i - 1][j - h]) % 10007
    }
  }
}
log(dp[N][H])
