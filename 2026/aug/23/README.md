# Unnatural Prime

Given an integer, determine if that number is a prime number or a negative prime number.

A prime number is a positive integer greater than `1` that is only divisible by `1` and itself.

A negative prime number is the negative version of a positive prime number.

`1` and `0` are not considered prime numbers.

## Understanding

A negative prime number follows the same rule as a normal prime number.

For example:

* `19` is prime → `true`
* `-23` is a negative prime → `true`
* `99` is not prime → `false`
* `-44` is not a negative prime → `false`
* `0`, `1`, and `-1` are not prime → `false`

To handle both positive and negative numbers, first convert the number to its absolute value.

For example:

```js
Math.abs(-23); // 23
```

Then check whether that value is prime.

## Steps

1. Convert the number to its absolute value using `Math.abs()`.
2. If the number is less than or equal to `1`, return `false`.
3. Start checking divisibility from `2`.
4. If the number is divisible by any value before itself, return `false`.
5. If no divisor is found, return `true`.

## Code

```js
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
```

## Examples

```js
isUnnaturalPrime(19);   // true
isUnnaturalPrime(-23);  // true
isUnnaturalPrime(97);   // true

isUnnaturalPrime(1);    // false
isUnnaturalPrime(-1);   // false
isUnnaturalPrime(0);    // false
isUnnaturalPrime(99);   // false
isUnnaturalPrime(-44);  // false
```

## Tests

* Waiting: `1. isUnnaturalPrime(1)` should return `false`.
* Waiting: `2. isUnnaturalPrime(-1)` should return `false`.
* Waiting: `3. isUnnaturalPrime(19)` should return `true`.
* Waiting: `4. isUnnaturalPrime(-23)` should return `true`.
* Waiting: `5. isUnnaturalPrime(0)` should return `false`.
* Waiting: `6. isUnnaturalPrime(97)` should return `true`.
* Waiting: `7. isUnnaturalPrime(-61)` should return `true`.
* Waiting: `8. isUnnaturalPrime(99)` should return `false`.
* Waiting: `9. isUnnaturalPrime(-44)` should return `false`.

## Key Takeaway

The main idea is to use `Math.abs()` so that positive and negative numbers can be checked using the same prime-number logic.
