function evaluate(numbers, operators) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        const operator = operators[(i - 1) % operators.length];
        if (operator === '+') {
            result += numbers[i];
        } else if (operator === '-') {
            result -= numbers[i];
        } else if (operator === '*') {
            result *= numbers[i];
        } else if (operator === '/') {
            result /= numbers[i];
        } else if (operator === '%') {
            result %= numbers[i];
        }
    }
    return result;
}

//test or call
console.log(evaluate([10, 5, 2], ['+', '*'])); // Output: 30