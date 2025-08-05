#include<bits/stdc++.h>
using namespace std;

int n = 5, k = 3, a[5] = {0, 1, 2, 3, 4};
int r = 3;
void print(vector<int> &v){
  for(auto i : v) cout << i << " ";
  cout << '\n';
}
void print(){
  for(int i = 0; i < r; i++){
    cout << a[i] << " ";
  }
  cout << '\n';
}
// k개 선택하기
void combi(int start, vector<int> &v){
  if(v.size() == k){
    print(v);
    return;
  }
  for(int i = start; i < n; i++){
    v.push_back(i);
    combi(i + 1, v);
    v.pop_back();
  }
}

// 순열
int main(){
  int a[3]  = {1,2,3};
  vector<int> v;

  for(int i = 0; i < 3; i++){
    v.push_back(a[i]);
  }

  do{
    print(v);
  }while(next_permutation(v.begin(), v.end()));
  cout << '\n';
}

// 재귀를 이용한 순열
void makePermutation(int n, int r, int depth){
  if(r == depth){ // r번째껏까지 다 선택 완료했으면,
    print();
    return;
  }
  for(int i = depth; i < n; i++){
    swap(a[depth], a[i]); // 현재댑스 i로 선택
    makePermutation(n, r, depth + 1); // 다음댑스 선택
    swap(a[depth], a[i]); // 백트래킹
  }
}

// binarySearch
int binarySearch(const vector<int>& arr, int target){
  int start = 0;
  int end = arr.size() - 1;
  while(start <= end){
    int mid = start + (end - start) / 2;
    if(arr[mid] == target) return mid;
    else if(target < arr[mid]) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
}

vector<string> split(const string& input, string deli){
  vector<string> result;
  auto start = 0;
  auto end = input.find(deli);
  while(end != string::npos){
    result.push_back(input.substr(start, end - start));
    start = end + deli.size();
    end = input.find(deli, start);
  }
  result.push_back(input.substr(start, end - start));
  return result;
}