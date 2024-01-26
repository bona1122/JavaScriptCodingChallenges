let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();

const N = Number(input);
const reg = new RegExp(/3/);
let result = 0;

// 00/00/00 -> 05/59/59
for (let i = 0; i <= N; i++) {
  for (let j = 0; j <= 59; j++) {
    for (let k = 0; k <= 59; k++) {
      if (reg.test(`${i}${j}${k}`)) {
        result++;
      }
    }
  }
}
console.log(result);
