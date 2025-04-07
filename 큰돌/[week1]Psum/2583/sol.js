const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().split("\n")
const log = console.log

// 직사각형 제외한 나머지 부분이 몇개고, 넓이가 얼마인지(오름차순)
// k는 최대 100
const [m, n, k] = input.shift().split(" ").map(Number)
const arr = input.map((item) => item.split(" ").map(Number))
const g = Array.from({ length: m }, () => Array(n).fill(0))
const dy = [1, 0, -1, 0]
const dx = [0, 1, 0, -1]
let result = []

for (let [x1, y1, x2, y2] of arr) {
  for (let i = x1; i < x2; i++) {
    for (let j = y1; j < y2; j++) {
      g[j][i] = 1
    }
  }
}

const bfs = (y, x) => {
  g[y][x] = 1
  let cnt = 0
  const q = [[y, x]]
  while (q.length) {
    let [y, x] = q.shift()
    cnt++

    for (let i = 0; i < 4; i++) {
      let [ny, nx] = [y + dy[i], x + dx[i]]
      if (ny < 0 || nx < 0 || ny >= m || nx >= n || g[ny][nx] === 1) continue
      if (g[ny][nx] === 0) {
        g[ny][nx] = 1
        q.push([ny, nx])
      }
    }
  }
  return cnt
}
const dfs = (y, x) => {
  g[y][x] = 1
  let cnt = 1

  for (let i = 0; i < 4; i++) {
    let [ny, nx] = [y + dy[i], x + dx[i]]
    if (ny < 0 || nx < 0 || ny >= m || nx >= n || g[ny][nx] === 1) continue
    if (g[ny][nx] === 0) {
      cnt += dfs(ny, nx)
    }
  }

  return cnt
}

for (let y = 0; y < m; y++) {
  for (let x = 0; x < n; x++) {
    if (g[y][x] === 0) result.push(dfs(y, x))
  }
}

log(result.length)
log(result.sort((a, b) => a - b).join(" "))
