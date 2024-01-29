// 퀵정렬은 피벗이 사용됨. 이 예시는 호어 분할 방식. 평균: O(NlogN)-선형로그시간 / 최악: O(N2) 
// 데이터가 정렬되어 있는 경우, 아래처럼 피봇을 선택하는 방식은 매우 느리게 동작. 

let arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

/*
const quick_sort = (arr, start, end) => {
  if (start >= end) return; // 원소가 1개인 경우, 종료.
  let pivot = start;
  let left = start + 1;
  let right = end;

  while (left <= right) {
    while (arr[left] <= arr[pivot] && left <= end) left++;
    while (arr[right] >= arr[pivot] && right > start) right--;
    if (left > right) [arr[pivot], arr[right]] = [arr[right], arr[pivot]];
    else [arr[left], arr[right]] = [arr[right], arr[left]];
  }

  quick_sort(arr, start, right - 1);
  quick_sort(arr, right + 1, end);
};

quick_sort(arr, 0, arr.length - 1);
console.log(arr); 
*/

////////////////////////////// 배열의 filter 메서드를 사용한 버전 -> 시간은 좀 더 비효율적이지만 직관적.
const quick_sort_with_filter = (arr) => {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let remain = arr.slice(1);

  let left_side = remain.filter((item) => item <= pivot);
  let right_side = remain.filter((item) => item > pivot);

  return [
    ...quick_sort_with_filter(left_side),
    pivot,
    ...quick_sort_with_filter(right_side),
  ];
};
console.log(quick_sort_with_filter(arr));

