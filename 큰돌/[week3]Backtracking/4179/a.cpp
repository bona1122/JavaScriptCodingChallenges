#include<bits/stdc++.h>
using namespace std;
const int INF = 987654321; // TODO: 최댓값 정의
// 불에 타기전 탈출 여부, 빨리 탈출하는 시간 
// TODO: 불의 최단거리와 영훈의 최단거리 비교하는 문제
// 불위치 찾고(큐에 모으기) bfs돌리고, 영훈 위치찾고 bfs돌리고, 테두리 .인것들 확인
int dx[4] = {0, 1, 0, -1};
int dy[4] = {1, 0, -1, 0};
int r, c, ny, nx, ret, px, py, x, y;
char a[1000][1000]; //int로하면안되는지, 그리고 그게 입력받는거에 영향이 있는지
int fire_v[1004][1004], person_v[1004][1004];

int main(){
  cin >> r >> c;
  queue<pair<int, int>> q;
  fill(&fire_v[0][0], &fire_v[0][0] + 1000 * 1000, INF);
  for(int i = 0; i < r; i++){
    for(int j = 0; j < c; j++){
      cin >> a[i][j];
      if(a[i][j] == 'F'){
        fire_v[i][j] = 1;
        q.push({i, j});
      }else if(a[i][j] == 'J'){
        px = i; py = j;
      }
    }
  }

  while(q.size()){ // 불 최단거리 기록
    tie(y, x) = q.front(); q.pop();
    for(int i = 0; i < 4; i++){
      ny = y + dy[i];
      nx = x + dx[i];
      if(ny < 0 || nx < 0 || ny >= r || nx >= c || a[ny][nx] == '#') continue;
      if(fire_v[ny][nx] != INF) continue;
      fire_v[ny][nx] = fire_v[y][x] + 1;
      q.push({ny, nx});
    }
  }

  person_v[px][py] = 1;
  q.push({px, py});
  while(q.size()){
    tie(y, x) = q.front(); q.pop();
    if(x == c-1 || y == r-1 || x == 0 || y == 0){ // 빠져나올 수 있는지.
      ret = person_v[y][x];
      break;
    }
    for(int i = 0; i < 4; i++){
      ny = y + dy[i];
      nx = x + dx[i];
      if(ny < 0 || nx < 0 || ny >= r || nx >= c || a[ny][nx] == '#' || person_v[ny][nx]) continue;
      if(fire_v[ny][nx] <= person_v[y][x] + 1) continue;
      person_v[ny][nx] = person_v[y][x] + 1; // 불없이 갈 수 있으면 가기
      q.push({ny, nx});
    }
  }
  if(ret != 0) cout << ret << "\n";
	else cout << "IMPOSSIBLE \n";
	return 0;
}