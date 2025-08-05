#include<bits/stdc++.h>
using namespace std;

// Binary Search: "정렬"된 배열에서 탐색범위 반으로 줄이며 탐색
// -> 크기 큰 배열에서 특정 값 찾을 때 사용, 최적화 문제(최소화/최대화)에를 결정문제로 만드는데에도 쓰임
// TODO: upper_bound(v.begin(), v.end(), x)는 "x보다 큰" 첫 번째 요소의 위치를 반환합니다.
// TODO: lower_bound(v.begin(), v.end(), x)는 "x 이상"인 첫 번째 요소의 위치를 반환합니다.
int binarySearch(const vector<int>& arr, int target){
  int start = 0;
  int end = arr.size() - 1;
  while(start <= end){
    // int mid = (start + end) / 2;
    int mid = start + (end - start) / 2; // 위의 주석된 코드는 오버플로우가 발생할 위험 있어서 이렇게 씀
    if(arr[mid] == target) {
      return mid;
    }else if(arr[mid] < target) start = mid + 1;
    else end = mid - 1; 
  }
  return -1;
}
int main(){
  vector<int> arr = {1, 3, 6, 9, 20, 21, 30};
  sort(arr.begin(), arr.end());
  int target = 6;
  int result = binarySearch(arr, target);
  if(result != -1) cout << "fount at index: " << result;
  else cout << "not found";
  return 0;
}