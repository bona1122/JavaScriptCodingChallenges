class MinPQ {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  push(e) {
    this.heap.push(e); // 마지막에 넣고
    this.heap.bubbleUp(this.heap.length - 1); //마지막원소 버블업
  }

  pop() {
    if (this.heap.isEmpty()) {
      throw new Error("heap is empty");
    }

    const min = this.heap[0];
    const lastElement = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = lastElement;
      this.bubbleDown(0);
    }

    return min;
  }

  bubbleUp(idx) {
    const element = this.heap[idx]; // 삽입할 요소
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.heap[parentIdx];

      if (parent <= element) break;

      this.heap[idx] = parent;
      idx = parent;
    }
    this.heap[idx] = element;
  }

  bubbleDown(idx) {
    const element = this.heap[idx]; // 내려갈 요소
    const lastIdx = this.heap.length - 1;

    while (true) {
      let childIdx = idx * 2 + 1;
      if (childIdx > lastIdx) break;

      if (childIdx < lastIdx && this.heap[childIdx + 1] < this.heap[childIdx]) {
        childIdx++;
      }

      if (element <= this.heap[childIdx]) break;

      this.heap[idx] = this.heap[childIdx];
      i = childIdx;
    }
  }
}