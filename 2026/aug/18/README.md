Factorializer

A coding challenge focused on understanding functions, loops, multiplication, and edge cases in JavaScript.

❓ Question

Given an integer from 0 to 20, return the factorial of that number.

The factorial of a number is the product of all positive integers from 1 up to that number.

Example

For 5:

5! = 1 × 2 × 3 × 4 × 5
   = 120

Therefore:

factorial(5) → 120
Special Case: Factorial of 0

The factorial of zero is defined as:

0! = 1
🧪 Test Cases
Input	Expected Output
0	1
5	120
20	2432902008176640000
🧠 What I Learned
1. Factorial

Factorial is represented using !.

For example:

3! = 1 × 2 × 3 = 6


4! = 1 × 2 × 3 × 4 = 24


5! = 1 × 2 × 3 × 4 × 5 = 120

The general formula is:

n! = 1 × 2 × 3 × ... × n
2. Starting Value

When multiplying numbers together, we should start with:

let result = 1;

We cannot start with 0, because:

0 × anything = 0

That would make the final result zero.

3. Using a Loop

We can loop from 1 to n:

for (let i = 1; i <= n; i++) {
    result *= i;
}

For factorial(5):

result = 1


i = 1 → result = 1 × 1 = 1
i = 2 → result = 1 × 2 = 2
i = 3 → result = 2 × 3 = 6
i = 4 → result = 6 × 4 = 24
i = 5 → result = 24 × 5 = 120

Finally:

120
⚠️ Important: 0!

If n = 0, the loop doesn't run:

for (let i = 1; i <= 0; i++) {
    // never runs
}

But because we initialized:

let result = 1;

the function correctly returns:

1

So we don't need a separate if condition.

💻 Solution
function factorial(n) {
  let result = 1;


  for (let i = 1; i <= n; i++) {
    result *= i;
  }


  return result;
}
🔍 Example
factorial(5);

Output:

120

And:

factorial(0);

Output:

1
⏱️ Complexity
Time Complexity
O(n)

The loop runs n times.

Space Complexity
O(1)

Only one additional variable is used.

🚀 Key Takeaways
Factorial means multiplying all numbers from 1 to n.
0! is 1.
Start the result with 1, not 0.
A for loop can calculate the factorial.
result *= i is shorthand for result = result * i.
The solution uses O(n) time and O(1) space.