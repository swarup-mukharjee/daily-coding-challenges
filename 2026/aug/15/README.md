# Jbelmud Text

## Problem

Given a string containing multiple lowercase words, create a **jumbled version** of the string.

For every word:

1. Keep the **first letter** in its original position.
2. Keep the **last letter** in its original position.
3. Take all letters **between the first and last letters**.
4. Sort those middle letters **alphabetically**.
5. Put everything back together.
6. Keep the spaces between words unchanged.

The input contains only lowercase letters and spaces, with no punctuation.

---

## Example

```js
jbelmu("hello world")
```

### Word 1: `hello`

The first and last letters stay fixed:

```text
h e l l o
↑       ↑
first   last
```

The middle letters are:

```text
e l l
```

They are already alphabetically sorted:

```text
e l l
```

So:

```text
hello → hello
```

### Word 2: `world`

```text
w o r l d
↑       ↑
first   last
```

Middle letters:

```text
o r l
```

Sort them:

```text
l o r
```

Therefore:

```text
world → wl or d
      → wlord
```

Final result:

```text
"hello wlord"
```

---

## Important Rule

Only the **middle characters** are sorted.

For a word:

```text
F + MIDDLE + L
```

we transform it into:

```text
F + SORTED(MIDDLE) + L
```

For example:

```text
quick
```

Break it down:

```text
q | u i c | k
```

Sort the middle:

```text
c i q
```

Result:

```text
qciqk
```

---

## Another Example

Consider:

```text
jumbled
```

Break it into:

```text
j | u m b l e | d
```

Middle characters:

```text
u m b l e
```

Alphabetically:

```text
b e l m u
```

Therefore:

```text
jumbled → jbelmud
```

So:

```js
jbelmu("i love jumbled text")
```

returns:

```text
"i love jbelmud text"
```

---

## Mathematical / Logical Understanding

The main idea is to divide every word into three parts:

```text
[first] [middle] [last]
```

Then:

```text
result = first + sort(middle) + last
```

For example:

```text
favorite
```

becomes:

```text
f | avorit | e
```

Sort the middle characters:

```text
afiorv
```

Then rebuild:

```text
f + afiorv + e
```

Result:

```text
fafi orve
```

The important programming idea is **isolating part of a string before modifying it**.

---

## Edge Cases

### One-letter word

```text
i
```

There is no middle section.

So:

```text
i → i
```

### Two-letter word

```text
to
```

There is also no middle section.

So:

```text
to → to
```

### Three-letter word

```text
cat
```

There is only one middle character:

```text
c | a | t
```

Sorting one character doesn't change anything:

```text
cat → cat
```

---

## JavaScript Concepts to Learn

This problem helps practice:

* `split()`
* `join()`
* `map()`
* `sort()`
* `slice()`
* String indexing
* Array manipulation
* Working with individual words
* Handling edge cases

A useful pattern is:

```js
const words = str.split(" ");
```

This converts:

```text
"hello world"
```

into:

```js
["hello", "world"]
```

Then each word can be transformed separately.

---

## Tests

```js
jbelmu("hello world")
// "hello wlord"
```

```js
jbelmu("i love jumbled text")
// "i love jbelmud text"
```

```js
jbelmu("freecodecamp is my favorite place to learn to code")
// "faccdeeemorp is my faiortve pacle to laern to cdoe"
```

```js
jbelmu("the quick brown fox jumps over the lazy dog")
// "the qciuk borwn fox jmpus oevr the lazy dog"
```

---

## Key Learning

The important part of this challenge is **not simply sorting the whole word**.

You must preserve:

```text
FIRST LETTER + LAST LETTER
```

and only sort:

```text
MIDDLE LETTERS
```

Think of every word as:

```text
┌─────┬──────────────┬─────┐
│First│    Middle    │Last │
└─────┴──────────────┴─────┘
              ↓
        Sort alphabetically
```

### Core Formula

```text
Jumbled Word =
First Letter
+
Alphabetically Sorted Middle
+
Last Letter
```

This is a good exercise for understanding **strings → arrays → manipulation → strings**.
