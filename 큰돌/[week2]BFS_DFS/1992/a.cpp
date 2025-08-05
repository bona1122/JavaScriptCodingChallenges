#include<bits/stdc++.h>
using namespace std;

// TODO: 분할/정복 문제. 하위문제를 해결해서 상위문제 해결
// 덩어리가 모두 0,모두 1인지 확인하고 아니라면 4개로 분할해서 확인
typedef long long int ll;     
int n; 
string s;   
char a[101][101];

string quard(int y, int x, int size){
  if(size == 1) return string(1, a[y][x]); // char을 string으로 만들어줌. 반복숫자와함께 문자 넘겨주기
  char b = a[y][x]; // 모두 1 또는 0 인지 확인 위한 기준점
  string ret = "";
  for(int i = y; i < y + size; i++){
    for(int j = x; j < x + size; j++){
      if(b != a[i][j]){ // 다른것 발견되면 4개로 나누기
        ret += '(';
        ret += quard(y, x, size/2);
        ret += quard(y, x + size/2, size/2);
        ret += quard(y + size/2, x, size/2);
        ret += quard(y + size/2, x + size/2, size/2);
        ret += ')';
        return ret;
      }
    }
  }
  return string(1, a[y][x]);
}

int main(){
  cin >> n;
  for(int i = 0; i < n; i++){
    cin >> s;
    for(int j = 0; j < n; j++){
      a[i][j] = s[j];
    }
  }

  cout << quard(0, 0, n) << '\n';
  return 0;
}