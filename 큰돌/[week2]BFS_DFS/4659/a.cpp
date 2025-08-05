#include<bits/stdc++.h>
using namespace std;

// 1. 모음 포함하기, 2. 모음/자음 연속 3개 오면 안됨, 3. 같은 글자가 두번오면안됨(e,o는 예외)
string s; 
int lcnt, vcnt; // lcnt: 모음연속빈도, vcnt: 자음연속빈도

bool isVowel(int idx){
	return (idx == 'a' || idx == 'e' || idx == 'i' || idx == 'o' || idx == 'u');
}

int main(){
  while(true){
    cin >> s;
    if(s == "end") break; 
    lcnt = vcnt = 0;
    bool flag = 0;
    bool is_include_v = 0; // 모음 포함 여부
    int prev = -1; // TODO: prev 활용
    for(int i = 0; i < s.size(); i++){ // 문자열 순회
      int idx = s[i]; // 알파벳의 아스키코드
      if(isVowel(idx)) lcnt++, vcnt=0, is_include_v = 1; // 모음이면 모음빈도 체크
      else vcnt++, lcnt = 0;
      if(vcnt == 3 || lcnt == 3) flag = 1; // 연속 모음/자음 3개 나오면 체크
      if(i >= 1 && (prev == idx) && (idx != 'e' && idx != 'o')) flag = 1;
      prev = idx; // 이전 문자 기록
    }
    if(!is_include_v) flag = 1;
    if(flag) cout << "<" << s << ">" << " is not acceptable.\n";
		else cout << "<" << s << ">" << " is acceptable.\n";
  }
  return 0;
}