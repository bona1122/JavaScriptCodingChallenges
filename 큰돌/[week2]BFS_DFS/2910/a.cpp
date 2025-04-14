#include<bits/stdc++.h>
using namespace std;

typedef long long ll;
const ll INF = 1e18;   
int n, c, a[1004];
vector<pair<int, int>> v; 
map<int, int> mp, mp_first; 

// c보다 작은요소로 이루어진 n개의 수열, 자주 등장하는 빈도수로 정렬 -> 빈도정렬
// TODO: custom 정렬 필요한 문제 => sort에 넘겨주는 compare 함수 정의
// TODO: map은 자동으로 숫자 키면 0할당, 문자키면 빈문자열로 자동 할당 => 맵요소 있는지 확인 가능 -> 교안 참조

bool cmp(pair<int,int> a, pair<int, int> b){
	if(a.first == b.first){ // 빈도 같으면 먼저 등장한것이 앞에 오도록 -> 이걸 위해 등장시점 기록
		return mp_first[a.second] < mp_first[b.second]; // a가 작으면, a먼저
	}
	return a.first > b.first; // 빈도 다르면, 빈도 높은것이 먼저 오도록. a가 크면, a먼저
}

int main(){
  cin >> n >> c;
  for(int i = 0; i < n; i++){
    cin >> a[i]; 
    mp[a[i]]++; // 개수 카운트
    if(mp_first[a[i]] == 0) mp_first[a[i]] = i + 1; // 첫 할당이면 등장시점 기록
  }
  for(auto it : mp){ // TODO: 각각 몇개 있는지. 벡터에 담기 => 맵을 배열로 변환하는 방법
    v.push_back({it.second, it.first}); // {빈도, 요소}
  }
  sort(v.begin(), v.end(), cmp); // 빈도대로 정렬, 마지막은 비교 함수 넣기
  for(auto i : v){
    for(int j = 0; j < i.first; j++){
      cout << i.second << " ";
    }
  }
  
  return 0;
}