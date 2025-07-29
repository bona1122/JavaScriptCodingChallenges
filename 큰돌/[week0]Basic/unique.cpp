#include<bits/stdc++.h>
using namespace std;

int main(){
  // unique는 sort, erase와 함께 사용하는 경우가 많다. 
  vector<int> s {4, 3, 3, 5, 1, 2, 3};
  sort(s.begin(), s.end());
  // unique는 범위안의 있는 요소 중 앞에서부터 서로를 비교해가며 중복되는 요소를 제거하고 나머지 요소들은 삭제하지 않고 그대로 두는 함수
  // 따라서 unique 반환값부터 end까지 제거해줘야함.
  s.erase(unique(s.begin(), s.end()), s.end());
  for(auto i : s) cout << i << " ";
  return 0;
}

