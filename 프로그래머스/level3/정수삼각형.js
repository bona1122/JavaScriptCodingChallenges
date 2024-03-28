const solution = (triangle) => {
  const n = triangle.length;
  const dp = Array(n).fill().map(() => Array(n).fill(0));
  dp[0][0] = triangle[0][0];
  for (let i = 1; i < n; i++) {
      for (let j = 0; j <= i; j++) {
          let upLeft;
          let up;
      
          if (j === 0) upLeft = 0;
          else upLeft = dp[i - 1][j - 1];

          if (j === i) up = 0;
          else up = dp[i - 1][j];

          dp[i][j] = Math.max(upLeft, up) + triangle[i][j];
      }
  }
  return Math.max(...dp[n - 1]);
}

/// 윤종원 님 풀이
// reduce와 map을 통해 각 라인의 최대값을 구하고, 그 중 최대값을 반환
function solution(triangle) {    
  return Math.max(...triangle.reduce((cost, line) => {        
      return line.map((v, index) => {            
          return v + Math.max((index < cost.length ? cost[index] : 0), (index > 0 ? cost[index-1] : 0));
      });
  }, []));    
}