const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

// 2-친구 : 두사람이 바로 친구이거나 둘다 아는 친구가 겹치거나.
// 2-친구가 가장많은 사람의 2-친구 수 출력

// => 2번만 거쳐서 도달가능하면 2-친구
// a->b이거나 a->k->b

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
