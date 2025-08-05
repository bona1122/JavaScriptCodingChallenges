#include<bits/stdc++.h>
using namespace std;

// 2, 5로 나누어떨어지지않는 정수 n 주어지면, 각 자릿수가 모두 1인 n의 배수 찾기
// 1, 11, 111, 1111 
int n;
int main(){
  while(scanf("%d", &n) != EOF){ //TODO: 입력계속해서 받기, scanf, printf
    int cur = 1, ret = 1;
    while(true){
      if(cur % n == 0){
        printf("%d\n", ret);
        break;
      }else{
        cur = cur*10 + 1;
        cur %= n; // TODO: 중간에 모듈러연산을 해도 결과 동일
        // cur = (cur % n * 10 % n) + 1
        ret++;
      }
    }
  }
  return 0;
}
