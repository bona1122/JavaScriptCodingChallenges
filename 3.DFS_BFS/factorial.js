const fac1 = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};
console.log(fac1(5));

const fac2 = (n) => {
  if (n <= 1) {
    return 1;
  } else {
    return n * fac2(n - 1);
  }
};
console.log(fac2(5));
