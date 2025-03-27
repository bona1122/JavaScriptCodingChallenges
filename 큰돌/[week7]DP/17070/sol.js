const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().split("\n")
const log = console.log

// 처음은 가로로 놓여있다. 한쪽끝을 n, n으로 옮기는 경우의 수
const n = +input[0]
const graph = Array.from({ length: n + 2 }, () => Array(n + 2).fill(0))
const dp = Array.from({ length: n + 2 }, () =>
  Array.from({ length: n + 2 }, () => Array(3).fill(0))
)

for (let i = 1; i <= n; i++) {
  const row = input[i].split(" ").map(Number)
  for (let j = 1; j <= n; j++) {
    graph[i][j] = row[j - 1] // 입력은 0부터 시작하지만, 배열은 1부터 사용
  }
}

const check = (y, x, dir) => {
  // 가로, 세로
  if (dir === 0 || dir === 2) {
    if (graph[y][x] !== 1) return true // 벽이 아니면 true
  } else if (dir === 1) {
    // 대각선 -> 3군데 체크해줘야함
    if (graph[y][x] === 0 && graph[y - 1][x] === 0 && graph[y][x - 1] === 0)
      return true
  }
  return false
}

dp[1][2][0] = 1
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (check(i, j + 1, 0)) dp[i][j + 1][0] += dp[i][j][0]
    if (check(i + 1, j + 1, 1)) dp[i + 1][j + 1][1] += dp[i][j][0]

    if (check(i + 1, j, 2)) dp[i + 1][j][2] += dp[i][j][2]
    if (check(i + 1, j + 1, 1)) dp[i + 1][j + 1][1] += dp[i][j][2]

    if (check(i, j + 1, 0)) dp[i][j + 1][0] += dp[i][j][1]
    if (check(i + 1, j, 2)) dp[i + 1][j][2] += dp[i][j][1]
    if (check(i + 1, j + 1, 1)) dp[i + 1][j + 1][1] += dp[i][j][1]
  }
}

let result = dp[n][n][0] + dp[n][n][1] + dp[n][n][2]
log(result)

// const filePath =
//   process.platform === "linux"
//     ? "/dev/stdin"
//     : require("path").join(__dirname, "input.txt")
// const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
// const log = console.log

// const n = +input[0]
// const a = Array.from({ length: 24 }, () => Array(24).fill(0))
// const dp = Array.from({ length: 24 }, () =>
//   Array.from({ length: 24 }, () => Array(3).fill(0))
// )

// // 입력값 처리
// for (let i = 1; i <= n; i++) {
//   const row = input[i].split(" ").map(Number)
//   for (let j = 1; j <= n; j++) {
//     a[i][j] = row[j - 1]
//   }
// }

// // 이동 가능 여부 확인 함수
// function check(y, x, d) {
//   if (d === 0 || d === 2) {
//     if (a[y][x] === 0) return true
//   } else if (d === 1) {
//     if (a[y][x] === 0 && a[y - 1][x] === 0 && a[y][x - 1] === 0) return true
//   }
//   return false
// }

// // 초기 상태 설정: 파이프가 (1,1)-(1,2)에 가로로 놓여 있음
// dp[1][2][0] = 1

// // 동적 프로그래밍으로 가능한 모든 경우 계산
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     // 가로 파이프(0)에서의 이동
//     if (check(i, j + 1, 0)) dp[i][j + 1][0] += dp[i][j][0]
//     if (check(i + 1, j + 1, 1)) dp[i + 1][j + 1][1] += dp[i][j][0]

//     // 세로 파이프(2)에서의 이동
//     if (check(i + 1, j, 2)) dp[i + 1][j][2] += dp[i][j][2]
//     if (check(i + 1, j + 1, 1)) dp[i + 1][j + 1][1] += dp[i][j][2]

//     // 대각선 파이프(1)에서의 이동
//     if (check(i, j + 1, 0)) dp[i][j + 1][0] += dp[i][j][1]
//     if (check(i + 1, j, 2)) dp[i + 1][j][2] += dp[i][j][1]
//     if (check(i + 1, j + 1, 1)) dp[i + 1][j + 1][1] += dp[i][j][1]
//   }
// }

// // 결과 계산: (n,n)에 도달할 수 있는 모든 방향의 경우의 수 합
// const ret = dp[n][n][0] + dp[n][n][1] + dp[n][n][2]
// log(ret)
