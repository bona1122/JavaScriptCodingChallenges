#include<bits/stdc++.h>

using namespace std;

// 총 세대 트럭. 주차비용구하기
// 주차하는 트럭수에 따라 할인해줌
// 한대 1분에 a, 두대 1분에 b, 세대 1분에 c

int A,B,C;
int cnt[101];
int s, e;
int ret;
// 총 세줄.
int main() {
  cin >> A >> B >> C;
  for(int i = 0; i < 3; i++){
    cin >> s >> e;
    for(int j = s; j < e; j++) cnt[j]++;
  }

  for(int i = 0; i < 101; i++){
    if(cnt[i] == 1){
      ret += A;
    }else if(cnt[i] == 2){
      ret += B * 2;
    }else if(cnt[i] == 3){
      ret += C * 3;
    }
  }

  cout << ret;
  return 0;
}