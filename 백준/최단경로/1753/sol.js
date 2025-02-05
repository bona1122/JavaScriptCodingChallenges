class MinHeap {
  constructor(compareFunc) {
    this.heap = []
    this.compare = compareFunc
  }

  push(value) {
    this.heap.push(value)
    this.upheap(this.heap.length - 1)
  }

  pop() {
    if (this.heap.length === 0) return null
    if (this.heap.length === 1) return this.heap.pop()

    const result = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.downheap(0)
    return result
  }

  upheap(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2)
      if (this.compare(this.heap[parentIndex], this.heap[index]) <= 0) break

      ;[this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ]
      index = parentIndex
    }
  }

  downheap(index) {
    while (true) {
      let smallest = index
      const leftIndex = index * 2 + 1
      const rightIndex = index * 2 + 2

      if (
        leftIndex < this.heap.length &&
        this.compare(this.heap[leftIndex], this.heap[smallest]) < 0
      ) {
        smallest = leftIndex
      }
      if (
        rightIndex < this.heap.length &&
        this.compare(this.heap[rightIndex], this.heap[smallest]) < 0
      ) {
        smallest = rightIndex
      }
      if (smallest === index) break

      ;[this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ]
      index = smallest
    }
  }

  isEmpty() {
    return this.heap.length === 0
  }
}

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

const [N, E] = input[0].split(" ").map(Number)
const start = +input[1]
const graph = Array(N + 1)
  .fill()
  .map(() => [])

for (let i = 2; i <= E + 1; i++) {
  let [from, to, cost] = input[i].split(" ").map(Number)
  graph[from].push([cost, to])
}

const dist = Array(N + 1).fill(Infinity)
const pq = new MinHeap((a, b) => a[0] - b[0]) // 비교함수 명시적 지정
pq.push([0, start])
dist[start] = 0

while (!pq.isEmpty()) {
  const [cost, now] = pq.pop()
  if (dist[now] < cost) continue

  for (const [c, next] of graph[now]) {
    const nc = cost + c
    if (nc < dist[next]) {
      dist[next] = nc
      pq.push([nc, next])
    }
  }
}

const result = dist.slice(1).map((d) => (d === Infinity ? "INF" : d))
log(result.join("\n"))
