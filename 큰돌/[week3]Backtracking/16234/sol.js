const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().split("\n")
const log = console.log

const [n, l, r] = input.shift().split(" ").map(Number)
const a = input.map((item) => item.split(" ").map(Number))
let visited
const dy = [-1, 0, 1, 0]
const dx = [0, 1, 0, -1]
let days = 0
let v = []
let sum = 0

function dfs(y, x) {
  for (let i = 0; i < 4; i++) {
    let [ny, nx] = [y + dy[i], x + dx[i]]
    if (nx < 0 || ny < 0 || nx >= n || ny >= n || visited[ny][nx]) continue
    const diff = Math.abs(a[ny][nx] - a[y][x])
    if (diff >= l && diff <= r) {
      visited[ny][nx] = 1
      v.push([ny, nx])
      sum += a[ny][nx]
      dfs(ny, nx)
    }
  }
}

while (true) {
  let flag = false
  visited = Array.from({ length: n }, () => Array(n).fill(0))

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        v = []
        sum = a[i][j]
        visited[i][j] = 1
        v.push([i, j])
        dfs(i, j)

        if (v.length === 1) continue

        for (const [y, x] of v) a[y][x] = Math.floor(sum / v.length)
        flag = true
      }
    }
  }
  if (!flag) break
  days++
}
log(days)
