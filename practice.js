// 최소힙
class MinHeap {
  constructor(compare = (a, b) => a[0] - b[0]) {
    this.heap = []
    this.compare = compare
  }

  // 일단 마지막에 넣고, 위로 올라오기
  push(val) {
    this.heap.push(val)

    let now = this.heap.length - 1 // 마지막 요소
    while (now > 0) {
      //원소 2개 이상부터
      const parent = Math.floor((now - 1) / 2)
      // 음수가 나오면, parent가 now보다 더 작은 것 => break
      if (this.compare(this.heap[parent], this.heap[now]) <= 0) break
      ;[this.heap[parent], this.heap[now]] = [this.heap[now], this.heap[parent]]
      now = parent
    }
  }

  // 루트를 빼고, 일단 마지막걸로 채운 후에 아래로 내려가기
  pop() {
    if (this.heap.length === 0) return null
    if (this.heap.length === 1) return this.heap.pop()

    const root = this.heap[0]
    this.heap[0] = this.heap.pop()

    let now = 0
    while (true) {
      let left = now * 2 + 1
      let right = now * 2 + 2
      let next = now // 처음에 현재 위치를 next로 지정

      // 왼쪽 자식이 있고 && 왼쪽 자식이 현재 노드보다 작으면
      if (
        left < this.heap.length &&
        // 음수가 나오면 left가 더 작은 거니까 교체
        this.compare(this.heap[left], this.heap[next]) < 0
      ) {
        next = left
      }

      // 오른쪽 자식이 있고 && 오른쪽 자식이 현재 next보다 작으면
      if (
        right < this.heap.length &&
        // 음수나오면 right가 더 작은거니까 교체
        this.compare(this.heap[right], this.heap[next]) < 0
      ) {
        next = right
      }

      // next가 변경되지않았으면(현재가 자식보다 작음) 종료
      if (next === now)
        break

        // 교체
      ;[this.heap[now], this.heap[next]] = [this.heap[next], this.heap[now]]
      now = next
    }

    return root
  }

  isEmpty() {
    return this.heap.length === 0
  }
}

// union, find => 무향그래프의 경우에 사이클 판별에 쓰일 수 있음. (+) 방향그래프 사이클은 dfs로 판별가능
const findParent = (parent, x) => {
  if (parent[x] !== x) {
    parent[x] = findParent(parent, parent[x])
  }
  return parent[x]
}

const unionParent = (parent, a, b) => {
  a = findParent(parent, a)
  b = findParent(parent, b)
  if (a < b) {
    parent[b] = a
  } else {
    parent[a] = b
  }
}

// 이진탐색, 상한선/하한선
const binarySearch = (arr, target) => {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    let midIdx = Math.floor((start + end) / 2)
    let mid = arr[midIdx]
    if (mid === target) {
      return midIdx
    } else if (mid < target) {
      start = midIdx + 1
    } else {
      end = midIdx - 1
    }
  }

  return -1
}

const lower = (arr, target) => {
  let start = 0
  let end = arr.length

  while (start < end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] >= target) end = mid
    else start = mid + 1
  }
  return end
}

const upper = (arr, target) => {
  let start = 0
  let end = arr.length

  while (start < end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] > target) end = mid
    else start = mid + 1
  }
  return end
}
