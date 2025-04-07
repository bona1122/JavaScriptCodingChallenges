const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().split("\n")
const log = console.log

// N개 중 선택해서 영양분 만족해야함
// 최소 비용으로 만족하고 싶음
const n = +input.shift()
const arr = input.map((row) => row.split(" ").map(Number))
