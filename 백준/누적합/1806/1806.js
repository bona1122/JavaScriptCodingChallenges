const fs = require("fs");
const path = require("path");
const input = fs
  .readFileSync(path.join(__dirname, "input.txt"))
  .toString()
  .split("\n");
const log = console.log;

const [n, s] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

// 수열길이 n, 부분합 중 S이상되는 것 중, 가장짧은 것 길이 찾기
const prefixSum = Array(n + 1).fill(0);
let result = Infinity;

for (let i = 1; i <= n; i++) {
  prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
}


  for(let i = 1; i <= n; i++){ // right
    for(let j = i; j > 0; j--){ // left
      if(prefixSum[i] >= s + prefixSum[j-1]){
        result = Math.min(i - j + 1, result);
      }
    }
  }

log(result === Infinity ? 0 : result)