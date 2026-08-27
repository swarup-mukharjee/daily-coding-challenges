# Unorder of Operations

## Problem

Given an array of integers and an array of string operators, evaluate the numbers **sequentially from left-to-right**.

The operators should be repeated as needed until all numbers have been used.

Unlike normal mathematical expressions, **standard order of operations must be ignored**.

### Rules

1. The first number becomes the initial result.
2. Start applying operators from the first operator.
3. Apply each operator to the next number.
4. When all operators have been used, start again from the first operator.
5. Continue until every number has been processed.
6. Always evaluate from **left-to-right**.
7. Do not apply standard mathematical precedence.
8. Valid operators are:

   * `+`
   * `-`
   * `*`
   * `/`
   * `%`

---

## Example

Consider:

```js
evaluate([1, 2, 3, 4, 5], ['+', '*'])
```

The expression is:

```text
1 + 2 * 3 + 4 * 5
```

Normally, multiplication would be performed before addition.

But this challenge says to **ignore standard order of operations**.

Therefore, evaluate from left-to-right:

```text
1 + 2 = 3

3 * 3 = 9

9 + 4 = 13

13 * 5 = 65
```

Result:

```text
65
```

---

# Understanding the Operator Pattern

Suppose we have:

```js
numbers = [1, 2, 3, 4, 5]
operators = ['+', '*']
```

There are two operators:

```text
+
*
```

But there are four operations to perform.

So the operators repeat:

```text
+ → * → + → *
```

The calculation becomes:

```text
1 + 2
3 * 3
9 + 4
13 * 5
```

The important idea is:

> When the operators run out, start again from the first operator.

---

# Example 1

```js
evaluate([5, 6, 7, 8, 9], ['+', '-'])
```

The operators repeat like this:

```text
+ → - → + → -
```

Now calculate from left-to-right:

```text
5 + 6 = 11

11 - 7 = 4

4 + 8 = 12

12 - 9 = 3
```

Result:

```text
3
```

---

# Example 2

```js
evaluate([17, 61, 40, 24, 38, 14], ['+', '%'])
```

Operator pattern:

```text
+ → % → + → % → +
```

Calculate:

```text
17 + 61 = 78

78 % 40 = 38

38 + 24 = 62

62 % 38 = 24

24 + 14 = 38
```

Result:

```text
38
```

---

# Example 3

```js
evaluate([20, 2, 4, 24, 12, 3], ['*', '/'])
```

Operator pattern:

```text
* → / → * → / → *
```

Calculate:

```text
20 * 2 = 40

40 / 4 = 10

10 * 24 = 240

240 / 12 = 20

20 * 3 = 60
```

Result:

```text
60
```

---

# Example 4

```js
evaluate([11, 4, 10, 17, 2], ['*', '*', '%'])
```

There are three operators:

```text
* → * → %
```

There are four operations, so the pattern becomes:

```text
* → * → % → *
```

Calculate:

```text
11 * 4 = 44

44 * 10 = 440

440 % 17 = 15

15 * 2 = 30
```

Result:

```text
30
```

---

# Example 5

```js
evaluate([33, 11, 29, 13], ['/', '-'])
```

Operator pattern:

```text
/ → - → /
```

Calculate:

```text
33 / 11 = 3

3 - 29 = -26

-26 / 13 = -2
```

Result:

```text
-2
```

---

# The Important Part: Left-to-Right Evaluation

This is the most important rule of the challenge.

Consider:

```js
[1, 2, 3]
['+', '*']
```

The expression is:

```text
1 + 2 * 3
```

Normal JavaScript would evaluate:

```text
2 * 3 = 6

1 + 6 = 7
```

But we **must not** do that.

This challenge requires:

```text
1 + 2 = 3

3 * 3 = 9
```

Therefore:

```text
Result = 9
```

So we are essentially treating every operation as:

```text
currentResult OPERATOR nextNumber
```

---

# How to Think About the Solution

Don't try to build an expression string such as:

```text
1 + 2 * 3 + 4
```

Instead, keep a variable containing the **current result**.

The process is:

```text
INPUT
  ↓
Take first number
  ↓
Current result
  ↓
Take next number
  ↓
Apply current operator
  ↓
Update result
  ↓
Repeat
  ↓
OUTPUT
```

---

# Step 1: Set the Initial Result

The first number should become the starting result.

For:

```js
const numbers = [1, 2, 3, 4, 5];
```

we start with:

```js
let result = numbers[0];
```

So:

```text
result = 1
```

We don't perform an operation yet because there is no number before `1`.

---

# Step 2: Loop Through the Remaining Numbers

We need to start from the second number.

The second number has index `1`.

So:

```js
for (let i = 1; i < numbers.length; i++) {
    // operation
}
```

For:

```js
[1, 2, 3, 4, 5]
```

the values of `i` are:

```text
1
2
3
4
```

Therefore, the numbers processed are:

```text
2
3
4
5
```

---

# Step 3: Select the Operator

Suppose:

```js
const operators = ['+', '*'];
```

We need:

```text
+
*
+
*
```

A useful way to repeat the operators is the modulo operator `%`.

Use:

```js
operators[(i - 1) % operators.length]
```

Let's understand it.

For:

```text
operators.length = 2
```

we get:

```text
i = 1

(1 - 1) % 2
= 0 % 2
= 0
```

So:

```js
operators[0]
```

which is:

```text
+
```

Next:

```text
i = 2

(2 - 1) % 2
= 1 % 2
= 1
```

So:

```js
operators[1]
```

which is:

```text
*
```

Next:

```text
i = 3

(3 - 1) % 2
= 2 % 2
= 0
```

So we return to:

```text
+
```

This creates the repeating pattern:

```text
+ → * → + → *
```

---

# Step 4: Apply the Operation

Now we have:

```js
const operator = operators[(i - 1) % operators.length];
```

We need to perform the correct operation.

For example:

```js
if (operator === '+') {
    result += numbers[i];
}
```

For subtraction:

```js
if (operator === '-') {
    result -= numbers[i];
}
```

For multiplication:

```js
if (operator === '*') {
    result *= numbers[i];
}
```

For division:

```js
if (operator === '/') {
    result /= numbers[i];
}
```

For modulo:

```js
if (operator === '%') {
    result %= numbers[i];
}
```

---

# Step 5: Return the Result

After every number has been processed:

```js
return result;
```

The final value is the answer.

---

# Complete Solution

```js
function evaluate(numbers, operators) {
    let result = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        const operator = operators[(i - 1) % operators.length];

        if (operator === '+') {
            result += numbers[i];
        } else if (operator === '-') {
            result -= numbers[i];
        } else if (operator === '*') {
            result *= numbers[i];
        } else if (operator === '/') {
            result /= numbers[i];
        } else if (operator === '%') {
            result %= numbers[i];
        }
    }

    return result;
}
```

---

# Let's Understand the Code

## 1. Initial Result

```js
let result = numbers[0];
```

For:

```js
numbers = [20, 2, 4, 24, 12, 3]
```

we get:

```text
result = 20
```

---

## 2. Loop Through the Numbers

```js
for (let i = 1; i < numbers.length; i++)
```

We start at `1` because index `0` is already being used as the initial result.

For:

```js
[20, 2, 4, 24, 12, 3]
```

the loop processes:

```text
2
4
24
12
3
```

---

## 3. Select the Operator

```js
const operator = operators[(i - 1) % operators.length];
```

For:

```js
operators = ['*', '/']
```

the operator sequence becomes:

```text
*
/
*
/
*
```

---

## 4. Check the Operator

```js
if (operator === '+')
```

checks whether the current operator is addition.

Similarly:

```js
else if (operator === '-')
```

checks subtraction.

```js
else if (operator === '*')
```

checks multiplication.

```js
else if (operator === '/')
```

checks division.

```js
else if (operator === '%')
```

checks modulo.

---

# Full Flow

Consider:

```js
evaluate([20, 2, 4, 24, 12, 3], ['*', '/'])
```

### Input

```text
numbers:
20  2  4  24  12  3

operators:
*   /
```

### Initial Result

```text
20
```

### First Operation

```text
20 * 2 = 40
```

### Second Operation

```text
40 / 4 = 10
```

### Third Operation

The operator pattern repeats:

```text
*
```

```text
10 * 24 = 240
```

### Fourth Operation

```text
240 / 12 = 20
```

### Fifth Operation

The pattern repeats again:

```text
*
```

```text
20 * 3 = 60
```

### Final Result

```text
60
```

---

# Test Cases

```js
console.log(
    evaluate([5, 6, 7, 8, 9], ['+', '-'])
);

// 3
```

```js
console.log(
    evaluate([17, 61, 40, 24, 38, 14], ['+', '%'])
);

// 38
```

```js
console.log(
    evaluate([20, 2, 4, 24, 12, 3], ['*', '/'])
);

// 60
```

```js
console.log(
    evaluate([11, 4, 10, 17, 2], ['*', '*', '%'])
);

// 30
```

```js
console.log(
    evaluate([33, 11, 29, 13], ['/', '-'])
);

// -2
```

---

# Key JavaScript Concepts to Learn

| Concept        | Purpose                              |
| -------------- | ------------------------------------ |
| `array[index]` | Access an element from an array      |
| `for` loop     | Process numbers sequentially         |
| `%` modulo     | Repeat operators cyclically          |
| `if / else if` | Determine which operation to perform |
| `+=`           | Add to the current result            |
| `-=`           | Subtract from the current result     |
| `*=`           | Multiply the current result          |
| `/=`           | Divide the current result            |
| `%=`           | Apply modulo to the current result   |

The most important concepts are:

```text
initial result
      ↓
loop through remaining numbers
      ↓
select operator cyclically
      ↓
apply operation immediately
      ↓
update result
      ↓
repeat
      ↓
return result
```

The key idea is:

> **Never build a mathematical expression and let JavaScript evaluate it. Perform each operation immediately so that evaluation always happens from left-to-right.**
