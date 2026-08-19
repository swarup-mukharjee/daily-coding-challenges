🧩 Challenge — Sum of Squares
❓ Question

Given a positive integer n up to 1,000, return the sum of all integers squared from 1 up to n.

Example

For:

n = 5

We calculate:

1² + 2² + 3² + 4² + 5²

Which is:

1 + 4 + 9 + 16 + 25 = 55

Therefore:

sumOfSquares(5) → 55
🧪 Test Cases
Input	Expected Output
5	55
10	385
25	5525
500	41791750
1000	333833500
🧠 What I Learned
1. Functions

A function allows us to create reusable logic.

function sumOfSquares(n) {
  // logic
}

The n is the input provided to the function.

2. Variables

We need a variable to store the running total:

let sum = 0;

Initially, the sum is 0.

3. Loops

We need to go from 1 to n.

for (let i = 1; i <= n; i++) {
  
}

For n = 5, the loop runs:

i = 1
i = 2
i = 3
i = 4
i = 5
4. Squaring a Number

A number squared means multiplying it by itself.

i * i

For example:

3 * 3 = 9
5. Accumulating the Result

We add every square to sum:

sum = sum + (i * i);

This can also be written as:

sum += i * i;
🔍 Step-by-Step

For sumOfSquares(5):

sum = 0


i = 1
sum = 0 + 1²
sum = 1


i = 2
sum = 1 + 2²
sum = 5


i = 3
sum = 5 + 3²
sum = 14


i = 4
sum = 14 + 4²
sum = 30


i = 5
sum = 30 + 5²
sum = 55

Finally:

return sum;

returns:

55
💻 Solution
function sumOfSquares(n) {
  let sum = 0;


  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }


  return sum;
}
⏱️ Complexity
Time Complexity
O(n)

The loop runs n times.

Space Complexity
O(1)

We only use a few variables regardless of the input size.

🚀 Future Improvement

There is also a mathematical formula for calculating the sum of squares:

n(n + 1)(2n + 1) / 6

This can calculate the result without looping through every number.

For example:

n = 5


5 × 6 × 11
────────── = 55
    6

This gives an O(1) time solution.