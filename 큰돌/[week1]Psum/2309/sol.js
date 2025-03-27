const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

const arr = input.map((item) => +item)
const selected = []
let result
const dfs = (depth, start) => {
  if (depth === 7) {
    const sum = selected.reduce((acc, cur) => acc + cur, 0)
    if (sum === 100) {
      result = [...selected]
    }
    return
  }

  for (let i = start; i < 9; i++) {
    selected.push(arr[i])
    dfs(depth + 1, i + 1)
    selected.pop()
  }
}
dfs(0, 0)
log(result.sort((a, b) => a - b).join("\n"))