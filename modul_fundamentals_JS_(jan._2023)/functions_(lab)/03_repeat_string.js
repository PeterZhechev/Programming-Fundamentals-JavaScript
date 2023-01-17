function repeatString(string, repeatCount) {

    let concatenatedString = '';
    for (let i = 0; i < repeatCount; i++) {
        concatenatedString += string;
    }

    return concatenatedString;
}

let repeatedString = repeatString("abc", 3);

console.log(repeatedString);