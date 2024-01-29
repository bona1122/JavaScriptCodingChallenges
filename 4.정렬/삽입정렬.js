// 삽입 정렬은 특정한 데이터를 적절한 위치에 삽입한다. O(N2)
// 데이터가 거의 정렬 되어 있을 때, 선택정렬 보다 효율적!

let arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 1; i < arr.length; i++) { // 삽입할 것.
  for (let j = i; j > 0; j--) { // 삽입할 것을 정렬된 것과 비교하며 한 칸씩 이동.
    if (arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    } else break;
  }
}

console.log(arr);
