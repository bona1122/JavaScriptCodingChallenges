class MinHeap {
  constructor(compare = (a, b) => a[0] - b[0]) {
    this.heap = []
    this.compare = compare
  }

  push(val) {
    this.heap.push(val)
    
    let now = this.heap.length - 1
    while (now > 0) {
      const parent = Math.floor((now - 1) / 2)
      if (this.compare(this.heap[parent], this.heap[now]) <= 0) break
      
      [this.heap[parent], this.heap[now]] = [this.heap[now], this.heap[parent]]
      now = parent
    }
  }

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

      if (left < this.heap.length && this.compare(this.heap[left], this.heap[next]) < 0) {
        next = left
      }
      if (right < this.heap.length && this.compare(this.heap[right], this.heap[next]) < 0) {
        next = right
      }
      
      if (next === now) break
      
      [this.heap[now], this.heap[next]] = [this.heap[next], this.heap[now]]
      now = next
    }

    return root
  }

  isEmpty() {
    return this.heap.length === 0
  }
}