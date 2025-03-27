const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().split("\n")
const log = console.log

// 성 같은 선수만 5명 뽑아야함.
// 가능한 성의 첫글자 모두 구하기
// 선발 못하는 경우: PREDAJA 출력

// 배열로 카운팅하고, 5개 이상인 경우만 성의 첫글자 가져오자
// **A:65, a: 97 외우기 +32하면 소문자됨.**
const n = parseInt(input[0])
const cnt = new Array(26).fill(0)
let ret = ""

for (let i = 1; i <= n; i++) {
  const s = input[i]
  cnt[s.charCodeAt(0) - 97]++
}

for (let i = 0; i < 26; i++) {
  if (cnt[i] >= 5) ret += String.fromCharCode(i + 97)
}

ret.length > 0 ? log(ret) : log("PREDAJA")
