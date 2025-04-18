#include<bits/stdc++.h>
using namespace std;

const int INF = 987654321;
int n, mp, mf, ms, mv, ret = INF;
int sp, sf, ss, sv, sc;
struct A{ //TODO: struct[] 만들기
  int mp, mf, ms, mv, cost;
};
A a[16];
map<int, vector<vector<int>>> ret_v; // TODO: map 사용하기

int main(){
  cin >> n;
  cin >> mp >> mf >> ms >> mv;
  for(int i = 0; i < n; i++){
    cin >> a[i].mp >> a[i].mf >> a[i].ms >> a[i].mv >> a[i].cost; //TODO: struct에 입력받기
  }

  for(int i = 1; i < (1 << n); i++) { // 모든 조합 고려
    sp = sf = ss = sv = sc = 0;
    vector<int> v;
    for(int j = 0; j < n; j++){
      if(i & (1 << j)){
        v.push_back(j + 1);
        sp += a[j].mp;
        sf += a[j].mf;
        ss += a[j].ms;
        sv += a[j].mv;
        sc += a[j].cost;
      }
    }
    if(sp >= mp && sf >= mf && ss >= ms && sv >= mv){
			if(ret >= sc){
				ret = sc;
        ret_v[ret].push_back(v);
			}
		} 
  }
  if(ret == INF) cout << -1 << '\n';
  else{
    cout << ret << "\n";
    sort(ret_v[ret].begin(), ret_v[ret].end()); 
    for(int a : ret_v[ret][0]){
      cout << a << " ";
    }
  }
  return 0;
}