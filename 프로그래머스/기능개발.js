const solution = (progresses, speeds) => {
  let result = [];
  const expectedTerm = progresses.map((progress, i) => {
      return Math.ceil((100 - progress) / speeds[i]);
  })
  let ready = expectedTerm[0];
  let deployCnt = 1;
  for(let i = 1; i < expectedTerm.length; i++){
      if(ready >= expectedTerm[i]){
          deployCnt++;
      }else{
          result = [...result, deployCnt];
          deployCnt = 1;
          ready = expectedTerm[i];
      }
  }
   result = [...result, deployCnt];
  return result;
}