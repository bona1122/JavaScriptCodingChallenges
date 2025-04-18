#include<bits/stdc++.h>
using namespace std;

// 두 선거구를 나눌 것. 인구의 차이를 최소화하는 방식으로. 차이 출력
// 두 개의 connected component 만들기
// TODO: 1. 두가지 중 하나로 모든 노드 색칠하기, 2. component가 두개 인지 확인 
const int INF = 987654321;
int n, a[11], m, temp, color[11], visited[11], ret = INF;
vector<int> adj[11]; // TODO: 인접그래프 만들기

pair<int, int> dfs(int idx, int c){
  visited[idx] = 1; // 방문처리
  pair<int, int> ret = {1, a[idx]}; //TODO: pair 다루기
  // 연결노드중 방문안했고, 컬러 같은거 방문
  for(int v : adj[idx]){
    if(!visited[v] && color[v] == c){
      pair<int, int> _temp = dfs(v, c);
      ret.first += _temp.first;
      ret.second += _temp.second;
    }
  }
  return ret;
}
int main(){
  cin >> n;
  for(int i = 1; i <= n; i++) cin >> a[i];

  for(int i = 1; i <= n; i++){
    cin >> m;
    for(int j = 0; j < m; j++){
      cin >> temp;
      // TODO: 양방향 간선 처리
      adj[i].push_back(temp); 
      adj[temp].push_back(i);
    }
  }
  for(int i = 1; i < (1<<n) - 1; i++){ // 모든 조합 생성(모든 경우 고려)
    fill(color, color + 11, 0); // TODO: fill 초기화
    fill(visited, visited + 11, 0);
    int idx1 = -1, idx2 = -1; // 시작지점 저장하기 위해 
    for(int j = 0; j < n; j++){ // 특정비트가 1이면, 색칠
      if(i & (1 << j)) {
        color[j+1] = 1; 
        idx1 = j+1;
      }else {
        color[j+1] = 0;
        idx2 = j+1;
      }
    }
    pair<int, int> color1 = dfs(idx1, 1);
    pair<int, int> color2 = dfs(idx2, 0);
    if(color1.first + color2.first == n) ret = min(ret, abs(color1.second - color2.second));
  }
  cout << (ret == INF ? -1 : ret) << '\n';
  return 0;
}