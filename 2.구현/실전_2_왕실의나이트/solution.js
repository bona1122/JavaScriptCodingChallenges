let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("");

// 8*8
// 가능한 경우의 수
const move = [
  [2, -1],
  [2, 1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [-1, 2],
  [1, -2],
  [-1, -2],
];

let [column, row] = [
  input[0].charCodeAt(0) - "a".charCodeAt(0) + 1,
  Number(input[1]),
];
let result = 0;

for (let mv of move) {
  let next_row = mv[0] + row;
  let next_col = mv[1] + column;
  if (next_row >= 1 && next_row <= 8 && next_col >= 1 && next_col <= 8)
    result++;
}
console.log(result);
