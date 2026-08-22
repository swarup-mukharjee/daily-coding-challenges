# Fibonacci Sequence

## 📝 Question

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding numbers.

When starting with `0` and `1`, the first 10 numbers are:

```text
0, 1, 1, 2, 3, 5, 8, 13, 21, 34
```

Given:

* An array containing the **first two numbers** of a Fibonacci sequence.
* An integer representing the **length** of the sequence.

Return an array containing the sequence of the requested length.

### Rules

* The starting numbers are part of the sequence.
* The length can be `0` or greater.
* If the length is `0`, return an empty array.
* If the length is `1`, return only the first starting number.
* Each new number is calculated by adding the previous two numbers.

---

## 🧠 Understanding

Suppose we have:

```javascript
fibonacciSequence([10, 20], 5)
```

The first two numbers are already given:

```text
10, 20
```

Now add the last two numbers:

```text
10 + 20 = 30
```

Sequence:

```text
10, 20, 30
```

Again:

```text
20 + 30 = 50
```

Sequence:

```text
10, 20, 30, 50
```

Again:

```text
30 + 50 = 80
```

Final result:

```text
10, 20, 30, 50, 80
```

Therefore:

```javascript
fibonacciSequence([10, 20], 5);
// [10, 20, 30, 50, 80]
```

---

## 🔄 How the Loop Works

We start with:

```javascript
const result = [start[0], start[1]];
```

For:

```javascript
[10, 20]
```

we have:

```text
result = [10, 20]
```

Then:

```javascript
while (result.length < length)
```

means:

> Keep generating numbers until the array reaches the requested length.

To get the next number:

```javascript
const next =
  result[result.length - 1] +
  result[result.length - 2];
```

These represent:

```text
last number + second-last number
```

For example:

```text
[10, 20, 30]

last number       = 30
second-last       = 20

30 + 20 = 50
```

Then:

```javascript
result.push(next);
```

adds `50` to the array.

---

## 💡 Important Concepts

### `result.length`

For:

```javascript
const result = [10, 20, 30];
```

we have:

```text
result.length = 3
```

The last index is:

```javascript
result.length - 1
```

So:

```text
3 - 1 = 2
```

Therefore:

```javascript
result[2]
```

is:

```text
30
```

The second-last index is:

```javascript
result.length - 2
```

So:

```text
3 - 2 = 1
```

Therefore:

```javascript
result[1]
```

is:

```text
20
```

---

## 📌 Edge Cases

### Length is `0`

```javascript
fibonacciSequence([0, 1], 0);
```

Return:

```javascript
[]
```

There should be no numbers in the sequence.

---

### Length is `1`

```javascript
fibonacciSequence([21, 32], 1);
```

Return:

```javascript
[21]
```

Only the first starting number is included.

---

### Length is `2`

```javascript
fibonacciSequence([10, 20], 2);
```

Return:

```javascript
[10, 20]
```

The starting numbers already satisfy the requested length.

---

## 💻 Solution

```javascript
function fibonacciSequence(start, length) {
  if (length === 0) {
    return [];
  }

  if (length === 1) {
    return [start[0]];
  }

  const result = [start[0], start[1]];

  while (result.length < length) {
    const next =
      result[result.length - 1] +
      result[result.length - 2];

    result.push(next);
  }

  return result;
}
```

---

## 🧪 Tests

### Test 1

```javascript
fibonacciSequence([0, 1], 20);
```

Returns:

```javascript
[
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34,
  55, 89, 144, 233, 377, 610, 987, 1597,
  2584, 4181
]
```

### Test 2

```javascript
fibonacciSequence([21, 32], 1);
// [21]
```

### Test 3

```javascript
fibonacciSequence([0, 1], 0);
// []
```

### Test 4

```javascript
fibonacciSequence([10, 20], 2);
// [10, 20]
```

### Test 5

```javascript
fibonacciSequence([123456789, 987654321], 5);
// [123456789, 987654321, 1111111110, 2098765431, 3209876541]
```

---

## 🔍 Code Breakdown

### Get the starting numbers

```javascript
const result = [start[0], start[1]];
```

Example:

```text
start = [10, 20]

result = [10, 20]
```

### Find the last two numbers

```javascript
result[result.length - 1]
```

gets the last number.

```javascript
result[result.length - 2]
```

gets the second-last number.

### Add them

```javascript
const next =
  result[result.length - 1] +
  result[result.length - 2];
```

### Add the result

```javascript
result.push(next);
```

`push()` adds the new number to the end of the array.

---

## 🚀 Summary

The complete process is:

```text
Start with two numbers
        ↓
Check requested length
        ↓
Take the last two numbers
        ↓
Add them
        ↓
Push the result
        ↓
Check array length again
        ↓
Repeat until required length
        ↓
Return the array
```

The main Fibonacci rule is:

```text
next number = previous number + number before previous
```
