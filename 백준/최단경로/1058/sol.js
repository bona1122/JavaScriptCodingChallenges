const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

// 2-친구 : 두사람이 바로 친구이거나 둘다 아는 친구가 겹치거나.
// 2-친구가 가장많은 사람의 2-친구 수 출력
// => 2번만 거쳐서 도달가능하면 2-친구

let N = +input.shift()
const graph = input.map((row) => row.split("").map((c) => (c === "Y" ? 1 : 0)))

const dist = Array.from({ length: N }, () => Array(N).fill(0))
graph.forEach((row, ri) =>
  row.forEach((col, ci) => (graph[ri][ci] === 1 ? (dist[ri][ci] = 1) : col))
)

for (let k = 0; k < N; k++) {
  for (let a = 0; a < N; a++) {
    for (let b = 0; b < N; b++) {
      if (a !== b && graph[a][k] === 1 && graph[k][b] === 1) {
        dist[a][b] = 1
      }
    }
  }
}

let result = 0
dist.forEach((row) => {
  result = Math.max(
    result,
    row.reduce((acc, cur) => acc + cur, 0)
  )
})

log(result)

// 또 다른 방법: 기본적인 플로이드를 이용 => 친구면 거리를 1로 두고, 최단거리가 2 이하인 것 세면 됨.
// 위의 방식처럼 dist, graph를 불필요하게 따로 둘 필요 없음
/*
let N = +input.shift()
const graph = input.map((row) => 
    row.split("").map((c) => c === "Y" ? 1 : Infinity)
)

// 자기 자신으로의 거리는 0으로 초기화
for (let i = 0; i < N; i++) {
    graph[i][i] = 0
}

// 플로이드-워셜로 모든 쌍 간의 최단거리 계산
for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j])
        }
    }
}

// 각 사람별로 거리가 2 이하인 친구의 수를 계산
let result = 0
for (let i = 0; i < N; i++) {
    const count = graph[i].filter((dist, j) => i !== j && dist <= 2).length
    result = Math.max(result, count)
}

log(result)
*/
