#include<bits/stdc++.h>
using namespace std;

int test, n;
string a, b;
int main(){
  cin >> test;
  for(int i = 0; i < test; i++){
    cin >> n;
    map<string, int> m;
    for(int j = 0; j < n; j++){
      cin >> a >> b;
      m[b]++;
    }
    long long ret = 1; // TODO: 경우의 수는 값이 보통 커지기에, long long으로 하자
    for(auto cnt: m){
      ret *= cnt.second + 1; // TODO: map에서 값 조회: second, 키 조회, first
    }
    ret--;
    cout << ret << "\n";
  }
  return 0;
}

// 3*2 - 1 
// 4 - 1