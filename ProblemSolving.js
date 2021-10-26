function charCount(str) {
    //make object to return at end.
    let result = {};
    //loop over string, for each character...
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        //if character is something else (space,period, etc.) dont do anything
        if (/[a-z0-9]/.test(char)) {
            //if char is a number/letter AND is a key in object, add one to counts
            if (result[char] > 0) {
                result[char]++;
            } 
            //if char is a number/letter AND not in object, add it to object and set value to one
            else {
                result[char] = 1;
            };   
        }
    }
    //return object at end
    return result;
}

function charCount(str) {
    let result = {};
    for (let char of str) {
        if (isAlphNumeric(char)) {
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
    }
    //return object at end
    return result;
}

function isAlphNumeric(char) {
    let code = char.charCodeAt(0);
    if (
        !(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123) // lower alpha (a-z)
    ) {
        return false;
    }
    return true;
}





