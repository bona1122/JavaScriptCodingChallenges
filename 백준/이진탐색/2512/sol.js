const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

const n = +input[0]
const arr = input[1].split(" ").map(Number)
let max = +input[2]

let start = 1
let end = Math.max(...arr)

let result = 0
while (start <= end) {
  let mid = Math.floor((start + end) / 2)
  let total = 0
  for (let cost of arr) {
    total += Math.min(mid, cost)
  }
  if (total <= max) {
    result = mid
    start = mid + 1
  } else {
    end = mid - 1
  }
}
log(result)