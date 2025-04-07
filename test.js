class MinHeap {
  constructor(f = (a, b) => a - b) {
    this.heap = []
    this.compare = f
  }

  // 일단 마지막에 넣고 올라오기
  push(e) {
    this.heap.push(e)

    let now = this.heap.length - 1
    while (now > 0) {
      const parent = Math.floor((now - 1) / 2)
      if (this.compare(this.heap[parent], this.heap[now]) <= 0) break
      ;[this.heap[parent], this.heap[now]] = [this.heap[now], this.heap[parent]]
      now = parent
    }
  }
  // 일단 마지막거 올리고 내리기
  pop() {
    if (this.heap.length === 0) return null
    if (this.heap.length === 1) return this.heap.pop()

    const root = this.heap[0]
    this.heap[0] = this.heap.pop()

    let now = 0
    while (true) {
      let left = now * 2 + 1
      let right = now * 2 + 2
      let next = now

      if (
        left < this.heap.length &&
        this.compare(this.heap[left], this.heap[next]) < 0
      ) {
        next = left
      }

      if (
        right < this.heap.length &&
        this.compare(this.heap[right], this.heap[next]) < 0
      ) {
        next = right
      }
      if (next === now) break
      ;[this.heap[next], this.heap[now]] = [this.heap[now], this.heap[next]]

      now = next
    }

    return root
  }

  isEmpty() {
    return this.heap.length === 0
  }
}
const lower = (arr, target) => {
  let start = 0
  let end = arr.length

  while (start < end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] >= target) {
      end = mid
    } else {
      start = mid + 1
    }
  }
  return end
}

const upper = (arr, target) => {
  let start = 0
  let end = arr.length

  while (start < end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] > target) {
      end = mid
    } else {
      start = mid + 1
    }
  }
  return end
}
