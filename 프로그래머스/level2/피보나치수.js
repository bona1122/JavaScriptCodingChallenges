const solution = (n) => {
  const fibo = Array(n + 1).fill(0);
  fibo[1] = 1;
  for(let i = 2; i <= n; i++){
      fibo[i] = (fibo[i - 2] + fibo[i - 1])% 1234567;
  }
  return fibo[n];
}

// 메모리 효율성을 높일 수 있음
function solution(n) {
  var a = 0, b = 1, f = 1;
  for (var i = 2; i <= n; i++) {
    f = (a + b) % 1234567;
    a = b;
    b = f;
  }
  return f;
}