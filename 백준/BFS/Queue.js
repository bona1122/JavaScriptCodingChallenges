export class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(item) {
    this.items[this.tail] = item;
    this.tail += 1;
  }
  dequeue() {
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head += 1;
    return item;
  }
  peek() {
    return this.items[this.head];
  }
  getLength() {
    return this.tail - this.head;
  }
}

let queue = new Queue();

queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(7);
queue.dequeue();
queue.enqueue(1);
queue.enqueue(4);
queue.dequeue();

while (queue.getLength() !== 0) {
  console.log(queue.dequeue());
}
