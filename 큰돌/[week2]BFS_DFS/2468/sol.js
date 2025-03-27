const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().split("\n")
const log = console.log

const N = +input.shift()
// 높이가 x이하인 지점을 모두 잠기게 하면, 최대 안전영역의 개수?
const graph = input.map((row) => row.split(" ").map(Number))
let min = Infinity
let max = -Infinity
for (let a of graph.flat(1)) {
  min = Math.min(min, a)
  max = Math.max(max, a)
}

const calc = (num) => {
  let cnt = 0
  const dy = [1, 0, -1, 0]
  const dx = [0, 1, 0, -1]
  const visited = Array.from({ length: N }, () => Array(N).fill(0))
  const dfs = (y, x) => {
    visited[y][x] = 1
    for (let i = 0; i < 4; i++) {
      let [ny, nx] = [y + dy[i], x + dx[i]]
      if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue
      if (visited[ny][nx] || graph[ny][nx] <= num) continue
      dfs(ny, nx)
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j] === 0 && graph[i][j] > num) {
        dfs(i, j)
        cnt++
      }
    }
  }
  return cnt
}

let result = 1
for (let i = min; i < max; i++) {
  // i이하인것이 잠겻다고 치자.
  result = Math.max(result, calc(i))
}

log(result)
