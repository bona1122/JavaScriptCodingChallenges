#include<bits/stdc++.h>
using namespace std;

// 숫자를 1,2,3의 합으로 나타내는 방법 수 구하기
// TODO: 경우의 수는 "더하는 것"
typedef long long ll; //TODO: 경우의 수는 큰수가 나올 수 있으므로 long long
ll t, n, dp[10001];
int main(){
  ios::sync_with_stdio(false);
  cin.tie(NULL);
  cin >> t;
  dp[0] = 1;
  for(int i = 1; i <= 3; i++){
    for(int j = 1; j <= 10000; j++){
      if(j - i >= 0) dp[j] += dp[j-i];
    }
  }
  while(t--){
    cin >> n;
    cout << dp[n] << '\n';
  }
  return 0;
}