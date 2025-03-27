const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().split("\n")
const log = console.log


// 치킨집중 최대 M개 골라서 가장 작은 치킨거리 되는 것 구하기
// 무식하게 될까?
// M이 최대 13, 집은 최대 100 곳
// 13Cx * 100