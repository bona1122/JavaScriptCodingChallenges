#include<bits/stdc++.h>
using namespace std;

// 포켓몬의 개수 N, 맞춰야 하는 문제의 개수 M
//  문제가 알파벳으로만 들어오면 -> 포켓몬 번호 
// 숫자로만 들어오면 -> 포켓몬 번호에 해당하는 문자를 출력

// 맵 두개 만들기
// 문제가 숫자인지, 알파벳인지 판별하기
int N, M;
string s;
map<string, int> stoimap;
map<int, string> itosmap;
int main(){
  // TODO: 입출력 속도 개선 -> 아래두줄
  ios_base::sync_with_stdio(false);
	cin.tie(NULL); cout.tie(NULL);
  cin >> N >> M;
    
  for(int i = 0; i < N; i++){
    cin >> s;
    stoimap[s] = i + 1;
    itosmap[i + 1] = s;
  }
  for(int i = 0; i < M; i++){
    cin >> s;
    if(atoi(s.c_str()) == 0){
      cout << stoimap[s] << "\n";
    }else{
      // TODO: atoi 문지열을 숫자로 변환
      // TODO: string.c_str(): string을 문자(char)배열로 만들기 위해 씀 -> atoi에 쓰기 위해
      cout << itosmap[atoi(s.c_str())] << "\n";
    }
  }
  return 0;
}