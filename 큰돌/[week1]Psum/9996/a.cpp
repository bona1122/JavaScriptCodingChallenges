#include<bits/stdc++.h>
using namespace std;

// 알파벳 소문자 여러개와 별표하나
// 패턴과 일치하는지 구하기
int n;
string pattern, input;
pair<string, string> p;
int main(){
  cin >> n;
  cin >> pattern;
  int pos = pattern.find('*');
  p.first = pattern.substr(0, pos);
  p.second = pattern.substr(pos + 1);
  
  for(int i = 0; i < n; i++){
    cin >> input;
    if(p.first.size() + p.second.size() > input.size()) cout << "NE\n";
    else{
      if(p.first == input.substr(0, p.first.size()) && p.second == input.substr(input.size() - p.second.size())) cout << "DA\n";
      else cout << "NE\n";
    }
  }
  
  return 0;
}