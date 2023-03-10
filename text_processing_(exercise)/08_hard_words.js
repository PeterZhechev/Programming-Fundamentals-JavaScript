function hardWords(input) {

    let str = input[0];
    let arr = input[1];
    
    let obj = {};

    for (let word of arr) {
        let wordLength = word.length;
        let currentSybmol = '_';
        let currentSybmolsLength = currentSybmol.repeat(wordLength);

        obj[currentSybmolsLength] = word;
    }

    let textToArr = str.split(' ');

    for (let i = 0; i < textToArr.length; i++) {
        let word = textToArr[i];
        let splitted = word.split('');
        let lastChar = '';
        if (splitted[splitted.length - 1] !== '_') {
            lastChar = splitted.pop();
        }

        if (lastChar) {
            word = splitted.join('');
        }
        if (obj.hasOwnProperty(word)) {
            let newWord = obj[word];
            if (lastChar) {
                newWord += lastChar;
            }
            textToArr.splice(i, 1, newWord);
        }
    }

    return textToArr.join(' ');
}

console.log(hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]));
