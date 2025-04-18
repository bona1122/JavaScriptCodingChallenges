#include<bits/stdc++.h>
using namespace std;

// TODO: 플로이드 -> 모든정점쌍의 최단거리 구하기. "음수가중치도되지만 음수 사이클이 존재하면 안됨"
// O(v^3)이므로 "정점이 400이하인 문제만 가능"
const int INF = 1e9;
const int MAX_N = 204;
int dist[MAX_N][MAX_N];

int main(){
  int n, m;
  cin >> n >> m;
  // TODO: dist 배열 초기화
  for(int i = 1; i <= n; i++){
    for(int j = 1; j <= n; j++){
      if(i == j) dist[i][j] = 0;
      else dist[i][j] = INF;
    }
  }
  for(int i = 0; i < m; i++){
    int u, v, w;
    cin >> u >> v >> w;
    dist[u][v] = min(dist[u][v], w); // 중복간선처리위해 최소간선만 저장
  }
  for(int k = 1; k <= n; k++){
    for(int a = 1; a <= n; a++){
      for(int b = 1; b <= n; b++){
        if(dist[a][k] != INF && dist[k][b] != INF){ // TODO: 오버플로우방지를 위해 중요
          dist[a][b] = min(dist[a][b], dist[a][k] + dist[k][b]);
        }
      }
    }
  }
  for(int i = 1; i <= n; i++){
    for(int j = 1; j <= n; j++){
      if(dist[i][j] == INF) cout << "INF ";
      else cout << dist[i][j] << " ";
    }
    cout << "\n";
  }
  return 0;
}