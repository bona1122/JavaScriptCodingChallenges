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
    while (
      curNode !== 0 &&
      this.heap[this.getParentIndex(curNode)].dist > e.dist
    ) {
      //루트로 올라감
      this.heap[curNode] = this.heap[this.getParentIndex(curNode)]; //현재자리에 부모노드를 넣음(부모노드를 내림)
      curNode = Math.floor((curNode - 1) / 2); //부모노드로 이동
    }
    this.heap[curNode] = e; //최소힙을 만족하는 자리에 새 원소 삽입
  }
  pop() {
    if (this.isEmpty()) return; //힙이 비어있으면 바로 반환

    const result = this.heap[0]; //최소원소
    if (this.heap.length === 1) return this.heap.pop(); //원소가 하나면 바로 반환

    const lastE = (this.heap[0] = this.heap.pop()); //힙의 마지막 원소 제거 하고 루트로 올림.
    let curNode = 0; //루트 노드
    let child = 1; //curNode의 왼쪽 자식
    while (child < this.heap.length - 1) {
      if (
        child < this.heap.length - 1 &&
        this.heap[child].dist > this.heap[child + 1].dist
      )
        // 왼쪽 자식이 마지막 노드가 아니고(오른쪽 자식이 있고) 오른쪽이 더 작은 경우, 작은 자식으로 설정
        child++;
      //현재노드에 lastE를 삽입할 수 있는지
      if (lastE.dist <= this.heap[child].dist) break; //삽입가능하면 멈추기.

      //삽입불가능하면 자식으로 이동
      this.heap[curNode] = this.heap[child]; //현재자리에 자식을 놓음.(현재노드와 자식노드 바꾸기)
      curNode = child; // 한레벨 내려감.
      child = child * 2 + 1; // child도 내려감.(왼쪽 자식으로 이동)
    }
    this.heap[curNode] = lastE;

    return result; //삭제된 최소 원소 반환
  }
}
const path = require("path");
const fs = require("fs");
const input = fs
  .readFileSync(path.resolve(__dirname, "./input.txt"))
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);

const dx = [0, 0, 1, -1]; // 상하좌우
const dy = [1, -1, 0, 0];

const graph = [];
for (let i = 1; i < n + 1; i++) {
  graph.push(input[i].split(" ").map(Number));
}

const distance = Array.from({ length: n }, () => Array(n).fill(Infinity));

let [x, y] = [0, 0]; // 시작점
const pq = new MinPQ();
pq.push({ x, y, dist: graph[x][y] });
distance[x][y] = graph[x][y];

// 다익스트라 알고리즘
while (!pq.isEmpty()) {
  const { x, y, dist } = pq.pop();
  if (distance[x][y] < dist) continue; // 이미 처리된 노드라면 무시

  for (let i = 0; i < 4; i++) {
    // 상하좌우 확인
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue; // 범위를 벗어나면 무시
    const cost = dist + graph[nx][ny]; // 현재 노드를 거쳐서 다른 노드로 이동하는 비용

    if (cost < distance[nx][ny]) {
      // 현재 노드를 거쳐서 다른 노드로 이동하는 비용이 더 작을 경우
      distance[nx][ny] = cost;
      pq.push({ x: nx, y: ny, dist: cost });
    }
  }
}
console.log(distance[n - 1][n - 1]);
// console.log(distance);
