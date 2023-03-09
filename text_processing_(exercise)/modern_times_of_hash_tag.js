function modernTimesOfHashTag(inputText) {
    
    const hashTagWords = [];

    let splittedText = inputText.split(' ');

    for (word of splittedText) {
        if (word.charAt(0) === '#') {
            hashTagWords.push(word);
        }
    }

    let specialWords = [];

    for (let word of hashTagWords) {
        let isSpecial = false;
        for (let i = 1; i < word.length; i++) {
            let char = word[i];
            let asciiNum = char.charCodeAt();
            if (asciiNum >= 65 && asciiNum <= 90) {
                isSpecial = true;
            } else if (asciiNum >= 97 && asciiNum <= 122) {
                isSpecial = true;
            } else {
                isSpecial = false;
                break;
            }
        }

        if (isSpecial) {
            let splittedWord = word.split('');
            splittedWord.shift();
            let specialWord = splittedWord.join('');
            specialWords.push(specialWord);
        }
    }

    console.log(specialWords.join('\n'));
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');