function isBalanced(str) {
  const middle = Math.floor(str.length / 2);

  const firstHalf = str.slice(0, middle);
  const secondHalf = str.slice(str.length - middle);

  const countVowels = (text) => {
    let count = 0;

    for (const char of text) {
      if ("aeiou".includes(char.toLowerCase())) {
        count++;
      }
    }

    return count;
  };

  return countVowels(firstHalf) === countVowels(secondHalf);
}

//test or call

console.log(isBalanced("racecar")); // true
console.log(isBalanced("Lorem Ipsum")); // true
console.log(isBalanced("Kitty Ipsum")); // false
console.log(isBalanced("string")); // false
console.log(isBalanced(" ")); // true
console.log(isBalanced("abcdefghijklmnopqrstuvwxyz")); // false
console.log(isBalanced("123A#b!E&*456-o.U")); // true