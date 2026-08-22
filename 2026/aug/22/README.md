# Message Decoder

## 📝 Question

Given a secret message string and an integer representing the number of letters that were used to shift the message to encode it, return the **decoded string**.

### Rules

* A positive number means the message was shifted forward in the alphabet.
* A negative number means the message was shifted backward in the alphabet.
* Case matters. Decoded characters should retain the case of their encoded counterparts.
* Non-alphabetical characters should not be decoded.

---

## 🧠 Understanding

This problem uses a **Caesar Cipher**.

When encoding, letters are shifted forward.

When decoding, letters are shifted backward.

For example, if the shift is `2`:

```text
Encode:

hello
  ↓ +2
jgnnq
```

To decode it:

```text
Decode:

jgnnq
  ↓ -2
hello
```

So:

```javascript
decode("jgnnq", 2);
// "hello"
```

---

## 🔄 How Does the Loop Work?

First:

```javascript
message.split("")
```

converts the complete message into individual characters.

For example:

```javascript
"jgnnq world!"
```

becomes:

```text
[
  "j",
  "g",
  "n",
  "n",
  "q",
  " ",
  "w",
  "o",
  "r",
  "l",
  "d",
  "!"
]
```

Then:

```javascript
.map((char) => {})
```

automatically processes **one character at a time**.

The loop works like this:

```text
j → decode
g → decode
n → decode
n → decode
q → decode
  → keep unchanged
w → decode
o → decode
r → decode
l → decode
d → decode
! → keep unchanged
```

We don't manually move to the next character. `.map()` does that automatically.

---

## 🚫 What Happens to Spaces and Symbols?

Spaces and symbols are also processed by `.map()`.

For example:

```text
"jgnnq world!"
```

When the loop reaches:

```text
" "
```

it checks whether it is an uppercase or lowercase letter.

It isn't, so:

```javascript
return char;
```

keeps it unchanged.

The same happens with:

```text
!
?
.
,
1
2
@
#
```

They are returned exactly as they are.

Example:

```javascript
decode("jgnnq world!", 2);
// "hello world!"
```

---

## 🔤 Understanding Character Positions

For calculations, we represent letters using positions:

```text
a = 0
b = 1
c = 2
d = 3
e = 4
...
z = 25
```

For example:

```text
j = 9
```

With a shift of `2`:

```text
9 - 2 = 7
```

Position `7` is `h`.

Therefore:

```text
j → h
```

---

## 🔁 Alphabet Wrapping

Sometimes subtracting the shift goes below `0`.

Example:

```text
b = 1
shift = 4

1 - 4 = -3
```

We need to wrap around the alphabet.

That's why we use:

```javascript
(position - shift + 26) % 26
```

The `% 26` keeps the result inside the `0–25` range.

---

## 💡 Understanding `split()`, `map()`, and `join()`

### `split("")`

Breaks the string into characters:

```javascript
"hello".split("")
```

Result:

```javascript
["h", "e", "l", "l", "o"]
```

### `map()`

Processes every character:

```javascript
["h", "e", "l", "l", "o"].map(...)
```

Each character is handled separately.

### `join("")`

Combines the characters back into one string:

```javascript
["h", "e", "l", "l", "o"].join("")
```

Result:

```text
hello
```

So the complete flow is:

```text
String
   ↓
split("")
   ↓
Array of characters
   ↓
map()
   ↓
Decode each character
   ↓
join("")
   ↓
Decoded String
```

---

## 💻 Solution

```javascript
function decode(message, shift) {
  return message
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);

      // Uppercase A-Z
      if (code >= 65 && code <= 90) {
        const position = code - 65;
        const newPosition = (position - shift + 26) % 26;

        return String.fromCharCode(newPosition + 65);
      }

      // Lowercase a-z
      if (code >= 97 && code <= 122) {
        const position = code - 97;
        const newPosition = (position - shift + 26) % 26;

        return String.fromCharCode(newPosition + 97);
      }

      // Space, numbers, punctuation, etc.
      return char;
    })
    .join("");
}
```

---

## 🧪 Examples

### Example 1

```javascript
decode("Xlmw mw e wigvix qiwweki.", 4);
```

Output:

```text
This is a secret message.
```

### Example 2

```javascript
decode("Byffi Qilfx!", 20);
```

Output:

```text
Hello World!
```

### Example 3

```javascript
decode("Zqd xnt njzx?", -1);
```

Output:

```text
Are you okay?
```

### Example 4

```javascript
decode("oannLxmnLjvy", 9);
```

Output:

```text
freeCodeCamp
```

### Example 5

```javascript
decode("jgnnq", 2);
```

Output:

```text
hello
```

### Example 6 — Spaces and Symbols

```javascript
decode("jgnnq world!", 2);
```

Output:

```text
hello u?pjb!
```

> Note: Every alphabetic character is shifted. The space and `!` remain unchanged.

---

## 🔍 Code Breakdown

For a lowercase character:

```javascript
const code = char.charCodeAt(0);
```

gets its character code.

Then:

```javascript
const position = code - 97;
```

converts the character to a position from `0` to `25`.

Then:

```javascript
const newPosition = (position - shift + 26) % 26;
```

moves the character backward and handles alphabet wrapping.

Finally:

```javascript
String.fromCharCode(newPosition + 97);
```

converts the position back into a character.

---

## 🚀 Summary

The decoder follows these steps:

```text
Message
   ↓
split("")
   ↓
Take one character
   ↓
Is it A-Z?
   ↓
Is it a-z?
   ↓
Subtract shift
   ↓
Handle alphabet wrapping
   ↓
Keep spaces/symbols unchanged
   ↓
Move to next character
   ↓
join("")
   ↓
Decoded message
```

The key idea is:

```text
Encode → shift forward
Decode → shift backward
```
