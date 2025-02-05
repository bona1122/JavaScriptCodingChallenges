const fs = require("fs")
const path = require("path")
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt")
let input = fs.readFileSync(filePath).toString().split("\n")
const log = console.log

// 매초, 낮은 숫자 바이러스부터 증식.
// s초 후, (x,y)에 존재하는 바이러스 종류 출력하기
const [n, k] = input[0].split(" ").map(Number)
const graph = Array.from({ length: n }, () => [])
for (let i = 1; i <= n; i++) {
  const row = input[i].split(" ").map(Number)
  graph[i - 1] = row
}
const [s, x, y] = input[n + 1].split(" ").map(Number)
const visited = Array.from({ length: n }, () => Array(n).fill(0))
let queue = []
let cnt = 0
const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
graph.forEach((row, rI) =>
  row.forEach((item, idx) => {
    if (item !== 0) {
      queue.push([item, rI, idx])
    }
  })
)
queue.sort((a, b) => a[0] - b[0])

while (true) {
  if (cnt === s) break

  let new_virus = []

  for (let i = 0; i < queue.length; i++) {
    const [v, cx, cy] = queue[i]

    for (let [dx, dy] of dir) {
      const nx = cx + dx
      const ny = cy + dy
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && graph[nx][ny] === 0) {
        graph[nx][ny] = v
        new_virus.push([v, nx, ny])
      }
    }
  }

  queue = new_virus
  cnt++
}

log(graph[x - 1][y - 1])
