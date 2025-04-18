#include<bits/stdc++.h>
using namespace std;

// 가중치 같으면 BFS, 다르면 최단거리 알고리즘
// 다익스트라: "양의 가중치만"을 가지는 그래프에서 가능, 한정점에서 다른 모든정점까지의 최단거리 구하는 알고리즘 
// 우선순위 큐로 방문할정점 중 가장 비용 작은 것 우선 선택후, dist 배열 갱신
// O(ElogE) = O(ElogV)
const int INF = 1e9;
vector<pair<int, int>> adj[20004];
vector<int> dist(20004, INF); // TODO: 벡터 만들떄, 크기와 요소 초기화까지 하기

void dijkstra(int start){
  // TODO: 최소값이 가장 상단에 있는 우선순위 큐 만들기 -> min heap
  // 저장될 데이터 타입, 큐의 내부 컨테이너로 벡터 사용, 우선순위를 결정하는 비교 함수(greater는 작은 값이 높은 우선순위를 갖도록 한다.)
  // {거리, 정점} 담을 것이고, 최소가 위에 오기위해 greater
  // +) priority_queue은 기본으로 최대힙 (큰값이 우선)
  priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
  // 시작점 처리 아래 2줄
  dist[start] = 0;
  pq.push({0, start}); // 최단거리와 지점 삽입

  while(!pq.empty()){ 
    int cur_cost = pq.top().first;
    int cur = pq.top().second;
    pq.pop();
    cout << "PQ_top\n" << cur <<"\n";

    // TODO: 더 짧은거리로 이미 갱신됐다면 무시 != 도 가능
    if(dist[cur] < cur_cost) continue; // 우선순위큐에 넣었을때와 달리 갱신이 된 경우

    for(auto next : adj[cur]){ // next에는 {가중치, 정점}
      int new_cost = cur_cost + next.first;
      if(new_cost < dist[next.second]){
        dist[next.second] = new_cost;
        cout << next.second << " : " << new_cost << "\n";
        pq.push({new_cost, next.second});
      }
    }
  }
}
int main(){
  int n, m, start;
  cin >> n >> m >> start;
  for(int i = 0; i < m; i++){
    int u, v, w;
    cin >> u >> v >> w;
    adj[u].push_back({w,v});
  }
  dijkstra(start);
  for(int i = 1; i <= n; i++){
    if(dist[i] == INF) cout << "INF\n";
    else cout << "dist: " << i <<" : "<< dist[i] << "\n";
  }
  return 0;
}