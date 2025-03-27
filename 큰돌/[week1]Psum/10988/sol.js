// https://www.acmicpc.net/problem/10988
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim()
const log = console.log
// 펠린드롬인지 확인하기 -> 문자열을 뒤집은것과 비교해서 같은지만 확인하면 됨.
const str = input

log(str === [...str].reverse().join("") ? 1 : 0)

// const palen = (str) => {
//   // 4면 0,1
//   // 5면 0,1,2
//   const n = str.length
//   for (let i = 0; i <= Math.ceil(n / 2) - 1; i++) {
//     if (str[i] !== str[n - 1 - i]) {
//       log(0)
//       return
//     }
//   }
//   log(1)
// }

// palen(str)
