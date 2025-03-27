#include<bits/stdc++.h>
using namespace std;

int n = 5, k = 3, a[5] = {0, 1, 2, 3, 4};
void print(vector<int> &b) {
  for(auto i : b) cout << i << " ";
  cout << '\n';
}
void combi(int start, vector<int> &b){
  if(b.size() == k){ // 3개가 뽑혔으면 출력
    print(b);
    return;
  }
  for(int i = start; i < n; i++){
    b.push_back(a[i]);
    combi(i + 1, b);
    b.pop_back();
  }
}
int main(){
  vector<int> b;
  combi(0, b);
  return 0;
}