#include<bits/stdc++.h>
using namespace std;

// 투포인터: 선형 자료구조에서 두개의 포인터를 사용하여
// "특정 조건 만족하는 부분 배열" or "원하는 값을 찾는" 문제 풀이 시, 주로 사용
// 보통 "정렬된 배열에서 두 수 합 찾기" / "연속된 부분배열에서 합 찾기"
int n, ret, x;
int main(){
  cin >> n;
  vector<int> a(n); //TODO: n 크기의 동적배열 생성, 모든 요소는 0으로 초기화됨
  for(int i = 0; i < n; i++) cin >> a[i];
  cin >> x;
  sort(a.begin(), a.end()); //TODO: 투포인터는 "정렬된 배열"에서 포인터를 쓰는 것이 핵심
  int l = 0, r = n-1; // 포인터 설정
  while(l < r){
    if(a[l] + a[r] == x) {
      r--; 
      ret++;
    }else if(a[l] + a[r] > x){
      r--;
    }else if(a[l] + a[r] < x){
      l++;
    }
  }

}