function passwordGenerator(input) {

    let firsWord = input[0];
    let secondWord = input[1];
    let specialWord = input[2];
    let firstPlusSecondWord = firsWord.concat(secondWord);
    let splitted = firstPlusSecondWord.split('');
    let splittedLength = splitted.length;
    let filteredText = [];
    let count = 0;
    let sequenceLength = specialWord.length;

    for (let i = 0; i < splittedLength; i++) {
        let currentChar = splitted[i];

        if (currentChar !== 'a' && currentChar !== 'A' && currentChar !== 'e' && currentChar !== 'E'
            && currentChar !== 'i' && currentChar !== 'I' && currentChar !== 'o' && currentChar !== 'O'
            && currentChar !== 'u' && currentChar !== 'U') {
            filteredText.push(currentChar);
        } else {
            currentChar = specialWord[count].toUpperCase();
            filteredText.push(currentChar);
            count++;
            if (count === sequenceLength) {
                count = 0;
            }
        }
    }

    return `Your generated password is ${filteredText
        .reverse()
        .join('')}`;
}

console.log(passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']));

console.log(passwordGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']));