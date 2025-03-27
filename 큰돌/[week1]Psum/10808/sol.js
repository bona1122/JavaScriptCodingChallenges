// counting => 맵 or 배열 생각하기

// string기반일 떄, sparse한 경우일 때 => 맵
// int기반일 때 => 배열

// 문자를 counting하는 문제이므로, 아스키코드기반 숫자로
// A:65, a: 97 외우기 +25하면 대문자됨.
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
rl.question("", (str) => {
  // (a-z) 26개 담을 배열 생성
  const cnt = new Array(26).fill(0)

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i) - "a".charCodeAt(0)
    cnt[charCode]++
  }

  console.log(cnt.join(" "))
  rl.close()
})
