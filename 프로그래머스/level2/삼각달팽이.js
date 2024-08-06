const solution = n => {
  const arr = Array(n).fill(0).map((_, i) => Array(i + 1).fill(0)); 
  let initial = 1;
  let [x, y] = [-1, 0]; 
  for(let size = n; size > 0; size -= 3){
      // 아래 이동
      for(let i = 0; i < size; i++){
          arr[++x][y] = initial++;   
      }
      // 오른쪽 이동
      for(let i = 0; i < size - 1; i++){
          arr[x][++y] = initial++;
      }
      // 대각선 위로 이동
      for(let i = 0; i < size - 2; i++){
          arr[--x][--y] = initial++;
      }
  }
  return arr.flat();
}