function sumOfSquares(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum = sum + (i * i);
  }

  return sum;
}



//using math formula
function sumOfSquaresFormula(n) {
  return (n * (n + 1) * (2 * n + 1)) / 6;
}


// call or test
console.log(sumOfSquares(5));
console.log(sumOfSquaresFormula(5));