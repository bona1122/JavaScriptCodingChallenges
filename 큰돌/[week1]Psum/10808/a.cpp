#include<bits/stdc++.h>

using namespace std;
// 각 알파벳이 단어에 몇개 포함돼있는지, 소문자

// TODO: a: 97, A:65 (암기) a-z:26개
string str;
int cnt[26];

int main(){
  cin >> str;
  for(auto a: str){
    cnt[a - 'a']++;
  }
  for(int i = 0; i < 26; i++) cout << cnt[i] << " ";
  return 0;
}