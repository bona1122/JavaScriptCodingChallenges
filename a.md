g++ -std=c++14 -Wall a.cpp -o test.out

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt")
const input = require("fs").readFileSync(filePath).toString().split("\n")
const log = console.log
