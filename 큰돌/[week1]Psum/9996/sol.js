// string에서 특정 문자 찾기 -> findOf
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().trim().split("\n")
const log = console.log

let n = +input.shift()
let pattern = input.shift()
let arr = input

let [pre, suf] = pattern.split("*")
for (let item of arr) {
  if (
    item.length >= pre.length + suf.length &&
    pre === item.substring(0, pre.length) &&
    suf === item.substring(item.length - suf.length)
  ) {
    log("DA")
  } else {
    log("NE")
  }
}
