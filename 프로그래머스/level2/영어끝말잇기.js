// �Ź� �迭���� ���� ã�� �ð��� ���̱� ���� map�� ���
const solution = (n, words) => {
  const result = [0,0];
  const map = {};
  map[words[0]] = 1;

  for(let i = 1; i < words.length; i++){
      if(
          map[words[i]] === undefined && 
          words[i][0] === words[i-1][words[i-1].length - 1]){
          map[words[i]] = 1;
      }
      else{
          const num = i % n;
          result[0] = num + 1;
          result[1] = Math.floor(i / n) + 1;
          break;
      }
  }
      return result;
}