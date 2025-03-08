const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

const n = +input[0]
let arr = input[1].split(" ").map(Number)
const m = +input[2]
const query = input[3].split(" ").map(Number)

arr = arr.sort((a, b) => a - b)

let result = Array(m).fill(0)
result = result.map((_, idx) => {
  const target = query[idx]
  const upper = getUpperBound(arr, target)
  const lower = getLowerBound(arr, target)
  return upper - lower
})

function getLowerBound(arr, target) {
  let start = 0
  let end = arr.length
  while (start < end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] >= target) end = mid
    else start = mid + 1
  }
  return end
}

function getUpperBound(arr, target) {
  let start = 0
  let end = arr.length
  while (start < end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] > target) end = mid
    else start = mid + 1
  }
  return end
}
log(result.join(" "))
