// 측정온도가 수열로 주어짐. k연속으로 가장 합 최대인 값 찾기
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().split("\n")
const log = console.log

const [n, k] = input[0].split(" ").map(Number)
const arr = input[1].split(" ").map(Number)
const psum = Array(n + 1).fill(0)
let result = -Infinity

for (let i = 0; i < n; i++) {
  psum[i + 1] = psum[i] + arr[i]
}

for (let i = 1; i <= n; i++) {
  if (i + k - 1 >= n) break
  result = Math.max(result, psum[i + k - 1] - psum[i - 1])
}
log(result)
