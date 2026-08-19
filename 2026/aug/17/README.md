# Targeted Sum

## Problem

Given an array of numbers and an integer `target`, find **two unique numbers** in the array whose sum equals the target.

Return an array containing the **indices** of those two numbers.

If no two numbers can add up to the target, return:

```js
"Target not found"
```

The returned indices must be in **ascending order**.

## Examples

```js
findTarget([2, 7, 11, 15], 9)
// [0, 1]
```

```js
findTarget([3, 2, 4, 5], 6)
// [1, 2]
```

```js
findTarget([1, 3, 5, 6, 7, 8], 15)
// [4, 5]
```

```js
findTarget([1, 3, 5, 7], 14)
// "Target not found"
```

## Mathematical Understanding

The main mathematical idea is simple:

We need to find two numbers:

```text
a + b = target
```

Instead of checking every possible pair only by their sum, we can calculate the number we **need**:

```text
needed = target - currentNumber
```

For example:

```text
Array:  [2, 7, 11, 15]
Target: 9
```

Start with `2`:

```text
needed = 9 - 2
needed = 7
```

`7` exists in the array, so:

```text
2 + 7 = 9
```

Therefore, their indices are:

```text
[0, 1]
```

## Learning

This challenge helps understand:

* Array traversal
* Array indices
* Nested loops
* The **Two Sum** problem
* Mathematical complement calculation
* Hash maps / JavaScript `Map`
* Time complexity
* Space complexity
* Handling cases where no solution exists
* Returning indices instead of values

## Important Concept

The key formula is:

```text
needed = target - currentNumber
```

For example:

```text
target = 6
currentNumber = 2

needed = 6 - 2
needed = 4
```

So if we have `2` and later find `4`, we know:

```text
2 + 4 = 6
```

## Brute Force Approach

The easiest approach is to compare every number with every other number.

```js
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      return [i, j];
    }
  }
}
```

### Complexity

```text
Time:  O(n²)
Space: O(1)
```

This is easy to understand but becomes slower when the array is large.

## Optimized Approach

We can use a JavaScript `Map` to remember numbers we have already seen.

For every number:

```text
needed = target - number
```

Then check whether `needed` already exists in the `Map`.

### Complexity

```text
Time:  O(n)
Space: O(n)
```

This is much faster because we only need to traverse the array once.

## What I Learned

The most important lesson from this challenge is that a mathematical relationship can reduce the amount of searching required.

Instead of asking:

> "Which two numbers should I try?"

We can ask:

> "What number do I need to complete the target?"

```text
current + needed = target
```

That small change in thinking leads from a brute-force `O(n²)` solution to an optimized `O(n)` solution.

## Test Cases

* `findTarget([2, 7, 11, 15], 9)` → `[0, 1]`
* `findTarget([3, 2, 4, 5], 6)` → `[1, 2]`
* `findTarget([1, 3, 5, 6, 7, 8], 15)` → `[4, 5]`
* `findTarget([1, 3, 5, 7], 14)` → `"Target not found"`

## Key Takeaway

```text
Target = A + B

Therefore:

B = Target - A
```

This **complement approach** is the core idea behind the optimized solution.
