let fs = require("fs");
let input = fs.readFileSync("./input2.txt").toString().split("\n");
const [N, M] = input[0].split(" ").map((el) => Number(el));
let [, ...graph] = input;
graph = graph.map((row) => row.split("").map((el) => Number(el)));

//TODO: 다시 풀어보기
// 이동할 네 방향(상,하,좌,우)
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const bfs = (x, y) => {
  let queue = [];
  queue.push([x, y]);

  while (queue.length != 0) {
    let [x, y] = queue.shift();
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

  return graph[N - 1][M - 1];
};

console.log(bfs(0, 0));
console.log(graph);
