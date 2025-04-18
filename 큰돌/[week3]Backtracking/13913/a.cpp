#include<bits/stdc++.h>
using namespace std;

// TODO: trace까지 들어간 문제. BFS+Trace 
// 경로추적 -> prev[next] = here;
#define prev aaa // TODO:prev, next는 예약어
#define next aaaa
const int max_n = 200001;
int visited[max_n], prev[max_n], n, k, ret, here, cnt, next;
vector<int> v;
queue<int> q;
int main(){
  cin >> n >> k;
  visited[n] = 1;
  q.push(n);
  while(q.size()){
    here = q.front(); q.pop();
    if(here == k){
      ret = visited[k]; //최단거리 찾음
      break;
    }
    for(int next : {here + 1, here - 1, here * 2}){
      if(next < 0 || next >= max_n || visited[next]) continue;
      visited[next] = visited[here] + 1;
      prev[next] = here;
      q.push(next);
    }
  }
  for(int i = k; i != n; i = prev[i]){ //TODO: prev trace + 처음위치 담기
    v.push_back(i);
  }
  v.push_back(n); // 시작점 넣어주기
  cout << ret - 1 << '\n';
  reverse(v.begin(), v.end()); //TODO: 벡터 뒤집기
  for(int i : v) cout << i << " ";
  return 0;
}