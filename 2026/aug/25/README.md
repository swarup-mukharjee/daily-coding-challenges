# camelCase

## Problem

Given a string, convert it into **camelCase**.

The input string may contain words separated by:

* Spaces (` `)
* Dashes (`-`)
* Underscores (`_`)

There may also be **multiple separators in a row**.

### Rules

1. The first word should be completely lowercase.
2. Every following word should:

   * Start with an uppercase letter.
   * Have the remaining letters lowercase.
3. Remove all spaces, dashes, and underscores.
4. Treat multiple separators as a single word break.

---

## Examples

### Example 1

```js
toCamelCase("hello world")
```

Input:

```text
hello world
```

Words:

```text
hello
world
```

First word:

```text
hello
```

Second word:

```text
World
```

Result:

```text
helloWorld
```

---

### Example 2

```js
toCamelCase("HELLO WORLD")
```

Everything should be normalized to lowercase first:

```text
HELLO → hello
WORLD → world
```

Then camelCase:

```text
helloWorld
```

Result:

```text
"helloWorld"
```

---

### Example 3

```js
toCamelCase("secret agent-X")
```

The `-` is a separator.

```text
secret
agent
X
```

Convert:

```text
secret
Agent
X
```

Result:

```text
"secretAgentX"
```

---

### Example 4

```js
toCamelCase("FREE cODE cAMP")
```

Normalize each word:

```text
FREE → free
cODE → code
cAMP → camp
```

Then combine:

```text
free + Code + Camp
```

Result:

```text
"freeCodeCamp"
```

---

## The Important Part: Multiple Separators

Consider:

```js
toCamelCase("hello---world")
```

There are three `-` characters.

But they should be treated as **one word break**:

```text
hello --- world
      ↑
  word break
```

So the words are simply:

```text
hello
world
```

Result:

```text
helloWorld
```

The same applies to combinations:

```text
hello_-_world
```

This should also become:

```text
helloWorld
```

---

# How to Think About the Solution

Don't try to convert the entire string directly.

Break the problem into **3 steps**.

```text
INPUT
  ↓
1. Split into words
  ↓
2. Format each word
  ↓
3. Join the words
  ↓
OUTPUT
```

---

## Step 1: Split the String

We need to split whenever we find:

```text
space
-
_
```

A regular expression can represent these separators:

```js
/[ _-]+/
```

The `+` is important.

It means:

> One or more separators.

For example:

```text
hello---world
```

The `---` is treated as one separator.

Likewise:

```text
hello _-_ world
```

is treated as a word break.

Example:

```js
const words = str.split(/[ _-]+/);
```

For:

```js
"hello---world"
```

we get:

```js
["hello", "world"]
```

---

# Step 2: Convert the Words

Suppose we have:

```js
["HELLO", "WORLD", "TEST"]
```

We need:

```text
hello
World
Test
```

### First word

The first word should be completely lowercase:

```js
words[0].toLowerCase()
```

Result:

```text
hello
```

### Remaining words

For every other word:

```text
WORLD
```

we need:

```text
World
```

The logic is:

```text
First character → uppercase
Remaining characters → lowercase
```

For example:

```text
WORLD

W + ORLD
↓     ↓
W   orld

World
```

In JavaScript:

```js
word[0].toUpperCase() + word.slice(1).toLowerCase()
```

---

# Step 3: Join Everything

After formatting:

```js
["hello", "World", "Test"]
```

we need:

```text
helloWorldTest
```

Use:

```js
.join("")
```

The empty string means:

> Join without putting anything between the words.

---

# Complete Solution

```js
function toCamelCase(str) {
  const words = str.split(/[ _-]+/);

  const firstWord = words[0].toLowerCase();

  const remainingWords = words
    .slice(1)
    .map(word => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });

  return [firstWord, ...remainingWords].join("");
}
```

---

# Let's Understand the Code

## 1. Split

```js
const words = str.split(/[ _-]+/);
```

Example:

```text
"FREE cODE cAMP"
```

becomes:

```js
["FREE", "cODE", "cAMP"]
```

---

## 2. First Word

```js
const firstWord = words[0].toLowerCase();
```

```text
FREE
 ↓
free
```

---

## 3. Get Remaining Words

```js
words.slice(1)
```

If:

```js
words = ["FREE", "cODE", "cAMP"]
```

then:

```js
words.slice(1)
```

gives:

```js
["cODE", "cAMP"]
```

We don't want to apply the uppercase-first-letter rule to the first word, so we start from index `1`.

---

## 4. Format Each Remaining Word

```js
.map(word => {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
});
```

For:

```text
cODE
```

First character:

```js
word[0]
```

gives:

```text
c
```

Convert to uppercase:

```text
C
```

Remaining characters:

```js
word.slice(1)
```

gives:

```text
ODE
```

Convert them to lowercase:

```text
ode
```

Combine:

```text
C + ode
```

Result:

```text
Code
```

---

# 5. Join the Words

Suppose we now have:

```js
["free", "Code", "Camp"]
```

This:

```js
.join("")
```

produces:

```text
freeCodeCamp
```

---

# Full Flow

For:

```js
toCamelCase("FREE cODE cAMP")
```

### Input

```text
FREE cODE cAMP
```

### Split

```js
["FREE", "cODE", "cAMP"]
```

### First word

```text
FREE → free
```

### Other words

```text
cODE → Code
cAMP → Camp
```

### Join

```text
free + Code + Camp
```

### Final result

```text
freeCodeCamp
```

---

# Test Cases

```js
console.log(toCamelCase("hello world"));
// "helloWorld"

console.log(toCamelCase("HELLO WORLD"));
// "helloWorld"

console.log(toCamelCase("secret agent-X"));
// "secretAgentX"

console.log(toCamelCase("FREE cODE cAMP"));
// "freeCodeCamp"

console.log(
  toCamelCase(
    "ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk"
  )
);
// "yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk"
```

---

# Key JavaScript Methods to Learn

This challenge is mainly testing these methods:

| Method          | Purpose                           |
| --------------- | --------------------------------- |
| `split()`       | Break a string into words         |
| `toLowerCase()` | Convert text to lowercase         |
| `toUpperCase()` | Convert text to uppercase         |
| `slice()`       | Get part of a string/array        |
| `map()`         | Transform every item in an array  |
| `join()`        | Combine array items into a string |

The most important concept is:

```text
split → transform → join
```

Once you understand this pattern, many string-manipulation challenges become much easier.
