#include<bits/stdc++.h>
using namespace std;

int n, m, s, e, psum[10004], temp;
int main(){
  cin >> n >> m;
  for(int i = 0; i < n; i++) {
    cin >> temp;
    psum[i+1] = psum[i] + temp;
  }
  for(int i = 0; i < m; i++){
    cin >> s >> e;
    cout << psum[e] - psum[s-1] << '\n';
  }
  return 0;
}
