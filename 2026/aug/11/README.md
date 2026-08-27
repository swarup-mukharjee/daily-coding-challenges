# Vowel Balance

## Problem

Given a string, determine whether the number of vowels in the **first half** of the string is equal to the number of vowels in the **second half**.

The string can contain any characters, including:

* Letters
* Numbers
* Spaces
* Symbols
* Special characters

The following letters are considered vowels:

```text
a
e
i
o
u
```

Both uppercase and lowercase letters should be treated as vowels.

If the string contains an **odd number of characters**, the center character should be ignored.

---

## Rules

1. Count the vowels in the first half of the string.
2. Count the vowels in the second half of the string.
3. If the string has an odd number of characters, ignore the middle character.
4. Both uppercase and lowercase vowels count.
5. Characters other than `a`, `e`, `i`, `o`, and `u` do not count as vowels.
6. Return `true` if both halves contain the same number of vowels.
7. Otherwise, return `false`.

---

# Example 1

```js
isBalanced("racecar")
```

The string has 7 characters:

```text
r a c e c a r
```

Because the length is odd, ignore the center character:

```text
r a c | e | c a r
```

The first half is:

```text
r a c
```

Vowels:

```text
a → 1
```

The second half is:

```text
c a r
```

Vowels:

```text
a → 1
```

Both halves contain one vowel.

Result:

```text
true
```

---

# Example 2

```js
isBalanced("Lorem Ipsum")
```

The string is:

```text
L o r e m   I p s u m
```

There are 11 characters, so the center character is ignored.

```text
L o r e m |   | I p s u m
```

First half:

```text
L o r e m
```

Vowels:

```text
o
e
```

Count:

```text
2
```

Second half:

```text
I p s u m
```

Vowels:

```text
I
u
```

Count:

```text
2
```

Both sides contain the same number of vowels.

Result:

```text
true
```

---

# Example 3

```js
isBalanced("Kitty Ipsum")
```

The string is:

```text
K i t t y   I p s u m
```

Ignoring the center character:

```text
K i t t y |   | I p s u m
```

First half:

```text
K i t t y
```

Vowels:

```text
i
```

Count:

```text
1
```

Second half:

```text
I p s u m
```

Vowels:

```text
I
u
```

Count:

```text
2
```

The counts are different.

Result:

```text
false
```

---

# Example 4

```js
isBalanced("string")
```

Split the string into two halves:

```text
s t r | i n g
```

First half:

```text
s t r
```

Vowels:

```text
0
```

Second half:

```text
i n g
```

Vowels:

```text
i → 1
```

The counts are different.

Result:

```text
false
```

---

# Example 5

```js
isBalanced(" ")
```

The string contains only one character:

```text
" "
```

There are no vowels.

Because the length is odd, the center character is ignored.

Therefore:

```text
First half vowels  = 0
Second half vowels = 0
```

The counts are equal.

Result:

```text
true
```

---

# Example 6

```js
isBalanced("abcdefghijklmnopqrstuvwxyz")
```

There are 26 characters, so each half contains 13 characters.

First half:

```text
abcdefghijklm
```

Vowels:

```text
a
e
i
```

Count:

```text
3
```

Second half:

```text
nopqrstuvwxyz
```

Vowels:

```text
o
u
```

Count:

```text
2
```

Therefore:

```text
3 !== 2
```

Result:

```text
false
```

---

# Example 7

```js
isBalanced("123A#b!E&*456-o.U")
```

This string contains letters, numbers, symbols, and punctuation.

Only these characters matter:

```text
A
E
o
U
```

Uppercase vowels count too.

The first half contains:

```text
A
E
```

Count:

```text
2
```

The second half contains:

```text
o
U
```

Count:

```text
2
```

Therefore:

```text
2 === 2
```

Result:

```text
true
```

---

# The Important Part: Odd-Length Strings

This is one of the most important rules.

Suppose the string is:

```text
racecar
```

Its length is:

```text
7
```

Seven is odd.

We don't want the center character to belong to either half.

So:

```text
r a c | e | c a r
```

The `e` in the center is ignored.

The two halves are:

```text
rac
car
```

Therefore, when finding the halfway point, we can use:

```js
Math.floor(str.length / 2)
```

For example:

```text
7 / 2 = 3.5
```

Then:

```text
Math.floor(3.5)
= 3
```

So the first half contains 3 characters, and the last 3 characters form the second half.

---

# How to Think About the Solution

Don't try to compare the complete strings.

The only thing we care about is:

```text
Number of vowels in first half
        =
Number of vowels in second half
```

Think of the problem as:

```text
INPUT
  ↓
Find the middle
  ↓
Separate first half and second half
  ↓
Count vowels in first half
  ↓
Count vowels in second half
  ↓
Compare the counts
  ↓
true / false
```

---

# Step 1: Find the Middle

Use:

```js
const middle = Math.floor(str.length / 2);
```

For an even-length string:

```text
abcdef
```

we have:

```text
6 / 2 = 3
```

So:

```text
abc | def
```

For an odd-length string:

```text
abcdefg
```

we have:

```text
7 / 2 = 3.5
```

After `Math.floor()`:

```text
3
```

So:

```text
abc | d | efg
```

The center character is ignored.

---

# Step 2: Get the First Half

We can use:

```js
const firstHalf = str.slice(0, middle);
```

For:

```text
abcdef
```

and:

```text
middle = 3
```

we get:

```text
abc
```

For:

```text
abcdefg
```

we also get:

```text
abc
```

The center character is not included.

---

# Step 3: Get the Second Half

We can use:

```js
const secondHalf = str.slice(str.length - middle);
```

For:

```text
abcdef
```

we get:

```text
def
```

For:

```text
abcdefg
```

we get:

```text
efg
```

So:

```text
abcdefg

first half  → abc
middle      → d
second half → efg
```

The middle character is ignored.

---

# Step 4: Identify Vowels

We need to recognize:

```text
a
e
i
o
u
```

in both uppercase and lowercase.

A simple way is to convert every character to lowercase:

```js
char.toLowerCase()
```

Then check whether it is contained in:

```js
"aeiou"
```

For example:

```js
"AEIOU".toLowerCase()
```

becomes:

```text
aeiou
```

Therefore uppercase vowels can be handled automatically.

---

# Step 5: Count the Vowels

We can loop through each half.

For example:

```js
let count = 0;

for (const char of firstHalf) {
    if ("aeiou".includes(char.toLowerCase())) {
        count++;
    }
}
```

For:

```text
hello
```

the characters are:

```text
h
e
l
l
o
```

When we reach:

```text
e
```

the count becomes:

```text
1
```

When we reach:

```text
o
```

the count becomes:

```text
2
```

Final count:

```text
2
```

---

# Step 6: Compare the Counts

After counting both halves:

```js
firstCount
secondCount
```

we simply compare them:

```js
return firstCount === secondCount;
```

If they are equal:

```text
true
```

Otherwise:

```text
false
```

---

# Complete Solution

```js
function isBalanced(str) {
    const middle = Math.floor(str.length / 2);

    const firstHalf = str.slice(0, middle);
    const secondHalf = str.slice(str.length - middle);

    const countVowels = (text) => {
        let count = 0;

        for (const char of text) {
            if ("aeiou".includes(char.toLowerCase())) {
                count++;
            }
        }

        return count;
    };

    const firstCount = countVowels(firstHalf);
    const secondCount = countVowels(secondHalf);

    return firstCount === secondCount;
}
```

---

# Let's Understand the Code

## 1. Find the Middle

```js
const middle = Math.floor(str.length / 2);
```

For:

```text
racecar
```

we get:

```text
Math.floor(7 / 2)
= 3
```

So the halves contain 3 characters each.

---

## 2. Get the First Half

```js
const firstHalf = str.slice(0, middle);
```

For:

```text
racecar
```

we get:

```text
rac
```

---

## 3. Get the Second Half

```js
const secondHalf = str.slice(str.length - middle);
```

For:

```text
racecar
```

we get:

```text
car
```

The center `e` is ignored.

---

## 4. Create a Vowel Counter

```js
const countVowels = (text) => {
```

This function accepts a string and returns the number of vowels inside it.

---

## 5. Start the Counter

```js
let count = 0;
```

Initially there are no vowels.

---

## 6. Check Every Character

```js
for (const char of text) {
```

This examines each character individually.

---

## 7. Check if the Character Is a Vowel

```js
if ("aeiou".includes(char.toLowerCase())) {
```

Suppose:

```text
char = "A"
```

First:

```js
char.toLowerCase()
```

becomes:

```text
a
```

Then:

```js
"aeiou".includes("a")
```

returns:

```text
true
```

So the counter increases.

---

## 8. Increase the Count

```js
count++;
```

Every time a vowel is found, we add one.

---

## 9. Return the Count

```js
return count;
```

For:

```text
Lorem
```

the function returns:

```text
2
```

because:

```text
o
e
```

are vowels.

---

## 10. Count Both Halves

```js
const firstCount = countVowels(firstHalf);
const secondCount = countVowels(secondHalf);
```

Now we have two numbers.

For example:

```text
firstCount  = 2
secondCount = 2
```

---

## 11. Compare

```js
return firstCount === secondCount;
```

If:

```text
2 === 2
```

the result is:

```text
true
```

If:

```text
1 === 2
```

the result is:

```text
false
```

---

# Full Flow

For:

```js
isBalanced("racecar")
```

### Input

```text
racecar
```

### Find Length

```text
7
```

### Find Middle

```text
Math.floor(7 / 2)
= 3
```

### Split

```text
rac | e | car
```

### First Half

```text
rac
```

Vowels:

```text
a
```

Count:

```text
1
```

### Center

```text
e
```

Ignored.

### Second Half

```text
car
```

Vowels:

```text
a
```

Count:

```text
1
```

### Compare

```text
1 === 1
```

### Final Result

```text
true
```

---

# Alternative Approach: Count While Looping

We don't necessarily need to create two separate strings.

We can compare characters from both sides of the string.

The idea is:

```text
First half                    Second half
    ↓                              ↓

a b c | center | c b a
↑                    ↑
```

However, creating the two halves makes the logic easier to understand, especially when learning the problem.

The important thing is correctly handling the center character when the string length is odd.

---

# Test Cases

```js
console.log(
    isBalanced("racecar")
);

// true
```

```js
console.log(
    isBalanced("Lorem Ipsum")
);

// true
```

```js
console.log(
    isBalanced("Kitty Ipsum")
);

// false
```

```js
console.log(
    isBalanced("string")
);

// false
```

```js
console.log(
    isBalanced(" ")
);

// true
```

```js
console.log(
    isBalanced("abcdefghijklmnopqrstuvwxyz")
);

// false
```

```js
console.log(
    isBalanced("123A#b!E&*456-o.U")
);

// true
```

---

# Key JavaScript Methods to Learn

| Method          | Purpose                                      |
| --------------- | -------------------------------------------- |
| `length`        | Find the number of characters                |
| `Math.floor()`  | Get the lower whole number                   |
| `slice()`       | Extract part of a string                     |
| `toLowerCase()` | Convert uppercase letters to lowercase       |
| `includes()`    | Check whether a character exists in a string |
| `for...of`      | Loop through characters                      |
| `===`           | Compare two values                           |

The most important concepts are:

```text
find middle
     ↓
split into two halves
     ↓
ignore center if necessary
     ↓
count vowels
     ↓
compare counts
     ↓
true / false
```

The key idea is:

> **Only the number of vowels matters, not the actual characters in each half.**
