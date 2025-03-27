const { exit } = require("process")
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

// 1-9, 구멍(H)
// 현재위치 X의 숫자만큼 상/하/좌/우 로 이동가능. 구멍 무시가능
// 구멍에 빠지거나 바깥으로 가면 게임 종료. 최대 몇번 움직일 수 있는지 구하기

const [N, M] = input[0].split(" ").map(Number)
const map = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0))

// 맵 데이터를 1,1부터 채우기
for (let i = 1; i <= N; i++) {
  const row = input[i].split("")
  for (let j = 1; j <= M; j++) {
    map[i][j] = row[j - 1] === "H" ? "H" : +row[j - 1]
  }
}

// 무한히 움직일수있으면 -1 출력
// dfs로 탐색하면서 재방문하면 사이클이 있다는 의미이므로 -1 출력
const dp = Array.from({ length: N + 1 }, () =>
  Array.from({ length: M + 1 }, () => 0)
)
const visited = Array.from({ length: N + 1 }, () =>
  Array.from({ length: M + 1 }, () => 0)
)

const dy = [1, 0, -1, 0]
const dx = [0, 1, 0, -1]

const checkIn = (y, x) => {
  return y > 0 && x > 0 && y <= N && x <= M
}

const dfs = (y, x) => {
  // 기저사례 -> 홀이거나 벗어나면
  if (!checkIn(y, x) || map[y][x] === "H") return 0

  // 사이클 발생 시 -1 출력
  if (visited[y][x]) {
    log(-1)
    exit(0)
  }

  // 메모이제이션
  if (dp[y][x] !== 0) return dp[y][x]

  // 로직
  visited[y][x] = 1
  let ret = 0
  let jump = map[y][x]

  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i] * jump
    let nx = x + dx[i] * jump
    ret = Math.max(ret, dfs(ny, nx) + 1)
  }

  visited[y][x] = 0 // TODO: 이렇게 원복하는 DP가 있고,, 아닌 순수 DP가 있고.. 보텀업 DP가 있고...
  return (dp[y][x] = ret)
}

log(dfs(1, 1))
