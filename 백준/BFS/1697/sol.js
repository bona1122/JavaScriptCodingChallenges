const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim();
const log = console.log;

let [n, k] = input.split(" ").map(Number);
const queue = [];
const visited = Array(100001).fill(false);
queue.push([n, 0]); // [위치, 시간] 형태로 저장
visited[n] = true;

while (queue.length !== 0) {
  let [pos, time] = queue.shift();

  if (pos === k) {
    log(time);
    break;
  }

  const next = [pos - 1, pos + 1, pos * 2];

  for (let nextPos of next) {
    if (nextPos >= 0 && nextPos <= 100000 && !visited[nextPos]) {
      visited[nextPos] = true;
      queue.push([nextPos, time + 1]); // 다음 위치와 1초 증가한 시간 저장
    }
  }
}