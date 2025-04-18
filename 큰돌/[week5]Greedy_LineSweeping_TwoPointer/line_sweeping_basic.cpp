#include<bits/stdc++.h>
using namespace std;

typedef pair<int,int> P; // TODO: pair 타입정의해서 쓰기
P L[1000004];
int n, from, to, l, r, ret;
int main(){
  // 1. 라인스위핑: 정렬 후 왼쪽->오른쪽/오른쪽->왼쪽 탐색하는 알고리즘 
  // 최대의 구간,횟수 찾기에 많이 쓰임
  // TODO: 배열은 요소 3000만 까지만 가능.
  
  cin >> n;
  for(int i = 0; i < n; i++){
    cin >> from >> to;
    L[i] = P(from, to);
  }
  // TODO: 배열이나 벡터에 pair<int, int> 타입이 들어있을 때 sort 함수를 사용하면, 기본적으로 첫 번째 원소(first)를 기준으로 오름차순 정렬
  sort(L, L + n); // TODO: 배열정렬. 벡터정렬시는 iter를 쓰도록 begin, end 써주고, 배열 정렬은 주소값 넘겨줌
  l = L[0].first; 
  r = L[0].second;
  for(int i = 1; i < n; i++){
    if(r < L[i].first){ // 완전 새구간 등장한 경우
      ret += (r - l); // 이전구간 더하고, 구간 재정의
      l = L[i].first;
      r = L[i].second;
    }else if(L[i].first <= r && L[i].second >= r){ // 새구간과 이전구간이 일부겹치고, 새구간으로 확장가능한 경우
      r = L[i].second; // r만 갱신해서 범위 늘려주기
    }
  }
  ret += (r-l);
  return 0;
}