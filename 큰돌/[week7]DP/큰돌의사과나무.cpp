#include<bits/stdc++.h>
using namespace std;

// 1. 참조투명성, 2. 최적부분구조(작은하위문제를 해결해서 전체문제 해결), 3. 겹치는 부분문제(동일한 하위문제가 여러번 반복 등장), 4. DAG 구조(방향성있고 사이클 없는 그래프 구조)
// 완탐 -> 메모이제이션 -> 그리디 or 다른 알고리즘
// dp = 완탐 + 메모이제이션 (어떤 idx에서 어떤 경우의 수가 있는 지를 생각하기)
// 필요한 상태값을 기반으로 몇차원배열을 만들지 설정

// 큰돌의 사과나무 -> 매초, 위치, 남은 위치이동횟수 -> 3차원 배열
int dp[104][2][34], n, m, b[104];
int go(int sec, int tree, int canMove){
  if (canMove < 0) return -1e9; // 엄청 큰 음수를 넣어서 해당 경우 제외시키기
  if (sec == n) return 0; // TODO: 2. 기저사례

  int &ret = dp[sec][tree][canMove]; //TODO: 3. 메모이제이션 두줄(참조(&)로 값을 받으면(참조변수) 원본 변수를 직접 변경할 수 있다.)
  if(ret != -1) return ret; // 이미 계산된 값이면 반환

  // TODO: 4. 로직. 현재나무 머무르거나 다른나무로 이동하는 것 중 최대 값 선택 + 현재초에 해당트리에 사과가떨어지는지
  return ret = max(go(sec + 1, tree ^ 1, canMove - 1), go(sec + 1, tree,
    canMove)) + (tree == b[sec] - 1);
}

int main(){
  memset(dp, -1, sizeof(dp)); // TODO: 1. 초기화. 값이 가능한 범위 이외의 값으로
  cin >> n >> m;
  for(int i = 0; i < n; i++) cin >> b[i];

  // 두 가지 초기 상태(1번나무에서시작, 2번나무에서 시작) 중 최대 값 출력
  cout << max(go(0, 1, m - 1), go(0, 0, m)) << '\n';
  return 0;
}