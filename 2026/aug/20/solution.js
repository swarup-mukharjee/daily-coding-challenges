function squaresWithThree(n) {
  let square;
  let count = 0;

  for (let i = 0; i <= n; i++) {
    square = i * i;

    if (square.toString().includes("3")) {
      count++;
    }
  }

  return count;
}


// call or test
console.log(squaresWithThree(100));