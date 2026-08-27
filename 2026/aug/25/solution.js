function toCamelCase(str) {
    const words = str.split(/[ _-]+/);
    const firstWord = words[0].toLowerCase();
    const remainingWords = words.slice(1).map(word => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    return [firstWord, ...remainingWords].join("");
}

//test or call

console.log(toCamelCase("the_stealth_warrior")); // Output: "theStealthWarrior"