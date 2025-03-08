const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString()
const log = console.log

const N = +input
// <연산 3가지 가능> -> 이용해서 N->1 만들고, 연산 최소횟수 구하기
// 1. 3으로 나뉘면 나누기
// 2. 2로 나뉘면 나누기
// 3. 1 빼기
// dp[i]: i를 1로 만들기 위한 최소 연산 횟수

// 방법1: Bottom up, 1-N까지 for문 돌림
// N까지의 모든 숫자를 계산하므로 비효율적
const dp = Array(N + 1).fill(0)
dp[1] = 0 // 1->1로 연산횟수 0

for (let i = 2; i <= N; i++) {
  // 1빼기
  dp[i] = dp[i - 1]
  // 2로 나누기
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2])
  }
  // 3으로 나누기
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3])
  }
  // 앞선 세가지경우에서 가장 최소연산 수 구하고 +1 해주기
  dp[i]++
}

log(dp[N])

// 방법 2: BFS 활용하여 필요한 계산만 수행 -> Top down
const visited = Array(N + 1).fill(false)
visited[N] = true

const queue = [[N, 0]] // [현재값, 연산횟수]
let answer = 0

while (queue.length) {
  const [current, depth] = queue.shift()

  if (current === 1) {
    answer = depth
    break
  }

  // 3으로 나누기
  if (current % 3 === 0 && !visited[current / 3]) {
    visited[current / 3] = true
    queue.push([current / 3, depth + 1])
  }

  // 2로 나누기
  if (current % 2 === 0 && !visited[current / 2]) {
    visited[current / 2] = true
    queue.push([current / 2, depth + 1])
  }

  // 1 빼기
  if (!visited[current - 1]) {
    visited[current - 1] = true
    queue.push([current - 1, depth + 1])
  }
}

log(answer)
