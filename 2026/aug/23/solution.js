function isUnnaturalPrime(n) {
  n = Math.abs(n);

  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

//test  or call
console.log(isUnnaturalPrime(7));