#include<bits/stdc++.h>
using namespace std;

// TODO: 최대로 증가하는 부분 수열
// cnt[i]: i번쨰 요소를 포함하는 최대증가부분수열 길이
// trace까지 하려면 prev_list 활용. 배열인덱스를 담기 위해 -1로 초기화 해줌(0안됨)
int n, a[1001], cnt[1001], ret, prev_list[1001], idx;
vector<int> v;
void go(int idx){
  if(idx == -1) return;
  v.push_back(a[idx]);
  go(prev_list[idx]);
  return;
}
void go2(int idx){
  for(int i = idx; i != -1; i = prev_list[i]){
    v.push_back(a[i]);
  }
}
int main1(){ // O(n^2)
  scanf("%d", &n);
  for(int i = 0; i < n; i++){
    scanf("%d", a + i);
  }
  fill(prev_list, prev_list + 1001, -1);
  fill(cnt, cnt + 1001, 1);
  for(int i = 0; i < n; i++){
    for(int j = 0; j < i; j++){ // 이전요소들 보면서
      if(a[j] < a[i] && cnt[i] < cnt[j] + 1) {
        cnt[i] = cnt[j] + 1;
        prev_list[i] = j; // TODO: trace 
        if(ret < cnt[i]){
          ret = cnt[i];
          idx = i; // TODO: trace 시작점 구하기 위해
        }
      }
    }
  }
  printf("%d\n", ret);
  go(idx);
  for(int i = v.size() - 1; i >= 0; i--){
    printf("%d ", v[i]);
  }
  return 0;
}


int lis[1001], len, num;
int main2(){ // O(nlogn) -> 이방법은 원본배열훼손으로인해 trace는 불가능, 길이만 찾기 가능
  scanf("%d", &n);
  for(int i = 0; i < n; i++){
    scanf("%d", &num);
    // TODO: 아래 3줄 핵심
    auto lowerPos = lower_bound(lis, lis + len, num); // TODO: 크거나 같은 값(이상) 찾음
    if(*lowerPos == 0) len++; // 해당위치에 아무것도 없다면 len증가,삽입
    *lowerPos = num; // 해당위치에 삽입(교체)
    cout << *lowerPos << '\n';
  }
}