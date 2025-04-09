#include<bits/stdc++.h>
using namespace std;

// A와 B로만 이루어진 단어가 한 줄에 하나씩
// TODO: 문제를 스택으로 풀이하는 관점. 문제에서 (짝짓기/폭발) -> stack 
int N, ret;
string s;
int main(){
  cin >> N;
  for(int i = 0; i < N; i++){
    cin >> s;
    stack<char> stk;
    for(char a : s){
      if(stk.size() && stk.top() == a) stk.pop(); // TODO: 스택관련 메서드. 특히 size체크 후에 top 확인하는게 필수! 참조에러 방지
      else stk.push(a);
    }
    if(stk.size() == 0) ret++;
  }
  cout << ret;
  return 0;
}