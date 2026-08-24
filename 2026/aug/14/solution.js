function spaceJam(str) {
  return str
    .replaceAll(" ", "")
    .toUpperCase()
    .split("")
    .join("  ");
}

// call or test
console.log(cspaceJam("hello world"));