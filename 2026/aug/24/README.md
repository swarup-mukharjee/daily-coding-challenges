# Character Battle

## Problem

Given two strings representing your army and an opposing army, each character from your army battles the character at the same position from the opposing army.

Each character has a strength based on the following rules:

* Lowercase characters `a-z` have strengths `1-26`.
* Uppercase characters `A-Z` have strengths `27-52`.
* Digits `0-9` have their face value as strength.
* All other characters have a strength of `0`.
* Each character can only participate in one battle.

For each battle, the character with the greater strength wins.

The army with more victories wins the war.

### Return

* `"Opponent retreated"` — if your army has more characters than the opposing army.
* `"We retreated"` — if the opposing army has more characters than yours.
* `"We won"` — if your army wins more battles.
* `"We lost"` — if the opposing army wins more battles.
* `"It was a tie"` — if both armies win the same number of battles.

---

## Understanding

First, compare the lengths of the two armies.

```text
If your army is longer:
    "Opponent retreated"

If opponent's army is longer:
    "We retreated"
```

If both armies have the same number of characters, compare characters at the same positions.

For example:

```text
We:       a b c
Opponent: d e f
          ↓ ↓ ↓
        Battle each pair
```

Each character is converted into its strength before comparing.

### Character Strength

| Character | Strength |
| --------- | -------: |
| `a`       |        1 |
| `b`       |        2 |
| `z`       |       26 |
| `A`       |       27 |
| `B`       |       28 |
| `Z`       |       52 |
| `0`       |        0 |
| `5`       |        5 |
| `9`       |        9 |
| `@`       |        0 |

After all battles:

* More victories for your army → `"We won"`
* More victories for opponent → `"We lost"`
* Same victories → `"It was a tie"`

---

## Examples

### Example 1

```text
battle("Hello", "World")
```

Both armies have 5 characters, so every character battles.

```text
H vs W
e vs o
l vs r
l vs l
o vs d
```

The opponent wins more battles.

```text
"We lost"
```

### Example 2

```text
battle("pizza", "salad")
```

Both armies have 5 characters.

After comparing each corresponding character, your army wins more battles.

```text
"We won"
```

### Example 3

```text
battle("C@T5", "D0G$")
```

Character strengths include:

```text
C = 29
@ = 0
T = 46
5 = 5

D = 30
0 = 0
G = 33
$ = 0
```

Your army wins more battles.

```text
"We won"
```

### Example 4

```text
battle("kn!ght", "orc")
```

Your army has more characters than the opposing army.

Therefore:

```text
"Opponent retreated"
```

### Example 5

```text
battle("PC", "Mac")
```

The opposing army has more characters.

Therefore:

```text
"We retreated"
```

---

## Implementation

```javascript
function battle(army, opponent) {
  if (army.length > opponent.length) {
    return "Opponent retreated";
  }

  if (army.length < opponent.length) {
    return "We retreated";
  }

  let ourWins = 0;
  let opponentWins = 0;

  function strength(char) {
    if (char >= "a" && char <= "z") {
      return char.charCodeAt(0) - 96;
    }

    if (char >= "A" && char <= "Z") {
      return char.charCodeAt(0) - 38;
    }

    if (char >= "0" && char <= "9") {
      return Number(char);
    }

    return 0;
  }

  for (let i = 0; i < army.length; i++) {
    const ourStrength = strength(army[i]);
    const opponentStrength = strength(opponent[i]);

    if (ourStrength > opponentStrength) {
      ourWins++;
    } else if (ourStrength < opponentStrength) {
      opponentWins++;
    }
  }

  if (ourWins > opponentWins) {
    return "We won";
  }

  if (ourWins < opponentWins) {
    return "We lost";
  }

  return "It was a tie";
}
```

## Code Explanation

### 1. Check army lengths

```javascript
if (army.length > opponent.length) {
  return "Opponent retreated";
}
```

If our army contains more characters, the opponent retreats immediately.

```javascript
if (army.length < opponent.length) {
  return "We retreated";
}
```

If the opponent has more characters, our army retreats.

### 2. Create victory counters

```javascript
let ourWins = 0;
let opponentWins = 0;
```

These counters keep track of how many battles each army wins.

### 3. Convert characters into strength

```javascript
function strength(char) {
```

The helper function determines the strength of a character.

For lowercase letters:

```javascript
char.charCodeAt(0) - 96
```

So:

```text
a → 97 - 96 = 1
b → 98 - 96 = 2
z → 122 - 96 = 26
```

For uppercase letters:

```javascript
char.charCodeAt(0) - 38
```

So:

```text
A → 65 - 38 = 27
B → 66 - 38 = 28
Z → 90 - 38 = 52
```

For digits:

```javascript
Number(char)
```

So:

```text
0 → 0
5 → 5
9 → 9
```

Everything else gets:

```javascript
return 0;
```

### 4. Battle corresponding characters

```javascript
for (let i = 0; i < army.length; i++) {
```

Each character fights the character at the same position.

```javascript
const ourStrength = strength(army[i]);
const opponentStrength = strength(opponent[i]);
```

Then their strengths are compared.

### 5. Determine the winner

```javascript
if (ourStrength > opponentStrength) {
  ourWins++;
} else if (ourStrength < opponentStrength) {
  opponentWins++;
}
```

If both strengths are equal, nobody gets a victory.

### 6. Determine the war result

```javascript
if (ourWins > opponentWins) {
  return "We won";
}
```

```javascript
if (ourWins < opponentWins) {
  return "We lost";
}
```

Otherwise:

```javascript
return "It was a tie";
```

---

## Tests

```javascript
console.log(battle("Hello", "World"));
// "We lost"

console.log(battle("pizza", "salad"));
// "We won"

console.log(battle("C@T5", "D0G$"));
// "We won"

console.log(battle("kn!ght", "orc"));
// "Opponent retreated"

console.log(battle("PC", "Mac"));
// "We retreated"

console.log(battle("Wizards", "Dragons"));
// "It was a tie"

console.log(battle("Mr. Smith", "Dr. Jones"));
// "It was a tie"
```

## Complexity

Let `n` be the length of the armies.

* **Time:** `O(n)` — each character is processed once.
* **Space:** `O(1)` — only a few counters and variables are used.
