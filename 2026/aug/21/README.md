# Mile Pace

Given a number of miles ran and the total time it took to run those miles in `"MM:SS"` format, return the **average time per mile** in `"MM:SS"` format.

Add leading zeros when needed.

## Problem

Implement:

```js
milePace(miles, time)
```

### Examples

```js
milePace(3, "24:00")
// "08:00"

milePace(1, "06:45")
// "06:45"

milePace(2, "07:00")
// "03:30"

milePace(26.2, "120:35")
// "04:36"
```

## Approach

1. Split the `"MM:SS"` time into minutes and seconds.
2. Convert the total running time into seconds.
3. Divide the total seconds by the number of miles.
4. Round the average time to the nearest second.
5. Convert the result back into minutes and seconds.
6. Add leading zeros using `padStart()`.

## Solution

```js
function milePace(miles, time) {
  const [minutes, seconds] = time.split(":").map(Number);

  const totalSeconds = minutes * 60 + seconds;
  const averageSeconds = Math.round(totalSeconds / miles);

  const averageMinutes = Math.floor(averageSeconds / 60);
  const remainingSeconds = averageSeconds % 60;

  return `${String(averageMinutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
}
```

## Tests

```js
console.log(milePace(3, "24:00"));     // "08:00"
console.log(milePace(1, "06:45"));     // "06:45"
console.log(milePace(2, "07:00"));     // "03:30"
console.log(milePace(26.2, "120:35")); // "04:36"
```

## Complexity

* **Time:** `O(1)`
* **Space:** `O(1)`

