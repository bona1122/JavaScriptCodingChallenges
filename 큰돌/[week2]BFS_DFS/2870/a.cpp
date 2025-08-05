#include<bits/stdc++.h>
using namespace std;

// 숫자,소문자로 이루어진 문자열 n줄. 숫자찾아서 오름차순 정렬 
// TODO: int는 10^9 -> 10글자, long long -> 19글자 => 100글자 커버 불가능 => bigint or string 써야함
// TODO: 숫자문자 구분 -> 아스키코드 65미만이면 숫자!
// TODO: 숫자문자열 정렬할 때 커스텀 비교함수 작성하기. 
int n;
string s, ret;
vector<string> v;

void go(){
  while(true){
    // TODO: 요소 제거하기 erase 확인 -> 2글자 삭제: str.erase(str.begin(), str.begin() + 2);
    // front: 맨앞글자, back: 맨뒷글자 -> 둘다 빈문자열아닌지 확인 후에 사용하기
    if(ret.size() && ret.front() == '0') ret.erase(ret.begin()); // 첫글자가 0이면 0제외
    else break;
  }
  if(ret.size() == 0) ret = "0"; 
  v.push_back(ret);
  ret = "";
}
bool cmp(string a, string b){
  if(a.size() == b.size()) return a < b; // a가 작아야 먼저배치
  return a.size() < b.size(); // a가 작아야 먼저 배치
}
int main(){
  cin >> n;
  while(n--){
    cin >> s;
    ret = "";
    for(int i = 0; i < s.size(); i++){ // 문자열 순회
      if(s[i] < 65) ret += s[i]; // 숫자/문자 구분
      else if(ret.size()) go();
    }
    if(ret.size()) go();
  }
  sort(v.begin(), v.end(), cmp); // TODO: 비교함수는 반드시 bool 타입을 반환
  for(auto i : v) cout << i << "\n";
  return 0;
}