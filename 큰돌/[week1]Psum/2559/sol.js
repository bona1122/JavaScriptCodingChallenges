// 측정온도가 수열로 주어짐. k연속으로 가장 합 최대인 값 찾기
// 연속 온도 합 '최대' 구하기 -> 구간합 => psum
// 최솟값: -100 * (10만) = -1000만
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().split("\n")
const log = console.log

const [n, k] = input[0].split(" ").map(Number)
const arr = input[1].split(" ").map(Number)
const psum = Array(n + 1).fill(0)
let result = -10000004

for (let i = 0; i < n; i++) {
  psum[i + 1] = psum[i] + arr[i]
}

for (let i = k; i <= n; i++) {
  result = Math.max(result, psum[i] - psum[i - k])
}

log(result)
