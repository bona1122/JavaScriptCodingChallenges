
let n = 1260;
let count = 0;

// 큰 단위의 화폐부터 차례대로 확인
const coin_types = [500, 100, 50, 10];

for (const coin of coin_types){
  count += Number.parseInt(n / coin);
  n %= coin;
}

console.log(n);
console.log(count);

// 이 문제는 그리디 알고리즘으로 해결 가능. 그러나 거스름돈 문제에서 동전 단위가 서로 배수형태가 아니라면, 그리디 알고리즘으로 해결할 수 없음!
// 그런 경우는 다이나믹 프로그래밍으로 해결할 수 있음.