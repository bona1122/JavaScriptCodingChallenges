#include<bits/stdc++.h>
using namespace std;

// 너비 우선 탐색으로 진행
const int max_n = 104;
int dy[4] = {-1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1};
int n, m, a[max_n][max_n], visited[max_n][max_n], y, x; // TODO: 방문배열이 최단거리 배열됨

int main(){
  // TODO: 따닥따닥 붙은 것 입력받기 -> 1. stirng으로 받아서 변환, 2.scanf로 받기
  scanf("%d %d", &n, &m);
  for(int i = 0; i < n; i++){
    for(int j = 0; j < m; j++){
      scanf("%1d", &a[i][j]); //TODO: 붙어있는 숫자 하나하나 받기
    }
  }

  queue<pair<int, int>> q; //y, x 담을 큐
  visited[0][0] = 1;
  q.push({0, 0});
  
  while(q.size()){
    tie(y, x) = q.front(); q.pop(); //TODO: 구조분해할당 tie. first, second 안써도됨
    for(int i = 0; i < 4; i++){
      int ny = y + dy[i];
      int nx = x + dx[i];
      // TODO: 오버플로우 체크가 우선
      if(ny < 0 ||  nx < 0 || ny >= n || nx >= m || a[ny][nx] == 0) continue;
      if(visited[ny][nx]) continue;
      visited[ny][nx] = visited[y][x] + 1;
      q.push({ny, nx});
    }
  }

  printf("%d", visited[n-1][m-1]);
  return 0;
}