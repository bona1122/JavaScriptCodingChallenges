const binarySearch = (arr, target) => {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] === target) {
      return mid
    } else if (arr[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return -1
}

// target보다 크거나 같은 첫번째 요소 위치
const lowerBound = (arr, target) => {
  let start = 0
  let end = arr.length // TODO: 여기!

  while (start < end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] >= target) end = mid
    else start = mid + 1
  }
  return end // TODO: 여기!
}

// target보다 큰 첫번째요소 위치
const upperBound = (arr, target) => {
  let start = 0
  let end = arr.length
  while (start < end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] > target) end = mid // TODO: 여기!
    else start = mid + 1
  }
  return end
}

const find = (parent, x) => {
  if (parent[x] !== x) {
    parent[x] = find(parent, parent[x])
  }
  return parent[x]
}
const union = (parent, a, b) => {
  a = find(parent, a)
  b = find(parent, b)
  if (a < b) {
    parent[b] = a
  } else {
    parent[a] = b
  }
}

class MinHeap {
  constructor(compare = (a, b) => a[0] - b[0]) {
    this.compare = compare
    this.heap = []
  }

  // 마지막에 넣고 위로 올라오기
  push(val) {
    this.heap.push(val)

    let now = this.heap.length - 1 // 마지막거
    while (now > 0) {
      // 원소 2개 이상부터
      const parent = Math.floor((now - 1) / 2)
      // TODO: 음수가 나오면, parent가 now보다 더 작은 것 => break
      if (this.compare(this.heap[parent], this.heap[now]) <= 0) break
      ;[this.heap[parent], this.heap[now]] = [this.heap[now], this.heap[parent]]
      now = parent
    }
  }
  // 일단 루트 빼고, 마지막거 위로 채운 후 내려가기
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
        this.compare(this.heap[left], this.heap[now]) < 0
      ) {
        next = left
      }

      if (
        right < this.heap.length &&
        this.compare(this.heap[right], this.heap[now]) < 0
      ) {
        next = right
      }

      if (next === now) break
      ;[this.heap[now], this.heap[next]] = [this.heap[next], this.heap[now]]
      now = next
    }

    return root
  }
  isEmpty() {
    return this.heap.length === 0
  }
}

const arr = [3, 5, 4, 1, 6]
