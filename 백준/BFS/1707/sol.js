const fs = require("fs")
const path = require("path")
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt")
let input = fs.readFileSync(filePath).toString().trim().split("\n")
const log = console.log

// 집합을 둘로 분할. 각 집합의 노드는 서로 인접x => 이분 그래프
// 이분그래프 판별법: BFS로 인접노드로 이동하면서 (1번집합 -> 2번집합 -> 1번집합 -> 2번집합 ...)

const bfs = (start, colors, graph) => {
  const queue = []
  queue.push(start)
  colors[start] = 1 // 두집합은 1,-1로 표현
  while (queue.length) {
    const node = queue.shift()
    const color = colors[node]
    for (let next of graph[node]) {
      if (colors[next] === 0) {
        colors[next] = -color // 색 스위치
        queue.push(next)
      } else if (colors[next] === color) {
        return false
      }
    }
  }
  return true
}

const testNum = +input.shift()
let idx = 0
for (let i = 0; i < testNum; i++) {
  const [n, e] = input[i + idx].split(" ").map(Number)
  const colors = new Array(n + 1).fill(0)
  const graph = Array.from({ length: n + 1 }, () => [])

  for (let j = 1; j <= e; j++) {
    const [a, b] = input[i + ++idx].split(" ").map(Number)
    graph[a].push(b)
    graph[b].push(a)
  }

  let answer = true
  for (let j = 1; j <= n; j++) {
    // 아직 방문하지 않은 노드에 대해
    if (colors[j] === 0) {
      if (!bfs(j, colors, graph)) {
        answer = false
        break
      }
    }
  }
  answer ? log("YES") : log("NO")
}
