function isValidNumber(n,base){
    for(const char of n.toUpperCase())
{
    const value=parseInt(char,36);

    if(isNaN(value)||value>=base){
        return false;
    }
}
return true;
}

// Tests
console.log(isValidNumber("10101", 2));      // true
console.log(isValidNumber("10201", 2));      // false
console.log(isValidNumber("76543210", 8));   // true
console.log(isValidNumber("9876543210", 8)); // false
console.log(isValidNumber("9876543210", 10)); // true
console.log(isValidNumber("ABC", 10));       // false
console.log(isValidNumber("ABC", 16));       // true
console.log(isValidNumber("Z", 36));          // true
console.log(isValidNumber("ABC", 20));       // true
console.log(isValidNumber("4B4BA9", 16));   // true
console.log(isValidNumber("5G3F8F", 16));   // false
console.log(isValidNumber("5G3F8F", 17));   // true
console.log(isValidNumber("abc", 10));       // false
console.log(isValidNumber("abc", 16));       // true
console.log(isValidNumber("AbC", 16));       // true
console.log(isValidNumber("z", 36));          // true