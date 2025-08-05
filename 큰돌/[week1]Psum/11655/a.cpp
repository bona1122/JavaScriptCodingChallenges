#include<bits/stdc++.h>
using namespace std;

string str;

int main(){
  getline(cin, str);
  // 대문자, 소문자의 경우, 각 문자에 +13 하기
  for(int i = 0; i < str.size(); i++){
    if(65 <= str[i] && str[i] <= 90){ // 대문자
      if(str[i] + 13 > 90) str[i] = str[i] + 13 - 26; // 알파벳 개수만큼 뺴줘서 처음으로 돌아가게 하기
      else str[i] = str[i] + 13;
    }else if(str[i] >= 97 && str[i] <= 122) {// 소문자
      if(str[i] + 13 > 122) str[i] = str[i] + 13 - 26;
      else str[i] = str[i] + 13;
    }
  }
  cout << str;
  return 0;
}