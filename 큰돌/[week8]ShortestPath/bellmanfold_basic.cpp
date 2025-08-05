#include<bits/stdc++.h>
using namespace std;

// 벨만포드: "음수 가중치가 있고 음수사이클이 있는 경우에", 단일 출발점 최단경로 구하는 알고리즘. 음수사이클 존재 여부도 파악 가능
// 모든 간선을 반복적으로 확인하며 최단경로 갱신
// 1. 초기화: 시작점 거리는 0, 나머지는 무한대로 설정
// 2. 최단경로 갱신: 모든 간선을 V-1번 확인하며 최단경로 갱신(완화)
// 3. 음수사이클 확인: V-1번 이후에도 갱신되면 음수사이클 존재
// O(V*E): 모든간선에대해 v번 확인하기 떄문에
long long t, n, m, a, b, c, dist[1004], INF = 987654321;
int main(){
  cin >> n >> m;
  fill(dist, dist + 1004, INF);
  vector<pair<int, int>> adj[1004];
  for(int i = 0; i < m; i++){
    cin >> a >> b >> c;
    adj[a].push_back({b, c});
  }
  dist[1] = 0; // 시작점
  queue<int> q;
  for(int i = 0; i < n; i++){ // TODO: v번 반복. 최단거리 간선의 갯수는 최대 n-1개이기 때문, n-1번 반복 후에는 모든 최단 거리가 확정되어야 한다.
    for(int here = 1; here <= n; here++){ // 모든 정점에 대해
      for(auto there : adj[here]){ // 정점과 연결된 간선 확인
        int d = there.second;
        int to = there.first;
        if(dist[here] != INF && dist[here] + d < dist[to]){ // TODO: 완화 조건
          if(i == n-1) q.push(to); // TODO: 마지막 순간(n번째 반복에서도)에도 완화가 일어났다면 음수 사이클 발생한것
          dist[to] = dist[here] + d;
          cout << here << " : " << to << "\n";
        }
      }
    }
  }
  if(q.size()) cout << -1 << "\n"; // 음수 사이클이 존재하면 -1 출력
  else for(int i = 1; i <= n; i++) cout << (dist[i] == INF ? -1 : dist[i]) << '\n';
  return 0;
}