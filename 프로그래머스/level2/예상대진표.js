// 몇번째 라운드에서 만나는지.
// a, b는 만나기 전까지 항상 이긴다고 가정!

// 일단 n명이면 처음은 n/2판이 됨.
const solution = (n, a, b) => {
  let answer = 0;
  while(a !== b){
      answer++;
      a = Math.ceil(a / 2);
      b = Math.ceil(b / 2);
  }
  return answer;
}

// 4명, 1,4번이라고 해보자
// 처음은 1,2 / 3,4 /5,6 붙을 것
// 다음은 총 n/2명이 됨 - 2명