#include<bits/stdc++.h>
using namespace std;

// 무식 -> dp -> 그리디
// 그리디 조건 2가지 : 1. 최적부분구조, 2. 탐욕선택속성
// TODO: 보통 "정렬/pq"를 이용하여 풀리는 경우가 다수
int ret, totalAmount = 12100;
int main(){
  vector<pair<int,int>> currency = {{10000, 5}, {5000, 5}, {1000, 5}, {100, 5}};
  sort(currency.rbegin(), currency.rend()); // TODO: 역방향반복자를 이용해서 내림차순 정렬
  for(auto &c : currency){
    while(totalAmount >= c.first){
      totalAmount -= c.first;
      c.second--;
      ret++;
    }
  }
  if(totalAmount == 0) cout << ret << '\n';
  else cout << '불가능합니다. \n';
  return 0;
}