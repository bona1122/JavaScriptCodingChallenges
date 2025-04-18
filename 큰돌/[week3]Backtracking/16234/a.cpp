#include<bits/stdc++.h>
using namespace std;

// connected component로 접근
int n,l,r,a[50][50],visited[50][50],sum,ret;
int dy[4] = {1, 0, -1, 0};
int dx[4] = {0, 1, 0, -1};
vector<pair<int, int>> uni;
void dfs(int y, int x) {
  for(int i = 0; i < 4; i++){
    int ny = y+dy[i];
    int nx = x+dx[i];
    if(nx<0 || nx>=n || ny<0 || ny>=n || visited[ny][nx])continue;
    if(abs(a[ny][nx]- a[y][x]) >= l && abs(a[ny][nx] - a[y][x]) <= r){
      visited[ny][nx] = 1;
      uni.push_back({ny, nx});
      sum += a[ny][nx];
      dfs(ny, nx);
    }
  }
}
int main(){
  cin >> n >> l >> r;
  for(int i = 0; i < n; i++){
    for(int j = 0; j < n; j++){
      cin >> a[i][j];
    }
  }
  while(true){
    bool flag = 0;
    fill(&visited[0][0], &visited[0][0] + 50*50,0); //TODO: fill쓰기
    for(int i = 0; i < n; i++){
      for(int j = 0; j < n; j++){
        if(!visited[i][j]){
          uni.clear(); // TODO: 벡터 아예 싹 비우기. erase랑 다름
          visited[i][j] = 1;
          sum = a[i][j];
          uni.push_back({i,j});
          dfs(i, j);
          if(uni.size() >= 2){
            for(pair<int, int> p : uni){
              a[p.first][p.second] = sum / uni.size();
              flag = 1;
            }
          }
        }
      }
    }
    if(!flag) break;
    ret++;
  }
  cout << ret << '\n';
  return 0;
}