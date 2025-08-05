#include<bits/stdc++.h>
using namespace std;

#define y1 aaaa // TODO: y1 이미 헤더파일에 있어서 aaaa로 정의해줘야함

const int dy[4] = {1, 0, -1, 0};
const int dx[4] = {0, 1, 0, -1};
vector<int> ret;
int m, n, k, a[101][101], visited[101][101], x1, y1, x2, y2, ny, nx;

// TODO: connected component 한개에 대한 구성갯수 세기
int dfs(int y, int x){
  int cnt = 1;
  visited[y][x] = 1;

  for(int i = 0; i < 4; i++){
    ny = y + dy[i];
    nx = x + dx[i];
    if(ny < 0 || nx < 0 || ny >= m || nx >= n) continue;
    if(!visited[ny][nx] && a[ny][nx] == 0){
      cnt += dfs(ny, nx);
    }
  }
  return cnt;
}
int main(){
  cin >> m >> n >> k;
  for(int i = 0; i < k; i++){
    cin >> x1 >> y1 >> x2 >> y2;
    for(int x = x1; x < x2; x++){
      for(int y = y1; y < y2; y++){
        a[y][x] = 1;
      }
    }
  }

  for(int i = 0; i < m; i++){
    for(int j = 0; j < n; j++){
      if(!visited[i][j] && a[i][j] == 0){
        ret.push_back(dfs(i, j));
      }
    }
  }

  sort(ret.begin(), ret.end());
  cout << ret.size() << '\n';
  for(int a : ret) cout << a << ' ';
  return 0;
}