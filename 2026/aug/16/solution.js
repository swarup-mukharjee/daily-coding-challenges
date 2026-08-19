function areAnagrams(str1, str2) {
  const cleanstr1 = str1.toLowerCase().replace(/\s/g, "");
  const cleanstr2 = str2.toLowerCase().replace(/\s/g, "");

  if (cleanstr1.length !== cleanstr2.length) {
    return false;
  }

  const sorted1 = cleanstr1.split("").sort().join("");
  const sorted2 = cleanstr2.split("").sort().join("");

  return sorted1 === sorted2;
}