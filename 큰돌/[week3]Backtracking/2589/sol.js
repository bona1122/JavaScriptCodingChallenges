const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().split("\n")
const log = console.log

// 어떤 곳을 시작점으로 잡고, 가장 긴 최단거리 구하기
// n*m * bfs

const [row, col] = input.shift().split(" ").map(Number)
const graph = input.map((row) => row.split(""))
let result = 0
const dy = [1, 0, -1, 0]
const dx = [0, 1, 0, -1]
const bfs = (y, x) => {
  const visited = Array.from({ length: row }, () => Array(col).fill(0))
  const queue = [[y, x]]
  visited[y][x] = 0
  while (queue.length) {
    let [cy, cx] = queue.shift()

    for (let i = 0; i < 4; i++) {
      let [ny, nx] = [cy + dy[i], cx + dx[i]]
      if (nx < 0 || ny < 0 || nx >= col || ny >= row) continue
      if (visited[ny][nx] || graph[ny][nx] === "W") continue

      visited[ny][nx] = visited[cy][cx] + 1
      queue.push([ny, nx])

      result = Math.max(result, visited[ny][nx])
    }
  }
}
for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (graph[i][j] === "L") bfs(i, j)
  }
}

log(result)

/*
이중 포인터 방식
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().split("\n")
const log = console.log
// 어떤 곳을 시작점으로 잡고, 가장 긴 최단거리 구하기
// n*m * bfs
const [row, col] = input.shift().split(" ").map(Number)
const graph = input.map((row) => row.split(""))
let result = 0
const dy = [1, 0, -1, 0]
const dx = [0, 1, 0, -1]

const bfs = (y, x) => {
  const visited = Array.from({ length: row }, () => Array(col).fill(0))
  // 이중 포인터 방식의 큐 구현
  const queue = new Array(row * col * 4) // 충분한 크기로 미리 할당
  let front = 0, rear = 0
  
  // 시작점 추가
  queue[rear++] = [y, x]
  visited[y][x] = 1
  
  while (front < rear) {
    // O(1) 시간에 큐에서 요소 추출
    let [cy, cx] = queue[front++]
    
    for (let i = 0; i < 4; i++) {
      let [ny, nx] = [cy + dy[i], cx + dx[i]]
      if (nx < 0 || ny < 0 || nx >= col || ny >= row) continue
      if (visited[ny][nx] || graph[ny][nx] === "W") continue
      
      visited[ny][nx] = visited[cy][cx] + 1
      // O(1) 시간에 큐에 요소 추가
      queue[rear++] = [ny, nx]
      result = Math.max(result, visited[ny][nx])
    }
  }
}

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    if (graph[i][j] === "L") bfs(i, j)
  }
}

log(result - 1)
*/
