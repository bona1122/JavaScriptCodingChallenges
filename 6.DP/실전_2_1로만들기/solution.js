const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();

const x = Number(input);

// DP 테이블
const memo = Array(30000 + 1).fill(0);

for(let i = 2; i <= x; i++){
  // 현재의 수에서 1을 빼는 경우
  memo[i] = memo[i - 1] + 1;
  // 현재의 수가 2로 나누어 떨어지는 경우
  if(i % 2 === 0){
    memo[i] = Math.min(memo[i], memo[i / 2] + 1);
  }
  // 현재의 수가 3으로 나누어 떨어지는 경우
  if(i % 3 === 0){
    memo[i] = Math.min(memo[i], memo[i / 3] + 1);
  }
  // 현재의 수가 5로 나누어 떨어지는 경우
  if(i % 5 === 0){
    memo[i] = Math.min(memo[i], memo[i / 5] + 1);
  }
}

console.log(memo[x]);