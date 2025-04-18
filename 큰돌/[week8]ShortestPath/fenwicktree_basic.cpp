#include<bits/stdc++.h>
using namespace std;

// 펜윅트리: 최하위 켜져있는 비트를 기반으로 트리를 만들어, "동적배열"에서 구간합을 효율적으로 구하는 자료구조
// 구간합 구하는 쿼리, 값을 갱신하는 것 O(logN)만에 가능
// +) psum(누적합)은 정적배열에서만
int n;
vector<int> tree;

void update(int idx, int val){ // TODO: 확인. 파란노드 만드는 것
  while(idx < tree.size()){ 
    tree[idx] += val; 
    idx += idx & -idx; // 최하위 켜진 비트 더하기
  }
}
int sum(int idx){ // 파란노드 끄집어 내기
  int ret = 0;
  while(idx > 0){ 
    ret += tree[idx]; // 파란노드 더하기
    idx -= idx & -idx; // 최하위 켜진 비트 뺴기
  }
  return ret;
}
int rangeQuery(int left, int right){ // psum과 유사
  return sum(right) - sum(left - 1);
}
int main(){
  vector<int> data = {3,4,10,11};
  n = data.size();
  tree.resize(n+1, 0); // 배열기반으로 트리 만들기

  // 초기 배열을 기반으로 트리 구성
  // 트리의 인덱스는 1부터
  for(int i = 0; i < n; i++){
    update(i+1, data[i]); // update함수로 펜윅트리 만드는 것
  }
  cout << "1~4 sum: " << rangeQuery(1, 4) << "\n"; //28
  cout << "2~3 sum: " << rangeQuery(2, 3) << "\n"; //14

  // index 2에 5 더하기, 즉 data[1] = 4 + 5 = 9로 변경
  update(2, 5); // TODO: 9로변경할거면.. 기존은 4였으니 "차이" 5만큼 더하기
  cout << "1~4 sum: " << rangeQuery(1, 4) << "\n";
  return 0;
}