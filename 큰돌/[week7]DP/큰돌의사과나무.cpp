#include <bits/stdc++.h>
using namespace std;

int dp[104][2][34], n, m, b[104];

int go(int idx, int tree, int cnt) {
  if (cnt < 0) return -1e9;
  if (idx == n) return 0;
  int &ret = dp[idx][tree][cnt];
  // 이미 계산된 값이면 반환
  if (ret !=-1) return ret;
  // 현재 나무에 머무르거나 다른 나무로 이동하는 경우 중 최대 값 선택
  return ret = max(go(idx + 1, tree ^ 1, cnt - 1), go(idx + 1, tree,
cnt)) + (tree == b[idx] - 1);
}

int main() {
  memset(dp,-1, sizeof(dp));
  cin >> n >> m;
  for (int i = 0; i < n; i++) cin >> b[i];
  // 두 가지 초기 상태(1번 나무에 시작, 2번 나무에 시작) 중 최대 값 출력
  cout << max(go(0, 1, m - 1), go(0, 0, m)) << '\n';
  return 0;
}