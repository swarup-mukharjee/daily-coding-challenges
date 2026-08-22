function spaceJam(str) {
  return str
    .replaceAll(" ", "")
    .toUpperCase()
    .split("")
    .join("  ");
}

// call or test
spaceJam("hello world");