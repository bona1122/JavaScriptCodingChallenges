// TODO: DP 구현 확인
function solution(input) {
  const lines = input.trim().split("\n")
  const [n, m] = lines[0].split(" ").map(Number)
  const b = lines[1].split(" ").map(Number)

  // 3차원 DP 배열 생성 및 -1로 초기화
  const dp = Array(104)
    .fill()
    .map(() =>
      Array(2)
        .fill()
        .map(() => Array(34).fill(-1))
    )

  function go(idx, tree, cnt) {
    // 기저 사례: 나무 변경 횟수가 음수면 불가능한 경우
    if (cnt < 0) return -1e9
    // 기저 사례: 모든 위치를 다 방문했을 때
    if (idx === n) return 0

    // 이미 계산된 값이면 반환
    if (dp[idx][tree][cnt] !== -1) return dp[idx][tree][cnt]

    // 현재 나무에 머무르거나 다른 나무로 이동하는 경우 중 최대 값 선택
    return (dp[idx][tree][cnt] =
      Math.max(
        go(idx + 1, tree ^ 1, cnt - 1), // 다른 나무로 이동 (XOR 연산 사용)
        go(idx + 1, tree, cnt) // 현재 나무에 머무름
      ) + (tree === b[idx] - 1 ? 1 : 0)) // 현재 나무에 열매가 있으면 1 추가
  }

  // 두 가지 초기 상태(0번 나무에서 시작, 1번 나무에서 시작) 중 최대 값 계산
  const result = Math.max(go(0, 1, m - 1), go(0, 0, m))
  return result
}
