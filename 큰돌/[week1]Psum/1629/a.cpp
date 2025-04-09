#include<bits/stdc++.h>
using namespace std;

// A의 B승 구하기. C로 나눈 나머지 출력
// TODO: 매번 곱하는 것을 for문보다 빨리해야함.
// log(n)으로 줄일 수 있다.
// 
typedef long long ll;
ll a, b, c;
ll go(ll a, ll b) {
  if(b == 1) return a % c; // 기저사례

  ll ret = go(a, b/2); // 2줄이 핵심
  ret = (ret * ret) % c;
  if(b % 2) ret = (ret * a) % c; // 홀수인 경우 처리 -> a 한번 더 곱해주기
  return ret;
}
int main(){
  cin >> a >> b >> c;
  cout << go(a, b);
  return 0;
}