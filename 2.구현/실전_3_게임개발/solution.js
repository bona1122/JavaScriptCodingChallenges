let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

//TODO: 다시 해보기

const [N, M] = input[0].split(" ").map((el) => Number(el));

const view = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
]; // 북, 동, 남, 서

// 북 서 남 동

const second_row = input[1].split(" ").map((el) => Number(el));
let point = second_row.slice(0, -1); // 현재 위치
let current_view = second_row.pop(); // 현재 시야

let [, , ...game_map] = input;
game_map = game_map.map((row) => row.split(" ").map((item) => Number(item)));

let result = 1;

// while (true) {
//   let repeat = 0;
//   while (true) {
//     current_view -= 1; // 시야 전환 (북, 서, 남, 동 순으로 돌아야됨.)
//     if (current_view < 0) current_view = 3;
//     // console.log('view: ' + current_view);
//     new_row = point[0] + view[current_view][0];
//     new_col = point[1] + view[current_view][1];
//     // console.log('새위치: '+game_map[new_row][new_col]);
//     if (game_map[new_row][new_col] == 0) {
//       // 해당 방향이 안 가본 곳이면 가기.
//       point = [new_row, new_col];
//       result++;
//       break;
//     }
//     repeat++;
//     if (repeat == 4) break; // 4방향을 모두 체크한 경우 그만하기.
//   }
//   if (repeat == 4) {
//     // 4방향을 모두 체크하고 나온경우, 뒤로 갈 수 있는지 확인하.
//     console.log(result);
//     break;
//   }
// }

const turn_left = (direction) => {
  return direction - 1 < 0 ? 3 : direction - 1;
};

let turn_time = 0;
while (true) {
  current_view = turn_left(current_view); // 왼쪽으로 회전
  new_row = point[0] + view[current_view][0];
  new_col = point[1] + view[current_view][1];
  // 회전 이후, 가보지 않은 칸이 있다면 이동
  if (game_map[new_row][new_col] == 0) {
    // 해당 방향이 안 가본 곳이면 가기.
    point = [new_row, new_col];
    game_map[new_row][new_col] = 1;
    result++;
    turn_time = 0;
    continue;
  } else {
    turn_time++;
  }
  if (turn_time == 4) { // 4방향 모두 봤으면 뒤로 갈수 있는지 체크 
    new_row = point[0] - view[current_view][0];
    new_col = point[1] - view[current_view][1];
    if (game_map[new_row][new_col] == 0) {
      point = [new_row, new_col];
    } else break;
    turn_time = 0;
  }
}

console.log(result);