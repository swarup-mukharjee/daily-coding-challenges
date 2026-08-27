
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

//test or call

console.log(decode("(f(b(dc)e)a)"));
// "abcdef"

console.log(decode("((is?)(a(t d)h)e(n y( uo)r)aC)"));
// "Can you read this?"

console.log(decode("f(Ce(re))o((e(aC)m)d)p"));
// "freeCodeCamp"