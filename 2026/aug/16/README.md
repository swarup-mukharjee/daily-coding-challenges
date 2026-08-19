# Anagram Checker

## Problem

Given two strings, determine whether they are **anagrams** of each other.

Two strings are anagrams when they contain the **same characters with the same frequency**, but the characters can appear in a different order.

### Rules

* Ignore uppercase and lowercase differences.
* Ignore white spaces.
* Every character must occur the same number of times.

## Examples

```js
areAnagrams("listen", "silent")
// true
```

Both strings contain the same characters:

```text
listen → l, i, s, t, e, n
silent → s, i, l, e, n, t
```

The order is different, but the characters are the same.

```js
areAnagrams("School master", "The classroom")
// true
```

After converting to lowercase and removing spaces:

```text
schoolmaster
theclassroom
```

They contain the same characters.

```js
areAnagrams("Hello", "World")
// false
```

The characters are different.

## Mathematical Understanding

The important idea is **character frequency**.

For example:

```text
apple
```

can be represented as:

```text
a → 1
p → 2
l → 1
e → 1
```

For an anagram, both strings must have exactly the same frequency:

```text
String A frequency = String B frequency
```

So the basic condition is:

```text
For every character:

frequencyA[character] === frequencyB[character]
```

## Step-by-Step Thinking

### 1. Normalize the strings

Convert both strings to lowercase:

```js
str.toLowerCase()
```

Then remove spaces:

```js
str.replace(/\s/g, "")
```

For example:

```text
"School Master"
        ↓
"schoolmaster"
```

### 2. Compare the characters

There are two common approaches:

**Approach 1 — Sorting**

Convert the strings into arrays, sort them, and compare them.

```text
listen
↓
eilnst

silent
↓
eilnst
```

Since both results are the same, they are anagrams.

**Approach 2 — Character Frequency**

Count how many times each character appears in both strings and compare the counts.

This approach helps develop an understanding of:

* Objects
* `Map`
* Character counting
* Hash maps
* Frequency-based algorithms

## Tests

* `areAnagrams("listen", "silent")` → `true`
* `areAnagrams("School master", "The classroom")` → `true`
* `areAnagrams("A gentleman", "Elegant man")` → `true`
* `areAnagrams("Hello", "World")` → `false`
* `areAnagrams("apple", "banana")` → `false`
* `areAnagrams("cat", "dog")` → `false`

## Key Learning

The main lesson from this challenge is:

> **Order does not matter in an anagram, but character frequency does.**

For example:

```text
"listen"
"silent"
```

The order is different:

```text
l i s t e n
s i l e n t
```

But the frequency of every character is identical.

Therefore:

```js
true
```

### Core Concept

```text
Same characters
+
Same frequency
+
Order doesn't matter
=
Anagram
```

## Complexity

### Sorting Approach

```text
Time:  O(n log n)
Space: O(n)
```

### Frequency Map Approach

```text
Time:  O(n)
Space: O(n)
```

The frequency approach is generally more efficient because it avoids sorting the characters.

## What I Learned

This challenge teaches how to transform a problem into a **frequency-counting problem**.

Instead of comparing strings character by character in their original order, we can ask:

```text
"What characters are present?"
"How many times does each character appear?"
```

That way of thinking is useful for many other problems involving strings and arrays.
