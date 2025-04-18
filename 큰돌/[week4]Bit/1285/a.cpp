#include<bits/stdc++.h>
using namespace std;

// TODO: bool벡터를 숫자로 표현하고, 뒤집는것을 ~ 활용
// 행을 1차로 뒤집어 놨다면, 열은 T의 개수가 많으면 뒤집는게 확정
const int INF = 987654321;
int n, a[40], ret = INF;
string s;
void go(int here){
  if(here == n + 1){ // 모든행에대해 그대로/뒤집기 수행했으므로 열 선택
    int sum = 0;
    for(int i = 1; i <= (1 << (n-1)); i *= 2){ // 첫번째열(가장오른쪽 열) 비트부터 확인
      int cnt = 0;
      for(int j = 1; j <= n; j++) if(a[j] & i) cnt++; // 각행에대해 확인
      sum += min(cnt, n - cnt); // T개수 최적해로 카운트
    }
    ret = min(ret, sum); 
    return;
  }
  go(here + 1); // 안뒤집기
  a[here] = ~a[here]; // 해당행 뒤집고도 수행
  go(here + 1);
}
int main(){
  ios_base::sync_with_stdio(false);
	cin.tie(NULL); cout.tie(NULL);
  cin >> n;
  for(int i = 1; i <= n; i++){
    cin >> s;
    int value = 1;
    for(int j = 0; j < s.size(); j++){
      if(s[j] == 'T') a[i] = a[i] | value;
      value = value << 1;
    }
  }
  go(1);
  cout << ret << '\n';
  return 0;
}