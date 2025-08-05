#include<bits/stdc++.h>
using namespace std;

int n,m,visited[50][50],ret,ny,nx;
int dy[4] = {1, 0, -1, 0};
int dx[4] = {0, 1, 0, -1};
char a[50][50];
string s;
void bfs(int y, int x){
  memset(visited, 0, sizeof(visited)); // TODO: memset 초기화. 0, -1 둘 중에 하나만 가능
  visited[y][x] = 1;
  queue<pair<int,int>> q;
  q.push({y, x});
  while(q.size()){
    tie(y, x) = q.front(); q.pop(); // TODO: pop으로 바로 못받음. front 필요. pop은 void 함수임
    for(int i = 0; i < 4; i++){
      ny = y + dy[i];
      nx = x + dx[i];
      if(ny < 0 || nx < 0 || ny >= n || nx >= m) continue;
      if(a[ny][nx] == 'W' || visited[ny][nx]) continue;
      visited[ny][nx] = visited[y][x] + 1;
      q.push({ny, nx});
      ret = max(ret, visited[ny][nx]);
    }
  }
  return;
}
int main(){
  cin >> n >> m;
  for(int i = 0; i < n; i++){
    cin >> s;
    for(int j = 0; j < m; j++){
      a[i][j] = s[j];
    }
  }
  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
        if(a[i][j] == 'L') bfs(i, j); 
    }
  }
  cout << ret - 1 << '\n'; 
  return 0;
}