#include<bits/stdc++.h>
using namespace std;  

// 아홉난쟁이. 합이 100되는 7명 찾기

// 줄 아홉개
int a[9];
int main(){
    for(int i = 0; i < 9; i++) cin >> a[i];

    sort(a, a + 9); // 정렬

    do{
        if(accumulate(a, a + 7, 0) == 100) break;
    }while(next_permutation(a, a + 9));
    
    for(int i = 0; i < 7; i++) cout << a[i] << '\n';

    return 0;
}