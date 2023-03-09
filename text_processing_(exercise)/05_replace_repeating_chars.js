function replaceRepeatingChars(text) {
    
    let splitted = text.split('');
    let outputText = [];

    for (let i = 0; i < splitted.length; i++) {
        let char = splitted[i];
        if (outputText[outputText.length - 1] !== char) {
            outputText.push(char);
        }
    }

    return outputText.join('');
}

console.log(replaceRepeatingChars('qqqwerqwecccwd'));