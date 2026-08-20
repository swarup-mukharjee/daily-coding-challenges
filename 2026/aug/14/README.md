# S P A C E J A M

Given a string, remove all spaces, insert **two spaces between every character**, convert all alphabetical letters to uppercase, and return the result.

Non-alphabetical characters should remain unchanged, except for spaces.

## Problem

For the given string:

1. Remove all existing spaces.
2. Convert alphabetical characters to uppercase.
3. Add two spaces between every character.
4. Return the resulting string.

### Example

Input:

```text
freeCodeCamp
```

Output:

```text
F  R  E  E  C  O  D  E  C  A  M  P
```

Another example:

```text
Hello World?!
```

Output:

```text
H  E  L  L  O  W  O  R  L  D  ?  !
```

Notice that `?` and `!` remain unchanged.

## Tests

```text
spaceJam("freeCodeCamp")
→ "F  R  E  E  C  O  D  E  C  A  M  P"

spaceJam("   free   Code   Camp   ")
→ "F  R  E  E  C  O  D  E  C  A  M  P"

spaceJam("Hello World?!")
→ "H  E  L  L  O  W  O  R  L  D  ?  !"

spaceJam("C@t$ & D0g$")
→ "C  @  T  $  &  D  0  G  $"

spaceJam("allyourbase")
→ "A  L  L  Y  O  U  R  B  A  S  E"
```

## Approach

The problem can be broken into three simple operations:

```text
1. Remove spaces
2. Convert letters to uppercase
3. Separate every character with two spaces
```

In JavaScript, this can be achieved using:

* `replace()` to remove spaces
* `toUpperCase()` to convert letters
* `split()` and `join()` to add two spaces between characters

### Example Solution

```js
function spaceJam(str) {
  return str
    .replaceAll(" ", "")
    .toUpperCase()
    .split("")
    .join("  ");
}
```

## Example

```js
spaceJam("freeCodeCamp");
```

Returns:

```text
F  R  E  E  C  O  D  E  C  A  M  P
```

## Key Point

Characters that are not alphabetical should **not** be removed or changed.

For example:

```text
C@t$ & D0g$
```

becomes:

```text
C  @  T  $  &  D  0  G  $
```

The `@`, `$`, `&`, and `0` remain unchanged.

## Complexity

For a string of length `n`:

* **Time:** `O(n)`
* **Space:** `O(n)`

##
"Hello"
   ↓
"HELLO"                  toUpperCase()
   ↓
["H","E","L","L","O"]   split("")
   ↓
"H  E  L  L  O"         join("  ")