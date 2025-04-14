#include<bits/stdc++.h>
using namespace std;

int t, m, n, k, y, x, ret, ny, nx;
int dy[4] = {-1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1};
int g[51][51];
bool visited[51][51];

void dfs(int y, int x) {
  visited[y][x] = 1;
  for(int i = 0; i < 4; i++){
    ny = y + dy[i];
    nx = x + dx[i];
    if(ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
    if(g[ny][nx] == 1 && !visited[ny][nx]) {
      dfs(ny, nx);
    }
  }
}

int main(){
  cin >> t;
  while(t--){
    // TODO: 초기화 중요, memset/fill 
    fill(&g[0][0], &g[0][0] + 51 *  51, 0);
    // fill(g, g + 51 *  51, 0); // -> 요건 안됨!
    fill(&visited[0][0], &visited[0][0] + 51 * 51, 0);


    cin >> m >> n >> k;
    ret = 0;
    for(int j = 0; j < k; j++){
      cin >> x >> y;
      g[y][x] = 1;
    }

    for(int i = 0; i < n; i++){
      for(int j = 0; j < m; j++){
        if(g[i][j] == 1 && !visited[i][j]){
          dfs(i, j);
          ret++;
        }
      }
    }
    cout << ret << "\n";
  }
  return 0;
}