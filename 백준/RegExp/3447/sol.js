const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString().trim();
const log = console.log;

// 문자열에서 BUG 없애기
// ABUBUGGB -> AB
// => 반복적으로 replace 필요
const reg = /BUG/g;
let prev = "";
let current = input;
while (prev !== current) {
  prev = current;
  current = current.replace(reg, "");
}
log(current);
