const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().split("\n")
const log = console.log

// BFS
const [N, M] = input.shift().split(" ").map(Number)
const graph = input.map((row) => row.split("").map(Number))
const visited = Array.from({ length: N }, () => Array(M).fill(0))

let start = [0, 0]
const dy = [1, 0, -1, 0]
const dx = [0, 1, 0, -1]
visited[0][0] = 1
const queue = [start]
while (queue.length) {
  const [y, x] = queue.shift()

  for (let i = 0; i < 4; i++) {
    let [ny, nx] = [y + dy[i], x + dx[i]]
    if (ny < 0 || nx < 0 || ny >= N || nx >= M || graph[ny][nx] === 0) continue
    if (visited[ny][nx]) continue
    visited[ny][nx] = visited[y][x] + 1
    queue.push([ny, nx])
  }
}

log(visited[N - 1][M - 1])
