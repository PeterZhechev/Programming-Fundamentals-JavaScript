function pascalCaseSplitter(input) {

    let splitted = input.split('');
    let capitalLetters = [];

    for (let index = 0; index < splitted.length; index++) {
        let currentChar = splitted[index];

        if (currentChar.charCodeAt() >= 65 && currentChar.charCodeAt() <= 90) {
            capitalLetters.push(index);
        }
    }

    if (capitalLetters[0] === 0) {
        capitalLetters.shift();
    }

    let counter = 0;

    for (let i = 0; i < capitalLetters.length; i++) {
        let currentIndex = capitalLetters[i];
        splitted.splice(currentIndex + counter, 0, ', ');
        counter++;
    }

    return splitted.join('');
}

console.log(pascalCaseSplitter('HoldTheDoor'));