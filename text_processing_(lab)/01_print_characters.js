function printCharacters(str) {
    
    let chars = '';
    let strLength = str.length;
    let index = 0;

    while (index < strLength) {
        let currentChar = str[index];
        if (index < strLength - 1) {
            chars += currentChar + '\n';
        } else {
            chars += currentChar;
        }

        index++;
    }

    return chars;
}

console.log(printCharacters('Sentence'));

