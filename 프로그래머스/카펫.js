const solution = (brown, yellow) => {
  const sum = brown + yellow;
  for(let i = 2; i <= sum; i++){
      if(sum % i === 0) {
          const width = i;
          const height = sum / i;
          if ((width - 2) * (height - 2) === yellow && width >= height) {
              return [width, height]; // 조건에 맞는 가로, 세로 반환
          }
      }
  }
}