const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

let N = +input.shift()
const graph = input.map((row) => row.split("").map((c) => (c === "Y" ? 1 : 0)))

function countTwoFriends(start) {
  const visited = new Set()
  const queue = [[start, 0]] // [노드, 거리]
  visited.add(start)

  let count = 0
  while (queue.length > 0) {
    const [current, distance] = queue.shift()

    if (distance <= 2 && current !== start) {
      count++
    }

    if (distance < 2) {
      // 2단계까지만 탐색
      for (let next = 0; next < N; next++) {
        if (!visited.has(next) && graph[current][next] === 1) {
          visited.add(next)
          queue.push([next, distance + 1])
        }
      }
    }
  }
  return count
}

let result = 0
for (let i = 0; i < N; i++) {
  result = Math.max(result, countTwoFriends(i))
}

log(result)
