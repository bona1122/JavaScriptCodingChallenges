const fs = require("fs")
const path = require("path")
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt")
let input = fs.readFileSync(filePath).toString()
const log = console.log

// 각 연산의 비용은 동일 => bfs
// 연산자의 상황도 알아야하므로 큐에 삽입시, 지금까지의 연산도 문자열로 넣어주기
const [s, t] = input.split(" ").map(Number)
const visited = new Set()

const bfs = (s, t) => {
  if (s === t) return log(0)

  const queue = [[s, ""]]
  visited.add(s)

  while (queue.length) {
    const [n, ops] = queue.shift()
    if (n === t) return log(ops)

    const can = [
      [n * n, "*"],
      [n + n, "+"],
      [n - n, "-"],
      [n !== 0 ? n / n : n, "/"],
    ]

    for (const [next, op] of can) {
      if (next > t || next < 0 || visited.has(next)) continue
      visited.add(next)
      queue.push([next, ops + op])
    }
  }
  return log(-1) // 완전탐색을 수행할 동안 t를 만들지 못한 경우
}

bfs(s, t)
