const solution = (n) => {
  let rest = n;
  let result = 0;
  while(true){
      let sum = 0;
      if(rest === 0){
          break;
      }
      while((rest - sum) % 2 !== 0){ // 2�� �������� ������, 2�� ������ ������ ����
          sum++;
      }
      rest = (rest - sum) / 2; // 2�� ������
      result += sum;
  }
  return result;
}

///// �丣�� �� Ǯ��
// � ���� ����ؼ� 2�γ����鼭 ������ ���������� ���� 2������ ǥ������ �� 1�� ������ ����.
function solution(n){
    if(n === 1) return 1;
    const nArr = Array.from(n.toString(2));
    return nArr.reduce((a,b)=>(+a)+(+b));
}

/// �����ε�
// 2������ ǥ���ϴ� ��: n.toString(2)
// ���ڿ��� Array.from�� �־��ָ� �� �ڸ����� �迭�� ������ش�.