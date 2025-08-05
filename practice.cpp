#include<bits/stdc++.h>
using namespace std;
void printV(vector<int> &v){
  for(int i = 0; i < v.size(); i++){
    cout << v[i] << ' '; 
  }
  cout << '\n';
}

// split은 string, deli를 받아서, string vector를 반환해야함
vector<string> split(const string& input, string deli){
  vector<string> result;
  auto start = 0;
  auto end = input.find(deli);
  while(end != string::npos){
    result.push_back(input.substr(start, end - start)); // end-start개의 문자 추출
    start = end + deli.size();
    end = input.find(deli, start); // 두개의 인자 가능(찾을 문자열, 찾기 시작할 위치)
  }
  result.push_back(input.substr(start, end - start));
  return result;
}

// 조합: n개 중에 k개 뽑기 
int n = 5, k = 3, a[5] = {0, 1, 2, 3, 4};
vector<int> b;
void combi(int start, vector<int> &v){
  if(v.size() == k){
    // v에는 뽑힌 인덱스 들어있음
  }
  for(int i = start + 1; i < n; i++){
    v.push_back(i);
    combi(i + 1, v);
    v.pop_back();
  }
}

void permu(){
  // 1. 벡터기반
  vector<int> v = {1, 2, 3};
  do{
    for(auto n : v) cout << n << " ";
  }while(next_permutation(v.begin(), v.end()));

  // 2. 배열기반
  int a[3] = {1, 2, 3};
  do{
    for(int n : a) cout << n << " ";
  }while(next_permutation(a, a+3));
}

// 재귀버전 : n개중 r개를 뽑아 만드는 순열
int a[3] = {1, 2, 3};
int n = 3, r = 3;
void makePermu(int n, int r, int depth){
  if(depth == r){ // 앞부터 순차적으로 r개가 원하는 순열
    for(int i = 0; i < r; i++) cout << a[i] << " ";
  }
  for(int i = depth; i < n; i++){
    swap(a[i], a[depth]);
    makePermu(n, r, depth + 1);
    swap(a[i], a[depth]); // 원복
  }
}

void unique_test(){
  // unique는 sort, erase와 함께 사용하는 경우가 많다. 
  vector<int> s {4, 3, 3, 5, 1, 2, 3};
  sort(s.begin(), s.end());
  // unique는 중복되지 않은 요소로 채운 후, 그 다음 이터레이터를 반환
  // 따라서 unique 반환값부터 end까지 제거해줘야함.
  s.erase(unique(s.begin(), s.end()), s.end());
  for(auto i : s) cout << i << " ";
}

int y, x, ny, nx, m, n;
int dy[4] = {-1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1};
int g[51][51];
bool visited[51][51];
void dfs(int y, int x) {
  visited[y][x] = 1; // 방문체크
  for(int i = 0; i < 4; i++){ // 연결된 곳으로
    ny = y + dy[i];
    nx = x + dx[i];
    if(ny < 0 || nx < 0 || ny >= n || nx >= m) continue; // 범위 체크
    if(g[ny][nx] == 1 && !visited[ny][nx]) { // 방문안했고, 갈 수 있으면 dfs호출
      dfs(ny, nx);
    }
  }
}

int binarySearch(const vector<int>& arr, int target){
  int start = 0;
  int end = arr.size() - 1;
  while(start <= end){
    // int mid = (start + end) / 2;
    int mid = start + (end - start) / 2; // 위의 주석된 코드는 오버플로우가 발생할 위험 있어서 이렇게 씀
    if(arr[mid] == target) {
      return mid;
    }else if(arr[mid] < target) start = mid + 1;
    else end = mid - 1; 
  }
  return -1;
}


// 비교 함수 정의와 priority_queue 선언
bool cmp(const pair<int, int>& a, const pair<int, int>& b) {
  // 원하는 비교 로직 구현
  if (a.first != b.first) return a.first < b.first;
  return a.second < b.second;
}
priority_queue<
  pair<int, int>, 
  vector<pair<int, int>>, 
  function<bool(const pair<int, int>&, const pair<int, int>&)>
> pq(cmp);
// priority_queue<T, vector<T>, greater<T>> pq;
priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> minpq;

// union, find
int parent[3] = {0, 1, 2};
int find(int x){
  if(parent[x] != x){
    parent[x] = find(parent[x]);
  }
  return parent[x];
}
void unite(int a, int b){
  a = find(a);
  b = find(b);
  if(a<b){
    parent[b] = a;
  }else{
    parent[a] = b;
  }
}