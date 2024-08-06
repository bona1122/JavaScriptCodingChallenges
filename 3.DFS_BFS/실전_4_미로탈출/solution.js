let fs = require("fs");
let input = fs.readFileSync("./input2.txt").toString().split("\n");
const [N, M] = input[0].split(" ").map((el) => Number(el));
let [, ...graph] = input;
graph = graph.map((row) => row.split("").map((el) => Number(el)));

// 끝지점이 오른쪽 하단으로 정해져 있고, 최소 이동 횟수를 구하니까
//TODO: 다시 풀어보기
// 이동할 네 방향(상,하,좌,우)
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (x, y) => {
  let queue = [];
  queue.push([x, y]); // (방문처리하고) 큐에 넣기

  while (queue.length != 0) {
    let [x, y] = queue.shift(); // 큐에서 빼고, 연결된곳에서 괴물없고 안가본 곳 있으면 최단거리 기록 
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue; // 공간 벗어나면 무시
      if (graph[nx][ny] == 0) continue; // 괴물이 있으면 무시
      if (graph[nx][ny] == 1) {
        // 해당 노드를 처음 방문하는 경우에만 최단 거리 기록
        graph[nx][ny] = graph[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return graph[N - 1][M - 1]; // 가장 오른쪽 하단에 있는 값 리턴
};

console.log(bfs(0, 0));
console.log(graph);
