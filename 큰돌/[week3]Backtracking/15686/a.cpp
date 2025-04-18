#include<bits/stdc++.h>
using namespace std;

// 치킨집 m개 뽑고, 모든 집과 거리 비교해서 최솟값 찾기
// 치킨집은 최대 13개라 가능
// TODO: 조합에서 인덱스화해서 뽑기
int n, m, a[51][51], ret = 987654321;
vector<pair<int, int>> h, c;
vector<vector<int>> cList;
void combi(int start, vector<int> &v){
  if(v.size() == m){
    cList.push_back(v);
  }
  for(int i = start + 1; i < c.size(); i++){ // 다음것부터 선택하기
    v.push_back(i); // 현재넣고 콤비
    combi(i, v);
    v.pop_back();
  }
  return;
}
int main(){
  cin >> n >> m;
  for(int i = 0; i < n; i++){
    for(int j = 0; j < n; j++){
      cin >> a[i][j];
      if(a[i][j] == 1) h.push_back({i, j});
      if(a[i][j] == 2) c.push_back({i, j});
    }
  }

  vector<int> v;
  combi(-1, v);

  for(vector<int> list : cList){
    int calc = 0;
    for(pair<int, int> home : h){ // 모든 집에 대해
      int _min = 987654321;
      for(int ci : list){ // 조합에있는 치킨집 인덱스 가져오기
        int _dist = abs(home.first - c[ci].first) + abs(home.second - c[ci].second);
        _min = min(_min, _dist);
      }
      calc += _min;
    }
    ret = min(ret, calc);
  }
  cout << ret << "\n";
  return 0;
}