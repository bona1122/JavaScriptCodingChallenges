const path = require("path");
const fs = require("fs");
const input = fs
  .readFileSync(path.resolve(__dirname, "input5.txt"))
  .toString()
  .trim()
  .split("\n");

const [n, l, r] = input[0].split(" ").map(Number);
const graph = [];
for (let i = 1; i < input.length; i++) {
  graph.push(input[i].split(" ").map(Number));
}

const dx = [-1, 1, 0, 0]; // 상, 하, 좌, 우
const dy = [0, 0, -1, 1];

// 특정 위치에서 출발하여 모든 연합을 체크한 뒤에 데이터 갱신
const process = (x, y, index) => {
  let united = []; // (x, y)의 위치와 연결된 나라(연합) 정보를 담는 리스트
  united.push([x, y]);

  let q = []; // 너비 우선 탐색(BFS)을 위한 큐 자료구조 정의
  q.push([x, y]);
  union[x][y] = index; // 현재 연합의 번호 할당

  let summary = graph[x][y]; // 현재 연합의 전체 인구 수
  let count = 1; // 현재 연합의 국가 수

  while (q.length !== 0) {
    // 큐가 빌 때까지 반복(BFS)
    const [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      // 4가지 방향 확인
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && union[nx][ny] === -1) {
        const diff = Math.abs(graph[nx][ny] - graph[x][y]);
        if (diff >= l && diff <= r) {
          // 조건 만족 시 연합에 추가
          q.push([nx, ny]);
          union[nx][ny] = index;
          summary += graph[nx][ny];
          count += 1;
          united.push([nx, ny]);
        }
      }
    }
  }
  // 연합 국가끼리 인구 분배
  united.forEach(([x, y]) => {
    graph[x][y] = Math.floor(summary / count);
  });
};

let result = 0;
let union;
// 더 이상 인구 이동을 할 수 없을 때까지 반복
while (true) {
  union = Array.from({ length: n }, () => Array(n).fill(-1)); // 연합 정보 초기화
  index = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (union[i][j] === -1) {
        // 각 나라에 대하여 연합이 없는 경우, 새로운 연합을 생성
        process(i, j, index);
        index += 1;
      }
    }
  }
  if (index === n * n) break; // 모든 인구 이동이 끝난 경우 => 각 나라가 하나의 연합인 경우
  result += 1; // 인구이동 횟수 증가
}

console.log(result);
