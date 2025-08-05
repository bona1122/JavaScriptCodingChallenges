#include<bits/stdc++.h>
using namespace std;

const int INF = 1e9;
int n, m, s, a, b, c;
vector<pair<int, int>> g[20004];
vector<int> dist(20004, INF);
void dijkstra(int start){
  priority_queue<pair<int, int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;
  dist[start] = 0;
  pq.push({0, start});

  while(pq.size()){
    int cost = pq.top().first; //TODO: top!
    int cur = pq.top().second;
    pq.pop();// TODO: pop뺴먹지 않기

    if(dist[cur] < cost) continue; //TODO: 느긋한 삭제

    for(auto next : g[cur]){
      int new_cost = next.first + cost;
      int next_v = next.second;
      if(new_cost < dist[next_v]){
        dist[next_v] = new_cost;
        pq.push({new_cost, next_v});
      }
    }
  }
}
int main(){
  cin >> n >> m >> s;
  for(int i = 0; i < m; i++){
    cin >> a >> b >> c;
    g[a].push_back({c, b});
  }
  dijkstra(s);
  for(int i = 1; i <= n; i++){
    if(dist[i] == INF) cout << "INF\n";
    else cout << "dist: " << i <<" : "<< dist[i] << "\n";
  }
  return 0;
}