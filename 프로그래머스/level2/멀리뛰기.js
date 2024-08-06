// 1칸/2칸 만 움직일 수 있음. 
// n칸만큼 이동해야함

const solution = (n) => {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
      if (i - 1 >= 0) {
          dp[i] += dp[i - 1]; 
      }
      if (i - 2 >= 0) {
          dp[i] += dp[i - 2]; 
      }
      dp[i] = dp[i] % 1234567;
  }
  return dp[n];
}