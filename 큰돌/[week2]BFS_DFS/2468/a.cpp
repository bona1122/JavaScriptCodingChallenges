#include<bits/stdc++.h>
using namespace std;

// n*n, 안전 영역 최대 개수 구하기
int n, a[101][101], visited[101][101], x, y, nx, ny, ret = 1;
int dy[4] = {-1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1};

void dfs(int y, int x, int depth) {
  visited[y][x] = 1;
  for(int i = 0; i < 4; i++){
    ny = y + dy[i];
    nx = x + dx[i];
    if(ny < 0 || nx < 0 || ny >= n || nx >= n) continue;
    if(!visited[ny][nx] &&  a[ny][nx] > depth){
      dfs(ny, nx, depth);
    }
  }
  return;
}
int main(){
  cin >> n;
  for(int i = 0; i < n; i++){
    for(int j = 0; j < n; j++){
      cin >> a[i][j];
    }
  }

  for(int d = 1; d < 101; d++){ // 모든 d 확인
    fill(&visited[0][0], &visited[0][0] + 101 * 101, 0);
    int cnt = 0;
    for(int i = 0; i < n; i++){
      for(int j = 0; j < n; j++){
        if(!visited[i][j] && a[i][j] > d){
          dfs(i, j, d);
          cnt++;
        }
      }
    }
    ret = max(ret, cnt);
  }
  cout << ret << '\n';
  return 0;
}