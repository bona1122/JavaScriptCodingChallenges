const path = require("path");
const fs = require("fs");
const input = fs
  .readFileSync(path.resolve(__dirname, "input.txt"))
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);

const graph = Array(n);
const teachers = []; // 선생님의 좌표
const spaces = []; // 빈 공간의 좌표

for (let i = 0; i < n; i++) {
  graph[i] = input[i + 1].split(" ");
  graph[i].forEach((v, idx) => {
    if (v === "T") {
      teachers.push([i, idx]);
    }
    if (v === "X") {
      spaces.push([i, idx]);
    }
  });
}

// x,y 좌표에서 특정 방향으로 감시를 진행하는 함수
const watch = (x, y, direction) => {
  // 왼쪽 방향으로 감시
  if (direction === 0) {
    while (y >= 0) {
      if (graph[x][y] === "S") {
        return true;
      }
      if (graph[x][y] === "O") {
        return false;
      }
      y -= 1;
    }
  }
  // 오른쪽 방향으로 감시
  if (direction === 1) {
    while (y < n) {
      if (graph[x][y] === "S") {
        return true;
      }
      if (graph[x][y] === "O") {
        return false;
      }
      y += 1;
    }
  }
  // 위쪽 방향으로 감시
  if (direction === 2) {
    while (x >= 0) {
      if (graph[x][y] === "S") {
        return true;
      }
      if (graph[x][y] === "O") {
        return false;
      }
      x -= 1;
    }
  }
  // 아래쪽 방향으로 감시
  if (direction === 3) {
    while (x < n) {
      if (graph[x][y] === "S") {
        return true;
      }
      if (graph[x][y] === "O") {
        return false;
      }
      x += 1;
    }
  }
  return false;
};

// 장애물을 설치한 뒤, 학생이 한 명도 감지되지 않는지 검사
const process = () => {
  for (let i = 0; i < teachers.length; i++) {
    const [x, y] = teachers[i];
    for (let j = 0; j < 4; j++) {
      if (watch(x, y, j)) {
        return true; // 학생을 감지하면 즉시 true 반환
      }
    }
  }
  return false; // 모든 선생님이 학생을 감지하지 못하면 false 반환
};
let result = false; // 학생이 한명도 감지되지 않도록 장애물을 설치할 수 있는지 여부
const dfs = (count) => {
  if (count === 3) {
    if (!process()) {
      result = true;
    }
    return;
  }

  // space에서 3개 뽑는 조합
  for (let i = 0; i < spaces.length; i++) {
    const [x, y] = spaces[i];
    if (graph[x][y] === "X") {
      graph[x][y] = "O";
      dfs(count + 1);
      graph[x][y] = "X";
    }
  }
};
dfs(0);
console.log(result ? "YES" : "NO");
