const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

const [N, M, ...arr] = input.map((item) => +item)

// 입장권(i)에 대해 i, i-1, i+1 자리 착석 가능
// vip 회원들 - 반드시 본인자리 i만 가능
// 좌석에 앉는 가짓수 구하기

// 핵심1: vip 좌석들을 기준으로 그룹묶음들이 생김
// 핵심2: dp[i] : i개의 좌석의 가능한 가짓수 - 피보나치 수열과 동일
const dp = Array(N + 1).fill(0)
dp[0] = 1
dp[1] = 1
const fibo = (x) => {
  if (dp[x] !== 0) return dp[x]
  dp[x] = fibo(x - 1) + fibo(x - 2)
  return dp[x]
}

// 각 그룹 묶음이 몇개씩 묶여있는지
let result = 1
let prev = 0
for (let i = 0; i < M; i++) {
  result *= fibo(arr[i] - prev - 1)
  prev = arr[i]
}
result *= fibo(N - prev)

log(result)
