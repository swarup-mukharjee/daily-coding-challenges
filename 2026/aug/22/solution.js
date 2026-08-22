function decode(message,shift){
    return message.split("").map(char=>{
        const code=char.charCodeAt(0);

        //if uppercase
        if(code>=65 && code<=90){
            const position=code-65;
            const newPosition=(position-shift+26)%26;
            return String.fromCharCode(newPosition+65);
        }

        //if Lowercase
        if(code>=97 && code <=122){
            const position = code- 97;
            const newPosition=(position -shift +26)%26;
            return String.fromCharCode(newPosition +97);
        }

        return char;
    }).join("");
}

// call or test
console.log(decode("jgnnq", 2));