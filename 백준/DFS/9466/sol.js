const fs = require("fs");
const path = require("path");
const { finished } = require("stream");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const log = console.log;

// 어느 팀에도 속하지 않은 학생 수 구하기
// => 사이클을 구성하는 부분그래프에 포함된 노드의 개수를 세는 문제
// 사이클이 존재하는 노드만 모아서 세기
const testNum = +input.shift();
const dfs = (current, choices, visited, finished, result) => {
  visited[current] = true; // 방문처리
  let next = choices[current];
  if (!visited[next]) {
    // 방문안했으면 스택(dfs)에 넣기(방문처리)
    dfs(next, choices, visited, finished, result);
  } else if (!finished[next]) {
    // 방문했지만, 완료되지는 않은 경우(아직 스택에 존재) => 사이클
    // 사이클 시작지점(next)부터 현재(current)까지 담기
    while (next !== current) {
      result.push(next);
      next = choices[next];
    }
    result.push(current);
  }
  // 재귀함수 끝났으니 스택에서 제거 -> 처리완료
  finished[current] = true; //현재노드 처리 완료
};

for (let i = 0; i < testNum; i++) {
  let n = +input[i * 2];
  let choices = [0, ...input[i * 2 + 1].split(" ").map(Number)];
  let visited = new Array(n + 1).fill(false);
  let finished = new Array(n + 1).fill(false);
  let result = [];

  for (let current = 1; current <= n; current++) {
    if (!visited[current]) dfs(current, choices, visited, finished, result);
  }
  log(n - result.length); // 모든 노드에서 사이클발생한 노드 빼주기
}
