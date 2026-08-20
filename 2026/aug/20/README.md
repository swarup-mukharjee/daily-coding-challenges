# 3 Strikes

Given an integer between `1` and `10,000`, return a count of how many numbers from `1` up to that integer have a square containing at least one digit `3`.

## Problem

For every number from `1` to the given integer:

1. Calculate its square.
2. Check whether the square contains the digit `3`.
3. If it does, increase the count.
4. Return the final count.

### Example

For `n = 10`:

| Number | Square | Contains `3`? |
| -----: | -----: | :-----------: |
|      1 |      1 |       ❌       |
|      2 |      4 |       ❌       |
|      3 |      9 |       ❌       |
|      4 |     16 |       ❌       |
|      5 |     25 |       ❌       |
|      6 |     36 |       ✅       |
|      7 |     49 |       ❌       |
|      8 |     64 |       ❌       |
|      9 |     81 |       ❌       |
|     10 |    100 |       ❌       |

Only `6² = 36` contains the digit `3`.

Therefore:

```text
squaresWithThree(10) → 1
```

## Tests

```text
squaresWithThree(1)     → 0
squaresWithThree(10)    → 1
squaresWithThree(100)   → 19
squaresWithThree(1000)  → 326
squaresWithThree(10000) → 4531
```

## Approach

The basic approach is:

```text
count = 0

for every number i from 1 to n:
    square = i × i

    if square contains "3":
        count++

return count
```

In JavaScript, `toString()` and `includes()` can be used to check whether the square contains the digit `3`.

## Example

```js
function squaresWithThree(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    const square = i * i;

    if (square.toString().includes("3")) {
      count++;
    }
  }

  return count;
}
```

## Key Point

We count the **number whose square contains at least one `3`**, not the number of `3` digits.

For example:

```text
183² = 33489
```

The square contains multiple `3`s, but this number contributes only **1** to the count.

## Complexity

For `n` numbers:

* **Time:** `O(n × d)`, where `d` is the number of digits in the square.
* **Space:** `O(d)` for converting the square to a string.

## Challenge

🚀 Practice problem from the **freeCodeCamp Daily Coding Challenge**.
