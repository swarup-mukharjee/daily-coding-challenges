function spaceJam(str) {
  return str
    .replaceAll(" ", "")
    .toUpperCase()
    .split("")
    .join("  ");
}