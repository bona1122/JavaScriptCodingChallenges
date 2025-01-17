const fs = require("fs")
const path = require("path")
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt")
let input = fs.readFileSync(filePath).toString().trim().split("\n")
const log = console.log

// 이 문제도 역시, 가중치가 동일한 그래프에서 최단경로를 구하는 문제이므로 BFS
const testNum = +input.shift()
const dir = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
]

const bfs = (n, start, goal) => {
  const visited = Array.from({ length: n }, () => Array(n).fill(0))
  const queue = [[...start, 0]]
  visited[start[0]][start[1]] = 1

  while (queue.length) {
    let [x, y, move] = queue.shift()

    if (x === goal[0] && y === goal[1]) return move

    for (const [dx, dy] of dir) {
      const nx = x + dx
      const ny = y + dy
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny]) {
        queue.push([nx, ny, move + 1])
        visited[nx][ny] = 1
      }
    }
  }
}

for (let i = 0; i < testNum; i++) {
  const n = +input[i * 3]
  let start = input[i * 3 + 1].split(" ").map(Number)
  const goal = input[i * 3 + 2].split(" ").map(Number)

  log(bfs(n, start, goal))
}
