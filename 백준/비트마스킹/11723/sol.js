const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

// check 연산마다 결과 출력
// 집합의 원소는 1~20까지 가능

// 비트마스킹 이용 안한 버전 -> 배열을 이용해서 0,1
/*
const M = +input[0]
let selected = Array(20).fill(0)

for (let i = 1; i <= M; i++) {
  let [op, num] = input[i].split(" ")
  num = +num
  if (op === "add") {
    selected[num - 1] = 1
  } else if (op === "remove") {
    selected[num - 1] = 0
  } else if (op === "check") {
    log(selected[num - 1])
  } else if (op === "toggle") {
    selected[num - 1] = 1 ^ selected[num - 1]
  } else if (op === "all") {
    selected = selected.map(() => 1)
  } else {
    // 'empty'
    selected = selected.map(() => 0)
  }
}
*/

// 비트 마스킹을 이용하면 숫자하나로 20칸의 배열을 대체할 수 있고, -> 20개의 비트
// all, empty 연산도 한번의 연산만으로 가능하기에 기존처럼 배열원소 20개를 돌지 않아도 되어 효율적
const M = +input[0]
let state = 0
for (let i = 1; i <= M; i++) {
  let [op, num] = input[i].split(" ")
  num = +num
  if (op === "add") {
    state = state | (1 << (num - 1)) // 특정 비트 켜기
  } else if (op === "remove") {
    state = state & ~(1 << (num - 1)) // 해당비트만 끈 후, AND 연산
  } else if (op === "check") {
    log((state >> (num - 1)) & 1)
  } else if (op === "toggle") {
    state = state ^ (1 << (num - 1))
  } else if (op === "all") {
    // state = (1 << 20) - 1
    state = 0xfffff
  } else {
    state = 0 // 'empty' - 모든 비트 0으로 바꾸기
  }
}
