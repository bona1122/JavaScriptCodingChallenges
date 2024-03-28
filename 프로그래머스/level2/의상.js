const solution = (clothes) => {
  const clothesMap = {};
  clothes.forEach((cloth) => {
    clothesMap[cloth[1]] === undefined
      ? (clothesMap[cloth[1]] = 1)
      : clothesMap[cloth[1]]++;
  });

    let result = 1;
    for(const key in clothesMap){
        result *= clothesMap[key] + 1;
    } 
    return result - 1; // 아무것도 입지 않은 경우 제외
};
