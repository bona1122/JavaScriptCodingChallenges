// 배열 내부의 데이터가 정렬되어 있어야만 사용할 수 있는 알고리즘.
// 위치 변수 3개(시작점, 중간점, 끝점)
// 찾으려는 데이터와 중간점에 있는 데이터는 반복적 비교하여 원하는 데이터 찾음.
// 시간복잡도 O(logN) -> 탐색범위가 1,000만, 2,000만을 넘어가면 고려해보기. 

// 재귀함수로 구현한 이진탐색
const binary_search = (arr, target, start, end) => {
  if (start > end) {
    return;
  }
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    // 중간 값보다 찾는 값이 작은 경우, 왼쪽 확인
    binary_search(arr, target, start, mid - 1);
  } else {
    // 중간 값보다 찾는 값이 큰 경우, 오른쪽 확인
    binary_search(arr, target, mid + 1, end);
  }
};

// 반복문으로 구현한 이진탐색
const binary_search_repeat = (arr, target, start, end) => {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
};
