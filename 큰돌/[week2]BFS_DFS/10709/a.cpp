#include<bits/stdc++.h>
using namespace std;

// 세로 h, 가로 w 직사각형. 모든 구름은 오른쪽으로 한칸씩 이동
// 각 구역에 대해 몇분뒤 처음 구름 오는 지 예측하기
// c위치 저장해두고 한칸씩 이동하기? visited로 표시?
int h,w,a[101][101];
string s;
int main(){
  cin >> h >> w;
  for(int i = 0; i < h; i++){
    cin >> s;
    for(int j = 0; j < w; j++){
       if(s[j] =='.') a[i][j] = -1; // 구름없으면 -1
       else a[i][j] = 0; // 구름 0으로
    }
  }
  for(int i = 0; i < h; i++){
    for(int j = 0; j < w; j++){
      if(a[i][j] == 0){
        int cnt = 1;
        while(a[i][j+1] == -1){
          a[i][j+1] = cnt++;
          j++;
        }
      }
    }
  }
  for(int i = 0; i < h; i++){
    for(int j = 0; j < w; j++){
      cout << a[i][j] << " ";
    }
    cout << "\n";
  }
  return 0;
}