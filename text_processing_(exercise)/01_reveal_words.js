function revealWords(words, text) {

    let wordsInArr = words.split(', ');
    let textInArr = text.split(' ');

    let wordsAndChars = {};

    for (let currentWord of wordsInArr) {
        let currentChars = '';
        for (let char of currentWord) {
            currentChars += '*';
        }

        wordsAndChars[currentChars] = currentWord;
    }

    for (let i = 0; i < textInArr.length; i++) {
        let currentWord = textInArr[i];
        if (wordsAndChars.hasOwnProperty(currentWord)) {
            textInArr.splice(i, 1, wordsAndChars[currentWord])
        }
    }

    return textInArr.join(' ');
}

console.log(revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'));