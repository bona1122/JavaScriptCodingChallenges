let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");
const [N, M] = input[0].split(" ").map((el) => Number(el));
let [, ...graph] = input;
graph = graph.map((row) => row.split("").map((el) => Number(el)));

const connect = [
  // 상하좌우 총 4개
  [1, 0],
  [-1, 0],
  [0, -1],
  [0, 1],
];
let result = 0;

// const dfs = (graph, row, col) => {
//   // 방문처리 후, 각 가능한 방향에 대해 dfs 처리
//   graph[row][col] = 1;
//   for (let move of connect) {
//     new_row = row + move[0];
//     new_col = col + move[1];
//     if (new_row < N && new_row >= 0 && new_col < M && new_col >= 0) {
//       if (graph[new_row][new_col] == 0) dfs(graph, new_row, new_col);
//     }
//   }
// };
// for (let i = 0; i < N; i++) {
//   for (let k = 0; k < M; k++) {
//     if (graph[i][k] == 0) {
//       dfs(graph, i, k);
//       result++;
//     }
//   }
// }
// console.log(result);

// //////////////////////////////// 책 풀이
const dfs2 = (x, y) => {
  // 주어진 범위를 벗어나면 즉시 종료
  if (x <= -1 || x >= N || y <= -1 || y >= M) {
    return false;
  }
  if (graph[x][y] == 0) {
    // 아직 방문하지 않은 곳이라면
    graph[x][y] = 1; // 방문 처리
    // 상하좌우 위치 모두 재귀적 호출
    dfs2(x - 1, y);
    dfs2(x, y - 1);
    dfs2(x + 1, y);
    dfs2(x, y + 1);
    return true;
  }
};

// 모든 노드에 대해 음료수 채우기
result = 0;
for (let i = 0; i < N; i++) {
  for (let k = 0; k < M; k++) {
    if (dfs2(i, k)) result++;
  }
}
console.log(result);
