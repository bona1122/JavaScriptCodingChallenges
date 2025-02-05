const fs = require("fs");
const path = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");

class SegmentTree {
    constructor(arr, operation = (a, b) => a + b, identity = 0n) {
        this.n = arr.length;
        this.tree = new Array(4 * this.n);
        this.operation = operation;
        this.identity = identity;
        this.init(arr, 1, 0, this.n - 1);
    }

    init(arr, node, start, end) {
        if (start === end) {
            this.tree[node] = BigInt(arr[start]);
            return this.tree[node];
        }
        const mid = Math.floor((start + end) / 2);
        this.tree[node] = this.operation(
            this.init(arr, node * 2, start, mid),
            this.init(arr, node * 2 + 1, mid + 1, end)
        );
        return this.tree[node];
    }

    update(node, start, end, index, newValue) {
        if (index < start || index > end) return;
        
        if (start === end) {
            this.tree[node] = BigInt(newValue);
            return;
        }
        
        const mid = Math.floor((start + end) / 2);
        this.update(node * 2, start, mid, index, newValue);
        this.update(node * 2 + 1, mid + 1, end, index, newValue);
        this.tree[node] = this.operation(
            this.tree[node * 2], 
            this.tree[node * 2 + 1]
        );
    }

    query(node, start, end, left, right) {
        if (left > end || right < start) return this.identity;
        if (left <= start && end <= right) return this.tree[node];
        
        const mid = Math.floor((start + end) / 2);
        return this.operation(
            this.query(node * 2, start, mid, left, right),
            this.query(node * 2 + 1, mid + 1, end, left, right)
        );
    }
}

// 입력 처리
const [N, M, K] = input[0].split(' ').map(Number);
const arr = input.slice(1, N + 1).map(BigInt);
const queries = input.slice(N + 1).map(line => line.split(' '));

// 세그먼트 트리 생성
const segTree = new SegmentTree(arr);

// 쿼리 처리
const answer = [];
for (const [a, b, c] of queries) {
    if (a === '1') {
        segTree.update(1, 0, N - 1, Number(b) - 1, BigInt(c));
    } else {
        answer.push(segTree.query(1, 0, N - 1, Number(b) - 1, Number(c) - 1).toString());
    }
}

console.log(answer.join('\n'));