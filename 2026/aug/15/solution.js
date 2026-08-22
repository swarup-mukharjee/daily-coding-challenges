function jbelmu(text) {
  return text
    .split(" ")
    .map(word => {
      if (word.length <= 2) {
        return word;
      }

      const first = word[0];
      const last = word[word.length - 1];

      const middle = word
        .slice(1, -1)
        .split("")
        .sort()
        .join("");

      return first + middle + last;
    })
    .join(" ");
}

// call or test
jbelmu("hello world");