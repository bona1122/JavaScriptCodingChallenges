#include<bits/stdc++.h>
using namespace std;

// TODO: 가중치가 같은 그래프, 최단거리 떠올리기
// 체력은 60보다 작거나 같은 자연수
// 9,3,1
int dp[61][61][61], a[3], n, visited[61][61][61]; // TODO: 전역변수로 배열 선언하면 자동으로 0으로 요소가 초기화 됨.
int _a[6][3] = {
  {9, 3, 1},
  {9, 1, 3},
  {3, 9, 1},
  {3, 1, 9},
  {1, 3, 9},
  {1, 9, 3},
};
struct A{ // TODO: struct. 3개변수 담기위해 tuple은 사용하기 번거로움
  int a, b, c;
};
queue<A> q;
int bfs(int a, int b, int c){
  visited[a][b][c] = 1;
  q.push({a, b, c});
  while(q.size()){
    int a = q.front().a;
    int b = q.front().b;
    int c = q.front().c;
    q.pop();
    if(visited[0][0][0]) break; // 0,0,0 방문했으면 멈추기
    for(int i = 0; i < 6; i++){
      int na = max(0, a - _a[i][0]); // TODO: 음수되는 것 막아주기 -> 배열접근 위해
      int nb = max(0, b - _a[i][1]);
      int nc = max(0, c - _a[i][2]);
      if(visited[na][nb][nc]) continue;
      visited[na][nb][nc] = visited[a][b][c] + 1;
      q.push({na, nb, nc});
    }
  }
  return visited[0][0][0] - 1;
}
int main(){
  cin >> n;
  for(int i = 0; i < n; i++) cin >> a[i];
  cout << bfs(a[0], a[1], a[2]);
  return 0;
}