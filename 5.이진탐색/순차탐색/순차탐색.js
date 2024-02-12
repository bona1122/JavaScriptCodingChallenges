const sequential_search = (n, target, array) => {
  for(let i = 0; i < n; i++){
    if(array[i] === target) return i + 1;
  }
}