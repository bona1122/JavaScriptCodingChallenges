#include<bits/stdc++.h>
using namespace std; 

// 길이 n인 수식에 대해, 괄호를 추가해서 만드는 최대값 구하기
// TODO: 누적합으로 처리하는 관점. 방향성을 정하고 누적합기반으로. +) 인덱스 기반으로 처리방법 생각하기
vector<int> num; 
vector<char> oper_str; 
int n, ret = -987654321;
string s; 
void fastIO(){ // TODO: 입출력 속도 향상 
  ios_base::sync_with_stdio(false);
  cin.tie(NULL); 
  cout.tie(NULL);
} 
int op(char a, int b, int c){
  if(a == '+') return b + c; 
  if(a == '-') return b - c; 
  if(a == '*') return b * c;  
} 
void go(int here, int _num){ 
  if(here == oper_str.size()){ 
      ret = max(ret, _num); 
      return;
  }  
  // 1. 현재연산자(here) 먼저 하는 경우
  go(here + 1, op(oper_str[here], _num, num[here + 1]));
  if(here + 2 <= oper_str.size()){
    // 2. 뒤의연산자(here + 1) 먼저 하는 경우
      int temp = op(oper_str[here + 1], num[here + 1], num[here + 2]); 
      go(here + 2, op(oper_str[here], _num, temp));  
  } 
} 
int main(){
  fastIO();
  cin >> n;
  cin >> s;
  for(int i = 0; i < n; i++){
    if(i % 2 == 0) num.push_back(s[i] - '0');
    else oper_str.push_back(s[i]);
  }
  go(0, num[0]);  
  cout << ret << "\n";
  return 0;
}