#include<bits/stdc++.h>

using namespace std;

// 순서바꿔서 팰린드롬 만들기
// 불가능하면 "I'm Sorry Hansoo" 출력
// 대문자 개수 센다음에, 2의 배수로 있어야하고 하나만 홀수 가능.
int cnt[200];
int flag;
char mid;
string s, ret;
int main(){
  cin >> s;
  for(char a : s) cnt[a]++;
  for(int i = 'Z'; i >= 'A'; i--){
    if(cnt[i]){
      if(cnt[i] & 1){ // 홀수 체크 로직
        mid = char(i); // TODO: 정수를 문자로 변환
        flag++;
        cnt[i]--;
      }
      if(flag == 2) break;
      for(int j = 0; j < cnt[i]; j += 2){
        ret = char(i) + ret + char(i);
      }
    }
  }
  if(mid) ret.insert(ret.begin() + ret.size()  / 2, mid); // TODO: 중앙에 삽입, string.insert(위치, 값)
  if(flag == 2) cout << "I'm Sorry Hansoo";
  else cout << ret <<"\n";
  return 0;
}