function fibonacciSequence(start, length) {
  if (length === 0) {
    return [];
  }

  if (length === 1) {
    return [start[0]];
  }

  const result = [start[0], start[1]];

  while (result.length < length) {
    const next = result[result.length - 1] + result[result.length - 2];

    result.push(next);
  }

  return result;
}

// call or test
console.log(fibonacciSequence([0, 1], 20));
// [
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
//   55, 89, 144, 233, 377, 610, 987, 1597,
//   2584, 4181
// ]

console.log(fibonacciSequence([21, 32], 1));
// [21]

console.log(fibonacciSequence([0, 1], 0));
// []

console.log(fibonacciSequence([10, 20], 2));
// [10, 20]

console.log(fibonacciSequence([123456789, 987654321], 5));
// [123456789, 987654321, 1111111110, 2098765431, 3209876541]