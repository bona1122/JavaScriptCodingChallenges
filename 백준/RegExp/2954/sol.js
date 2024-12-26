const fs = require("fs");
const path = require("path");
const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : path.join(__dirname, "input.txt");
let input = fs.readFileSync(filePath).toString();
const log = console.log;

// 문제: 모음 뒤에 p, 쓰고 모음 하나 반복 -> 복호화하기
// 캡처그룹() 사용,
// 1. 정규표현식에서는 \로 캡처된 값 사용
// 2. replace메서드에서는 $로 캡처된 값 사용
const reg = /([aeiou])p\1/g;
log(input.replace(reg, "$1"));
