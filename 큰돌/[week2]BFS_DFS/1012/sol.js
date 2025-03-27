const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().split("\n")
const log = console.log

const testNum = +input[0]
let idx = 1
const dy = [1, 0, -1, 0]
const dx = [0, 1, 0, -1]
for (let i = 0; i < testNum; i++) {
  let [M, N, K] = input[idx].split(" ").map(Number)
  const graph = Array.from({ length: N }, () => Array(M).fill(0))
  const visited = Array.from({ length: N }, () => Array(M).fill(0))
  let cnt = 0
  for (let i = 1; i <= K; i++) {
    const [x, y] = input[idx + i].split(" ").map(Number)
    graph[y][x] = 1
  }

  const dfs = (y, x) => {
    visited[y][x] = 1

    for (let i = 0; i < 4; i++) {
      let [ny, nx] = [y + dy[i], x + dx[i]]
      if (ny < 0 || nx < 0 || ny >= N || nx >= M || graph[ny][nx] === 0)
        continue
      if (visited[ny][nx]) continue
      dfs(ny, nx)
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!visited[i][j] && graph[i][j] === 1) {
        dfs(i, j)
        cnt++
      }
    }
  }
  log(cnt)
  idx += K + 1
}
