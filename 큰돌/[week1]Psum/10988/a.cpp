#include<bits/stdc++.h>
using namespace std;

string str, temp;
int ret = 1;
int main(){
  /*  방법 1: 인덱스 접근
  cin >> str;
  for(int i = 0; i < str.length()/2; i++){
    if(str[i] != str[str.length() - i - 1]) {
      ret = 0;
    }
  }
  cout << ret;
  return 0;
  */

  cin >> str;
  temp = str; // TODO: string에 대입연산자 쓰면, 주소복사 아닌 값복사 일어남(깊은 복사)
  reverse(str.begin(), str.end()); // TODO: reverse는 문자열 자체를 바꿈

  temp == str ? cout << 1 : cout << 0;
  return 0;
}