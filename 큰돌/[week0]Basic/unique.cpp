#include<bits/stdc++.h>
using namespace std;

int main(){
  // unique는 sort, erase와 함께 사용하는 경우가 많다. 
  vector<int> s {4, 3, 3, 5, 1, 2, 3};
  sort(s.begin(), s.end());
  s.erase(unique(s.begin(), s.end()), s.end());

  for(auto i : s) cout << i << " ";
  return 0;
}

