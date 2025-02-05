const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

const n = +input[0]
const m = +input[1]
const dist = Array.from({ length: n + 1 }, (_, r) =>
  Array.from({ length: n + 1 }, (_, c) => (r === c ? 0 : Infinity))
)
for (let i = 2; i < m + 2; i++) {
  let [from, to, cost] = input[i].split(" ").map(Number)
  // 중복간선이 있을 수 있기에 최소비용간선만 저장
  dist[from][to] = Math.min(dist[from][to], cost)
}

for (let k = 1; k <= n; k++) {
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      let newCost = dist[a][k] + dist[k][b]
      if (newCost < dist[a][b]) dist[a][b] = newCost
    }
  }
}

let result = ""
for (let i = 1; i <= n; i++) {
  result +=
    dist[i]
      .slice(1)
      .map((x) => (x === Infinity ? 0 : x))
      .join(" ") + "\n"
}
log(result.trim())