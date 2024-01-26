let fs = require("fs");

let input = fs.readFileSync("./input.txt").toString().split("\n");

const N = Number(input[0]);
const plan = input[1].split(" ");

const move = {
  L: [0, -1],
  R: [0, 1],
  U: [-1, 0],
  D: [1, 0],
};

let start = [1, 1];
plan.forEach((el) => {
  let point = [move[el][0] + start[0], move[el][1] + start[1]];
  if (point[0] > 0 && point[1] > 0 && point[0] <= N && point[1] <= N)
    start = point;
});

console.log(`${start[0]} ${start[1]}`);

///////////// 책 풀이
// N = 5;
// plan = ["R", "R", "R", "U", "D", "D"];
// let [x, y] = [1, 1];
// let dx = [0, 0, -1, 1];
// let dy = [-1, 1, 0, 0];
// const move_types = ["L", "R", "U", "D"];

// plan.forEach((move) => {
//   for (let i = 0; i < move_types.length; i++) {
//     if (move == move_types[i]) {
//       nx = x + dx[i];
//       ny = y + dy[i];
//       console.log(nx + " " + ny);
//     }
//   }
//   if (nx > 0 && ny > 0 && nx <= N && ny <= N) {
//     x = nx;
//     y = ny;
//   }
// });

// console.log(x + " " + y);
