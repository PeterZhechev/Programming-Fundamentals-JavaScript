function censoredWords(text, word) {

    let censoredWordLength = word.length;
    let censoredWord = '';
    for (let i = 0; i < censoredWordLength; i++) {
        let currentChar = '*';
        censoredWord += currentChar;
    }
    let splittedText = text.split(word);
    let outputText = splittedText.join(censoredWord);

    return outputText;
}

console.log(censoredWords('Find the hidden word', 'hidden'));