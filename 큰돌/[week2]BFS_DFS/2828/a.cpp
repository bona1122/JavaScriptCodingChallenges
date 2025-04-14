#include<bits/stdc++.h>
using namespace std;

// 오락실에서 바구니를 옮기는 게임. n칸 
// m칸의 바구니 // 사과하나씩 떨어질 것. 사과 모두 담으려면 이동거리 최솟값
int n, m, j, r, temp, ret, l = 1;
int main(){
  cin >> n >> m >> j;
  while(j--){
    // 현재 범위를 계속해서 가지고 있고, 이동하면 범위도 변경
    // 어느 방향으로 이동할지..는 범위 이하면 한, 시작점을 이동
    // 범위 이상이면, 끝점을 이동
    r = l + m - 1;
    cin >> temp;
    if(temp >= l && temp <= r) continue; // 범위속하면 움직이지 않아도됨
    else{
      if(temp < l){
        ret += (l - temp);
        l = temp; // l 재정의
      }else{
        l += (temp - r); // 차이만큼 이동
        ret += (temp - r); 
      }
    }
  }
  cout << ret << '\n';
  return 0;
}

// 1 2 3 4 5