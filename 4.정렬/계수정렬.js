// 계수 정렬은 특정한 조건이 부합할 때만 사용할 수 있는 빠른 정렬 알고리즘. 최악의 경우에도 O(N + K) 보장.(K는 데이터 중 최댓값)
// 일반적으로 가장 큰데이터와 가장 작은 데이터의 차이가 백만을 넘지 않을 때 효과적으로 사용가능.
// 동일한 값을 가지는 데이터가 여러 개 등장 할 때 적합. ex) 0-100 성적
// => 데이터 크기가 한정적이고, 데이터 크기가 많이 중복되어 있을수록 유리함

let arr = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];

let count = Array.from({ length: Math.max(...arr) + 1 }, (_) => 0);
console.log(count);

for (let i = 0; i < arr.length; i++) {
  count[arr[i]]++;
}

for (let i = 0; i < count.length; i++) {
  if (count[i] !== 0) process.stdout.write(`${i} `.repeat(count[i]));
}