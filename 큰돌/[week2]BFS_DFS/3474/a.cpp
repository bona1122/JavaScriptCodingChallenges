#include<bits/stdc++.h>
using namespace std;

// n!의 오른쪽 끝 0의 개수 출력
int test, n;
int main(){
  cin >> test;
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  for(int i = 0; i < test; i++){
    cin >> n;
    int ret2 = 0, ret5 = 0;
    for(int j = 2; j <= n; j*=2){
      ret2 += n / j;
    }
    for(int j = 5; j <= n; j*=5){
      ret5 += n / j;
    }
    cout << min(ret2, ret5) << "\n";
  }
  return 0;
}
