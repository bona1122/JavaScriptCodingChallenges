const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().split("\n")
const log = console.log

// TODO: DP 자바스크립트로!
// 한도시에서 출발해서 모든 노드 거치고 다시 돌아오는 경로
// 가장 적은 비용을 들여야함.
// 단방향 가중치 그래프

const N = +input.shift()
const w = input.map((row) => row.split(" ").map(Number))
const dp = Array.from({ length: N }, () => Array(1 << N).fill(-1))

// 순열을 고려하면 됨. N은 최대 16이니까 16! => 큰 시간복잡도
// dp[here][visited]는 현재 here 도시에 있고, visited 상태(어떤 도시들을 방문했는지)일 때,
// 남은 도시들을 모두 방문하고 시작점으로 돌아가는 최소 비용을 저장
// 초기메롱!!!!!!
const tsp = (here, visited) => {
  if (visited === (1 << N) - 1) { 
    // 기저사례. 모든 지점을 방문했다면(111111)
    return w[here][0] ? w[here][0] : Infinity // Infinity로 배제시키기
  }

  // 메모이제이션
  if (dp[here][visited] !== -1) return dp[here][visited]
  // 현재 상태의 최소 비용
  let minCost = Infinity
  // 다음에 방문할 것
  for (let next = 0; next < N; next++) {
    if (visited & (1 << next)) continue // 이미 방문했다면 스킵
    if (w[here][next] === 0) continue // 경로 없으면 스킵

    // 방문가능한 다음 도시로 이동했을 때의 비용 계산
    const nextCost = tsp(next, visited | (1 << next)) + w[here][next]
    minCost = Math.min(minCost, nextCost)
  }

  // 결과 저장 후 반환
  return (dp[here][visited] = minCost)
}
log(tsp(0, 1)) // 1번(0번) 부터 시작하고 1번 방문했다고 표시