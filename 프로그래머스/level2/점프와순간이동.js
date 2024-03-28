const solution = (n) => {
  let rest = n;
  let result = 0;
  while(true){
      let sum = 0;
      if(rest === 0){
          break;
      }
      while((rest - sum) % 2 !== 0){ // 2로 나눠지지 않으면, 2로 나눠질 때까지 빼기
          sum++;
      }
      rest = (rest - sum) / 2; // 2로 나누기
      result += sum;
  }
  return result;
}

///// 토르코 님 풀이
// 어떤 수를 계속해서 2로나누면서 나오는 나머지들의 합은 2진수로 표현했을 때 1의 개수와 같다.
function solution(n){
    if(n === 1) return 1;
    const nArr = Array.from(n.toString(2));
    return nArr.reduce((a,b)=>(+a)+(+b));
}

/// 리마인드
// 2진수로 표현하는 법: n.toString(2)
// 문자열을 Array.from에 넣어주면 각 자리수를 배열로 만들어준다.