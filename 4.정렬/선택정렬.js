// 선택 정렬은 가장 작은 데이터를 앞으로 보내는 과정을 N-1 번 반복하면 정렬이 완료됨.
// O(N2)

let arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 0; i < arr.length; i++) {
  let min_index = i; // 가장 작은 원소의 인덱스
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[min_index] > arr[j]) min_index = j;
  }
  [arr[min_index], arr[i]] = [arr[i], arr[min_index]]; // arr[min_index]와 arr[i] 바꾸기
}

console.log(arr);
