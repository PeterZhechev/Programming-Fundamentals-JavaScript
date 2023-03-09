function stringSubstring(word, text) {

    let toLowerCaseWord = word.toLowerCase();
    let toLowerCaseText = text.toLowerCase();

    let splitted = toLowerCaseText.split(' ');

    if (!splitted.includes(toLowerCaseWord)) {
        return `${word} not found!`;
    } else {
        return word;
    }
}

console.log(stringSubstring('javascript', 'JavaScript is the best programming language'));