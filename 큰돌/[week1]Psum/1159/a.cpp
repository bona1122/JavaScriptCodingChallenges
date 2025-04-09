#include<bits/stdc++.h>
using namespace std;

// 성의 첫글자가 같은 선수 5명 선발. 5명 안되면 기권
// 알파벳 소문자!
int cnt[26];
int N;
string s;
string ret = "";
int main(){
  cin >> N;
  for(int i = 0; i < N; i++){
    cin >> s;
    cnt[s[0] - 'a']++;
  }

  for(int i = 0; i < 26; i++){
    if(cnt[i] >= 5) ret += i + 'a'; //TODO: 문자열과 연산 시, 자동으로 문자로 변환
  }
  ret.size() ? cout << ret : cout << "PREDAJA";
  return 0;
}