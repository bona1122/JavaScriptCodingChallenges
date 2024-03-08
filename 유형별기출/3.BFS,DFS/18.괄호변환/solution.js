// "()))((()"
const findSplitIdx = (str) => {
  let cntRight = 0;
  let cntLeft = 0;
  for(let i = 0; i < str.length; i++){
      str[i] === '(' ? cntLeft++ : cntRight++;
      if(cntLeft === cntRight) return i;
  }
}
const checkProperStr = (str) => {
  let cntLeft = 0;
  for(let i = 0; i < str.length; i++){
      if(str[i] === '('){
          cntLeft++;
      }else{
          if(cntLeft === 0) return false;
          else cntLeft--;
      }
  }
  return true;
}
const solution = (p) => {
  if(p ==='') return p;
  const idx = findSplitIdx(p);
  const u = p.slice(0,idx + 1);
  const v = p.slice(idx + 1);
  
  if(checkProperStr(u)){
      return u + solution(v);
  }else{
      let emptyStr = '';
      emptyStr += '(';
      emptyStr += solution(v);
      emptyStr += ')';
      let newU = u.slice(1, u.length - 1).split('').map((char) => char === '(' ? ')' : '(').join('');
      return emptyStr += newU;      
  }
}


/////////////// 프로그래머스 Hant 님 풀이
// function reverse(str) {
//   return str.slice(1, str.length - 1).split("").map((c) => (c === "(" ? ")" : "(")).join("");
// }

// function solution(p) {
//   if (p.length < 1) return "";

//   let balance = 0;
//   let pivot = 0;
//   do { balance += p[pivot++] === "(" ? 1 : -1 } while (balance !== 0);

//   const u = p.slice(0, pivot);
//   const v = solution(p.slice(pivot, p.length));

//   if (u[0] === "(" && u[u.length - 1] == ")") return u + v;
//   else return "(" + v + ")" + reverse(u);
// }
