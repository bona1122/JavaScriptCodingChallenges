#include<bits/stdc++.h>
using namespace std;

// 누적합 구하고 연속적인 K일의 온도 합이 최대가 되는 값 출력
int N, K;
int num, ret = -10000000;
int psum[100001];
int main(){
  cin >> N >> K;
  // int psum[N + 1]; // TODO: 배열 크기가 컴파일 시간에 결정되지 못함. -> vector 쓰거나, 문제에서 주어지는 최댓값 쓰기
  for(int i = 1; i <= N; i++){
    cin >> num;
    psum[i] = psum[i-1] + num;
  }

  for(int i = K; i <= N; i++){
    ret = max(ret, psum[i] - psum[i-K]);
  }
  cout << ret;
  return 0;
}