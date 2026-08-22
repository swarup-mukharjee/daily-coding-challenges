# Base Check

## 📝 Question

Given a string representing a number and an integer `base` from `2` to `36`, determine whether the number is **valid in that base**.

A number is valid if **every character belongs to the allowed digits of the given base**.

### Rules

* The base can be any number from `2` to `36`.
* The string can contain numbers (`0-9`).
* The string can contain uppercase or lowercase letters (`A-Z`, `a-z`).
* The check should be **case-insensitive**.
* Every character must be valid for the given base.
* Digits and letters have values:

  * `0-9` → values `0-9`
  * `A-Z` → values `10-35`
* If a character's value is greater than or equal to the base, the number is invalid.

---

## 🧠 Understanding

Different bases allow different characters.

### Base 2

Only:

```text id="u0x0yy"
0 1
```

Valid:

```text id="6r1q2j"
10101
```

Invalid:

```text id="6vl7xu"
10201
```

Because `2` is not allowed in base 2.

---

### Base 8

Allowed:

```text id="hknx9w"
0 1 2 3 4 5 6 7
```

Valid:

```text id="0k2z0a"
76543210
```

Invalid:

```text id="ysb3d5"
9876543210
```

Because `8` and `9` are not valid digits in base 8.

---

### Base 10

Allowed:

```text id="xkwx3b"
0 1 2 3 4 5 6 7 8 9
```

Valid:

```text id="y6blp4"
9876543210
```

Invalid:

```text id="y4p3zh"
ABC
```

Because letters are not valid in base 10.

---

### Base 16

Base 16 is hexadecimal.

Allowed:

```text id="9fqlm0"
0 1 2 3 4 5 6 7 8 9
A B C D E F
```

So:

```text id="c2az6y"
ABC
```

is valid.

But:

```text id="stzv1w"
G
```

is not valid because `G` has a value of `16`, while base 16 only allows values `0-15`.

---

### Base 36

Base 36 supports:

```text id="4glx7h"
0-9
A-Z
```

Therefore:

```text id="q3g7lv"
Z
```

is valid.

`Z` has a value of `35`, which is allowed in base 36.

---

## 🔢 Character Values

Letters represent values after `9`.

```text id="t5q4un"
0 = 0
1 = 1
2 = 2
...
9 = 9

A = 10
B = 11
C = 12
D = 13
E = 14
F = 15
...
Z = 35
```

This means:

```text id="6tq5f7"
A → 10
B → 11
F → 15
G → 16
Z → 35
```

---

## 💡 Important Concept

The easiest way to solve this problem is to convert each character into its numeric value.

JavaScript's:

```javascript id="1ny3je"
parseInt(char, 36)
```

can be useful here.

Why `36`?

Because **base 36 is the maximum base supported by JavaScript's `parseInt()`**, and it understands:

```text id="s4f0xm"
0-9 → 0-9
A-Z → 10-35
```

For example:

```javascript id="l0v1lm"
parseInt("A", 36);
// 10

parseInt("F", 36);
// 15

parseInt("Z", 36);
// 35
```

We can then compare the character value with the requested base.

---

## 🔍 Main Logic

Suppose:

```text id="n8b6cz"
character = "G"
base = 16
```

First find the value:

```javascript id="gk8xx9"
parseInt("G", 36)
```

Result:

```text id="2s6ypq"
16
```

Now compare:

```text id="9j8p9k"
16 >= 16
```

That is `true`, so `G` is **not valid** in base 16.

But with base 17:

```text id="9j9y0x"
16 >= 17
```

is `false`.

Therefore:

```text id="n90v8q"
G is valid in base 17.
```

---

## 🔄 Case Insensitivity

Uppercase and lowercase letters represent the same value.

For example:

```text id="wz1xjt"
A = 10
a = 10

F = 15
f = 15

Z = 35
z = 35
```

So:

```javascript id="qz1n4h"
isValidNumber("ABC", 16);
```

and:

```javascript id="z0r8m3"
isValidNumber("abc", 16);
```

should both return:

```text id="yq2z3a"
true
```

---

## 💻 Solution

```javascript id="f2r9xq"
function isValidNumber(n, base) {
  for (const char of n.toUpperCase()) {
    const value = parseInt(char, 36);

    if (value >= base || isNaN(value)) {
      return false;
    }
  }

  return true;
}
```

---

## 🔎 Code Breakdown

### 1. Convert everything to uppercase

```javascript id="k9x6qp"
n.toUpperCase()
```

For example:

```text id="q2t4jy"
"AbC"
```

becomes:

```text id="j6k8r1"
"ABC"
```

This makes the check case-insensitive.

---

### 2. Loop through every character

```javascript id="l4g6jk"
for (const char of n.toUpperCase())
```

For:

```text id="u3m9sx"
"ABC"
```

the loop processes:

```text id="5tqj38"
A
B
C
```

one by one.

---

### 3. Convert character to a value

```javascript id="x3b8sf"
const value = parseInt(char, 36);
```

Examples:

```text id="a2k6k8"
"5" → 5
"A" → 10
"B" → 11
"F" → 15
"Z" → 35
```

---

### 4. Compare with the base

```javascript id="5d5s0q"
if (value >= base)
```

For base 16:

```text id="2n4m5q"
F = 15

15 >= 16
false
```

So `F` is valid.

But:

```text id="z8v0la"
G = 16

16 >= 16
true
```

So `G` is invalid.

---

### 5. Invalid characters

```javascript id="6xxe1h"
isNaN(value)
```

checks whether the character could not be converted into a valid number.

If it cannot be converted, return:

```javascript id="x9x1pb"
false
```

---

## 🧪 Tests

```javascript id="t7y4kr"
isValidNumber("10101", 2);
// true

isValidNumber("10201", 2);
// false

isValidNumber("76543210", 8);
// true

isValidNumber("9876543210", 8);
// false

isValidNumber("9876543210", 10);
// true

isValidNumber("ABC", 10);
// false

isValidNumber("ABC", 16);
// true

isValidNumber("Z", 36);
// true

isValidNumber("ABC", 20);
// true

isValidNumber("4B4BA9", 16);
// true

isValidNumber("5G3F8F", 16);
// false

isValidNumber("5G3F8F", 17);
// true

isValidNumber("abc", 10);
// false

isValidNumber("abc", 16);
// true

isValidNumber("AbC", 16);
// true

isValidNumber("z", 36);
// true
```

---

## 📊 Base Reference

| Base | Valid Characters |
| ---- | ---------------- |
| 2    | `0-1`            |
| 8    | `0-7`            |
| 10   | `0-9`            |
| 16   | `0-9`, `A-F`     |
| 20   | `0-9`, `A-J`     |
| 36   | `0-9`, `A-Z`     |

---

## 🚀 Summary

The solution follows these steps:

```text id="a4j8k2"
Number string
      ↓
Convert to uppercase
      ↓
Take one character
      ↓
Convert character to value
      ↓
Compare value with base
      ↓
value >= base ?
   ↙          ↘
 true         false
  ↓             ↓
false       Check next
              character
                 ↓
              all valid?
                 ↓
               true
```

The main idea is:

```javascript id="p0g4kz"
parseInt(char, 36)
```

converts each character into its numeric value, and then:

```javascript id="3c7f9w"
value >= base
```

tells us whether that character is allowed in the requested base.
