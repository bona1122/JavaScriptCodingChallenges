#include<bits/stdc++.h>
using namespace std;

// 두개 합쳐서 M되면 갑옷 만들어짐
// n개중 2개 고르는 문제 -> 조합. 순서상관없음
// 2중 for문 or 재귀로 풀기
int N, M, ret;
int arr[15000];

void combi(int idx, vector<int>& v){
  if(v.size() == 2){ // 기저사례
    int b = arr[v[0]];
    int c = arr[v[1]];
    if( b + c == M) ret++;
    return;
  }
  for(int i = idx + 1; i < N; i++){
    v.push_back(i);
    combi(i, v);
    v.pop_back();
  }
}

int main(){
  cin >> N;
  cin >> M;
  for(int i = 0; i < N; i++) cin >> arr[i];
  /* 방법1: 중첩 for문
  for(int i = 0; i < N; i++){
    for(int j = i+1; j < N; j++){
      if(arr[i] + arr[j] == M) ret++;
    }
  }
   */

  // TODO: 방법2: 재귀
  vector<int> v;
  combi(-1, v);
  cout << ret;

  return 0;
}