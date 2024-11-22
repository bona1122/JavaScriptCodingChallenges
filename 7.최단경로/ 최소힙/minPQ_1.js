class MinPQ {
  constructor(){
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  push(e) {
    this.heap.push(e);
    this.bubbleUp(this.heap.length - 1);
  }
  pop() {
    if (this.isEmpty()) {
        throw new Error("Heap is empty");
    }

    const minElement = this.heap[0];
    const lastElement = this.heap.pop();

    if (this.heap.length > 0) {
        this.heap[0] = lastElement;
        this.bubbleDown(0);
    }

    return minElement;
}

  bubbleUp(i){ // 가장 마지막에 있는 것 버블링해서 올라오기
    const element = this.heap[i];
    while(i>0){
      const parentIdx = Math.floor((i - 1) / 2);
      const parent = this.heap[parentIdx];

      if(element >= parent) break;

      this.heap[i] = parent;
      i = parentIdx;
    }
    this.heap[i] = element;
  }

  bubbleDown(i){ 
    const lastIdx = this.heap.length - 1;
    const element = this.heap[i];

    while(true){
      let childIdx = i * 2 + 1;
      if(childIdx > lastIdx) break;

      if(childIdx < lastIdx && this.heap[childIdx + 1] < this.heap[childIdx]){
        childIdx++;
      }

      if(element <= this.heap[childIdx]) break;

      this.heap[i] = this.heap[childIdx];
      i = childIdx;
    }

    this.heap[i] = element;
  }
}