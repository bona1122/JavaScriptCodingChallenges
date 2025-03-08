const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

// 최대한 많은 곡 연주하려면 최소 기타 몇개가 필요한지 구하기
// 곡은 최대 50곡 -> 50개의 비트 필요. => BigInt 필요
const [N, M] = input[0].split(" ").map(Number)
let state = new Array(10).fill(0n) // 각 기타(최대 10개)가 연주할 수 있는 정보를 비트마스크 형태로 저장한 배열

// 각 기타의 정보 처리
for (let i = 1; i <= N; i++) {
  const [name, tmp] = input[i].split(" ")
  state[i - 1] = 0n

  // 각 기타가 연주할 수 있는 곡 정보를 비트로 변환.
  for (let j = M - 1; j >= 0; j--) {
    // 문자열 오른쪽부터 탐색
    state[i - 1] = (state[i - 1] << 1n) | (tmp[j] === "Y" ? 1n : 0n) // 비트확보하고 OR 연산으로 채우기
  }
}

// 비트 카운트 함수 (지정된 비트 수만큼 1인 비트 개수 세기)
function bitCount(x, bitLength) {
  let ret = 0n
  for (let i = 0; i < bitLength; i++) {
    ret += (x >> BigInt(i)) & 1n
  }
  return ret
}

// 최적의 기타 조합 찾기
let ans = [0, -1] // [연주할 수 있는 곡의 수, 필요한 기타의 수]

// 기타 N개 중 부분집합 구하기
for (let tmp = 0; tmp < 1 << N; tmp++) {
  let comb = 0n // 조합한 결과

  // N개의 비트 확인
  for (let i = 0; i < N; i++) {
    if ((tmp & (1 << i)) === 0) continue // 선택되지 않은 기타는 제외
    comb = comb | state[i]
  }

  const songNum = bitCount(BigInt(comb), M)
  const guitarNum = bitCount(BigInt(tmp), N)

  // 1. 연주할 수 있는 곡의 수가 더 많을 경우 업데이트
  // 2. 연주할 수 있는 곡의 수는 같은데 필요한 기타의 수가 더 적을 경우 업데이트
  if (ans[0] < songNum || (ans[0] === songNum && ans[1] > guitarNum)) {
    ans = [songNum, guitarNum]
  }
}

// 필요한 기타의 수 출력
log(ans[0] === 0 ? -1 : Number(ans[1]))
