#include <bits/stdc++.h>
using namespace std;
const int MAX = 100000; 
int visited[MAX+1]; // 최단거리 기록
long long cnt[MAX+1]; // 경우의수 카운트
int main() {
    int n, m;
    cin >> n >> m;
    if(n == m){ // 반례 처리
        puts("0"); puts("1"); //TODO: 자동 개생. js의 console.log와 비슷
        return 0; 
    } 
    visited[n] = 1; // TODO: 먼저 1해두고 나중에 -1해주는것이 초기화 값에 영향을 받지 않는다.
    cnt[n] = 1; // 처음 위치는 경우의 수 1.
    queue<int> q;
    q.push(n);
    while (!q.empty()) {
        int now = q.front();
        q.pop();
        for (int next : {now-1, now+1, now*2}) { //TODO: 초기화 리스트 활용
            if (0 <= next && next <= MAX) { 
                if (!visited[next]) { // 아예 방문안한경우
                    q.push(next); 
                    visited[next] = visited[now] + 1; // 최단거리 기록
                    cnt[next] += cnt[now]; // TODO: 경우의 수는 계속해서 더하는 것
                } else if (visited[next] == visited[now] + 1) { // TODO: 방문했지만, 최단거리인 경우, 경우의 수 더해주기
                    cnt[next] += cnt[now];
                }
            }
        }
    }
    cout << visited[m] - 1 << '\n';
    cout << cnt[m] << '\n';
    return 0;
}