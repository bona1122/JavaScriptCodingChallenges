////////////// 시간복잡도: O(ElogV) -> 최단거리가 가장 짧은 노드를 선형적으로 찾지 않음.
class MinPQ {
  constructor() {
    this.heap = [];
  }
  isEmpty() {
    return this.heap.length === 0;
  }
  getParentIndex(node) {
    return Math.floor((node - 1) / 2);
  }
  push(e) {
    //최소힙에 원소 삽입
    this.heap.push(e);
    let curNode = this.heap.length - 1;
    while (curNode !== 0 && this.heap[this.getParentIndex(curNode)] > e) {
      //루트로 올라감
      this.heap[curNode] = this.heap[this.getParentIndex(curNode)]; //현재자리에 부모노드를 넣음(부모노드를 내림)
      curNode = Math.floor((curNode - 1) / 2); //부모노드로 이동
    }
    this.heap[curNode] = e; //최소힙을 만족하는 자리에 새 원소 삽입
  }
  pop() {
    if (this.isEmpty()) return; //힙이 비어있으면 바로 반환

    const result = this.heap[0]; //최소원소
    if (this.heap.length === 1) return this.heap.pop();
    const lastE = (this.heap[0] = this.heap.pop()); //힙의 마지막 원소 제거 하고 루트로 올림.

    let curNode = 0; //루트 노드
    let child = 1; //curNode의 왼쪽 자식
    while (child < this.heap.length - 1) {
      if (
        child < this.heap.length - 1 &&
        this.heap[child] > this.heap[child + 1]
      )
        // 왼쪽 자식이 마지막 노드가 아니고(오른쪽 자식이 있고) 오른쪽이 더 작은 경우, 작은 자식으로 설정
        child++;
      //현재노드에 lastE를 삽입할 수 있는지
      if (lastE <= this.heap[child]) break; //삽입가능하면 멈추기.

      //삽입불가능하면 자식으로 이동
      this.heap[curNode] = this.heap[child]; //현재자리에 자식을 놓음.(현재노드와 자식노드 바꾸기)
      curNode = child; // 한레벨 내려감.
      child = child * 2 + 1; // child도 내려감.(왼쪽 자식으로 이동)
    }
    this.heap[curNode] = lastE;
    return result; //삭제된 최소 원소 반환
  }
}

let q = new MaxPQ();
q.push(1);
q.push(5);
q.push(4);
q.push(3);
q.push(11);
q.push(2);
q.push(6);

console.log(q.heap);
for (let i = 0; i < 7; i++) {
  console.log(q.pop());
}
