# Reverse Parenthesis

## Problem

Given a string that contains properly nested parentheses, return the decoded version of the string using the following rules:

* All characters inside each pair of parentheses should be reversed.
* Parentheses should be removed from the final result.
* If parentheses are nested, the **innermost pair should be reversed first**.
* The result of the inner pair should then become part of the outer pair.
* Assume all parentheses are evenly balanced and correctly nested.

The main challenge is understanding how **nested parentheses are processed from the inside out**.

---

# Rules

### Rule 1: Reverse Characters Inside Parentheses

Whenever we find a pair of parentheses:

```text
(abc)
```

the characters inside them should be reversed:

```text
cba
```

So:

```text
(abc)
```

becomes:

```text
cba
```

The parentheses themselves are removed.

---

### Rule 2: Remove Parentheses

The final result must not contain:

```text
(
)
```

For example:

```text
(a(bc))
```

should eventually become a normal string without parentheses.

---

### Rule 3: Nested Parentheses

If parentheses are nested, we cannot simply reverse everything at once.

The **innermost parentheses must be processed first**.

For example:

```text
(a(bc)d)
```

First process:

```text
(bc)
```

which becomes:

```text
cb
```

The string now becomes:

```text
(acbd)
```

Then reverse the outer parentheses:

```text
dbca
```

Result:

```text
dbca
```

---

# Example 1

```js
decode("(f(b(dc)e)a)")
```

Let's solve it step by step.

### Input

```text
(f(b(dc)e)a)
```

There are nested parentheses.

The innermost pair is:

```text
(dc)
```

Reverse it:

```text
(dc)
 ↓
cd
```

The string becomes:

```text
(f(bc e)a)
```

or:

```text
(f(bc e)a)
```

Removing the visual spacing:

```text
(f(bc e)a)
```

The important structure is:

```text
(f(bc e)a)
```

Now process the next inner pair:

```text
(bc e)
```

Reverse its contents:

```text
ecb
```

The outer expression becomes:

```text
(fecba)
```

Finally, reverse the outer parentheses:

```text
(fecba)
 ↓
abcdef
```

Result:

```text
"abcdef"
```

---

# Example 2

```js
decode("((is?)(a(t d)h)e(n y( uo)r)aC)")
```

This example contains several levels of nested parentheses.

The important idea is:

> Always process the deepest parentheses first.

Let's identify the innermost groups.

```text
(t d)
```

Reverse:

```text
d t
```

So:

```text
(a(t d)h)
```

becomes:

```text
(a d t h)
```

which will later be reversed by its parent.

Another innermost group is:

```text
( uo)
```

Reverse:

```text
ou
```

So:

```text
(n y( uo)r)
```

becomes:

```text
(n y our)
```

After processing all nested groups and then reversing their parent groups, the complete string becomes:

```text
Can you read this?
```

Result:

```text
"Can you read this?"
```

---

# Example 3

```js
decode("f(Ce(re))o((e(aC)m)d)p")
```

This example demonstrates why the **inside-out approach** is important.

Start with:

```text
f(Ce(re))o((e(aC)m)d)p
```

The innermost groups are:

```text
(re)
```

and:

```text
(aC)
```

Reverse them:

```text
(re)
 ↓
er
```

and:

```text
(aC)
 ↓
Ca
```

The string becomes:

```text
f(Ceer)o((eCam)d)p
```

Now process the next nested group:

```text
(Ceer)
```

Reverse:

```text
reeC
```

And process:

```text
(eCam)
```

Reverse:

```text
maCe
```

Continue processing the remaining parenthesis groups from the inside out.

The final result is:

```text
freeCodeCamp
```

Result:

```text
"freeCodeCamp"
```

---

# The Important Part: Nested Parentheses

The biggest challenge in this problem is that parentheses can be nested.

Consider:

```text
(a(bc)d)
```

There are two pairs:

```text
(a(bc)d)
   ↑
 inner
```

and:

```text
(a(bc)d)
 ↑       ↑
 outer
```

We must process them in this order:

```text
1. Inner
2. Outer
```

First:

```text
(bc)
```

becomes:

```text
cb
```

Now:

```text
(a(bc)d)
```

becomes:

```text
(acbd)
```

Then reverse the outer contents:

```text
(acbd)
 ↓
dbca
```

Therefore:

```text
(a(bc)d)
```

becomes:

```text
dbca
```

---

# How to Think About the Solution

Don't try to reverse the entire string.

Instead, think about the problem as:

```text
INPUT
  ↓
Find parentheses
  ↓
Find the innermost pair
  ↓
Reverse its contents
  ↓
Remove its parentheses
  ↓
Repeat
  ↓
No parentheses remaining
  ↓
OUTPUT
```

The key idea is:

> **The last opening parenthesis encountered is the first one that should be closed and processed.**

This is exactly the behavior of a **stack**.

---

# Why a Stack Works

Consider:

```text
(a(bc)d)
```

Read the string from left to right.

When we find:

```text
(
```

we remember its position.

For:

```text
(a(bc)d)
```

the opening parentheses appear like this:

```text
(
    (
```

The second `(` is the innermost one.

When we encounter the first `)`:

```text
(a(bc)d)
     ↑
```

it belongs to the most recently opened `(`.

That is:

```text
(a(bc)d)
   ↑
   matching pair
```

This is the **Last In, First Out (LIFO)** behavior of a stack.

```text
Last opened
     ↓
First processed
```

---

# Stack Visualization

For:

```text
(a(bc)d)
```

when we encounter the first `(`:

```text
Stack:

[
  position of first (
]
```

Then the second `(`:

```text
Stack:

[
  position of first (
  position of second (
]
```

Now we encounter `)`.

We remove the last opening parenthesis:

```text
Stack:

[
  position of first (
]
```

So the inner parentheses are processed first.

This is exactly what we need.

---

# Step 1: Create a Stack

We need an array to act as our stack.

```js
const stack = [];
```

Whenever we find an opening parenthesis:

```js
(
```

we store information about it.

---

# Step 2: Find Opening Parentheses

When the current character is:

```js
(
```

we push its position onto the stack.

Conceptually:

```js
stack.push(index);
```

For example:

```text
(a(bc)d)
```

After reading the first `(`:

```text
stack = [0]
```

After reading the second `(`:

```text
stack = [0, 2]
```

---

# Step 3: Find a Closing Parenthesis

When we find:

```text
)
```

we know that the most recently opened parenthesis must be closed.

So:

```js
const start = stack.pop();
```

For:

```text
(a(bc)d)
```

the stack contains:

```text
[0, 2]
```

When we encounter `)`:

```text
pop()
```

returns:

```text
2
```

Therefore, we know the inner section starts at index `2`.

---

# Step 4: Reverse the Contents

Once we know the opening parenthesis and closing parenthesis, we need to reverse everything between them.

For example:

```text
(bc)
```

The content is:

```text
bc
```

Reverse it:

```text
cb
```

Then remove:

```text
(
)
```

The result becomes:

```text
cb
```

---

# A Simpler Way to Implement It

Instead of repeatedly searching and modifying the original string, we can use a **stack of strings**.

The idea is:

```text
Normal characters
      ↓
Current string

(
 ↓
Save current string
 ↓
Start a new string

Characters inside parentheses
      ↓
Build current string

)
 ↓
Reverse current string
 ↓
Add it to previous string
```

This approach naturally handles nested parentheses.

---

# Step 1: Create Two Variables

We need:

```js
const stack = [];
let current = "";
```

`current` stores the characters we are currently processing.

`stack` stores the strings from outer parenthesis levels.

---

# Step 2: Process Every Character

Use a loop:

```js
for (const char of str) {
    // process character
}
```

This lets us inspect the string one character at a time.

---

# Step 3: When We Find `(`

When we see:

```text
(
```

we need to save the current string.

```js
stack.push(current);
```

Then start a new empty string:

```js
current = "";
```

Why?

Because everything after this `(` belongs to a new level.

---

# Step 4: When We Find a Normal Character

If the character isn't a parenthesis:

```js
current += char;
```

For:

```text
abc
```

we build:

```text
a
ab
abc
```

---

# Step 5: When We Find `)`

This is where the important operation happens.

When we find:

```text
)
```

we need to reverse the current string.

For example:

```text
abc
```

becomes:

```text
cba
```

In JavaScript:

```js
current = current.split("").reverse().join("");
```

Then we add the reversed result to the string that was saved before the `(`.

```js
current = stack.pop() + current;
```

---

# Complete Solution

```js
function decode(str) {
    const stack = [];
    let current = "";

    for (const char of str) {
        if (char === "(") {
            stack.push(current);
            current = "";
        } else if (char === ")") {
            current = current.split("").reverse().join("");
            current = stack.pop() + current;
        } else {
            current += char;
        }
    }

    return current;
}
```

---

# Let's Understand the Code

## 1. Create the Stack

```js
const stack = [];
```

The stack remembers the string that existed before entering a new pair of parentheses.

---

## 2. Create the Current String

```js
let current = "";
```

This stores the characters currently being processed.

---

## 3. Loop Through the String

```js
for (const char of str)
```

For example:

```text
(a(bc)d)
```

is processed as:

```text
(
a
(
b
c
)
d
)
```

---

# 4. Opening Parenthesis

```js
if (char === "(") {
    stack.push(current);
    current = "";
}
```

Suppose we have:

```text
abc(def)
```

When we reach:

```text
(
```

we save:

```text
abc
```

in the stack.

Then:

```text
current = ""
```

Now we can process:

```text
def
```

separately.

---

# 5. Normal Characters

```js
else {
    current += char;
}
```

If the character is:

```text
d
```

then:

```text
current = "d"
```

Next:

```text
e
```

becomes:

```text
current = "de"
```

Next:

```text
f
```

becomes:

```text
current = "def"
```

---

# 6. Closing Parenthesis

```js
else if (char === ")") {
    current = current.split("").reverse().join("");
    current = stack.pop() + current;
}
```

Suppose:

```text
current = "def"
```

First reverse it:

```text
def
 ↓
fed
```

Then retrieve the previous string:

```js
stack.pop()
```

Suppose it gives:

```text
abc
```

Combine them:

```text
abc + fed
```

Result:

```text
abcfed
```

The parentheses disappear automatically.

---

# Understanding Nested Parentheses

Consider:

```text
(a(bc)d)
```

Let's follow the algorithm.

### Start

```text
current = ""
stack = []
```

---

### First `(`

Save:

```text
stack = [""]
```

Start new level:

```text
current = ""
```

---

### Read `a`

```text
current = "a"
```

---

### Second `(`

Save:

```text
stack = ["", "a"]
```

Start new level:

```text
current = ""
```

---

### Read `b`

```text
current = "b"
```

---

### Read `c`

```text
current = "bc"
```

---

### First `)`

Reverse:

```text
bc
 ↓
cb
```

Pop the previous string:

```text
"a"
```

Combine:

```text
a + cb
```

So:

```text
current = "acb"
```

The inner parentheses have now been completely processed.

---

### Read `d`

```text
current = "acbd"
```

---

### Final `)`

Reverse:

```text
acbd
 ↓
dbca
```

Pop the outer string:

```text
""
```

Combine:

```text
"" + "dbca"
```

Final result:

```text
dbca
```

---

# Full Flow

For:

```js
decode("(a(bc)d)")
```

the processing looks like:

```text
Input
  ↓
(a(bc)d)
  ↓
Find (
  ↓
Save current string
  ↓
Process inner content
  ↓
(bc)
  ↓
Reverse
  ↓
cb
  ↓
Combine with outer content
  ↓
acbd
  ↓
Reverse outer content
  ↓
dbca
  ↓
Return result
```

---

# Why We Reverse at `)`

A common mistake is to reverse when we see:

```text
(
```

But we don't know the complete contents yet.

For example:

```text
(abcdef)
```

When we see `(`, we have only:

```text
(
```

We haven't seen:

```text
abcdef
```

yet.

Only when we reach:

```text
)
```

do we know the complete content:

```text
abcdef
```

Now we can reverse it:

```text
fedcba
```

Therefore:

> **Opening parenthesis starts a new level. Closing parenthesis finishes that level and triggers the reversal.**

---

# Test Cases

```js
console.log(
    decode("(f(b(dc)e)a)")
);

// "abcdef"
```

```js
console.log(
    decode("((is?)(a(t d)h)e(n y( uo)r)aC)")
);

// "Can you read this?"
```

```js
console.log(
    decode("f(Ce(re))o((e(aC)m)d)p")
);

// "freeCodeCamp"
```

---

# Key JavaScript Methods to Learn

| Method      | Purpose                             |
| ----------- | ----------------------------------- |
| `push()`    | Add an item to the top of a stack   |
| `pop()`     | Remove and return the last item     |
| `split()`   | Convert a string into an array      |
| `reverse()` | Reverse an array                    |
| `join()`    | Convert an array back into a string |

The most important concept in this challenge is:

```text
STACK
  ↓
Last In
  ↓
First Out
```

This is called:

```text
LIFO
```

or:

```text
Last In, First Out
```

---

# The Core Pattern

The entire problem can be remembered with this pattern:

```text
(
 ↓
SAVE CURRENT STRING
 ↓
START NEW LEVEL
 ↓
READ CHARACTERS
 ↓
)
 ↓
REVERSE CURRENT STRING
 ↓
RESTORE PREVIOUS STRING
 ↓
COMBINE
```

For nested parentheses:

```text
Outer
  ↓
Inner
  ↓
Innermost
```

we process:

```text
Innermost
    ↓
Inner
    ↓
Outer
```

So the key idea is:

> **Use a stack to process nested parentheses from the inside out, reversing the contents whenever a closing parenthesis is encountered.**
