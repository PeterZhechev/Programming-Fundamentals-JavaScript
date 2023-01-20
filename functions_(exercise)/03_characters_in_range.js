function charactersInRange(charStart, charEnd) {

    let start = charStart.charCodeAt();
    let end = charEnd.charCodeAt();
    let isBigger = 0;
    let isSmaller = 0;
    let outputCharrArr = [];

    if (start > end) {
        isBigger = start;
        isSmaller = end;
    } else if (end >= start) {
        isBigger = end;
        isSmaller = start;
    }

    for (let i = isSmaller + 1; i < isBigger; i++) {
        let currentCharacter = String.fromCharCode(i);
        outputCharrArr.push(currentCharacter);
    }

    return outputCharrArr.join(' ');
}

let output = charactersInRange('#', ':');

console.log(output);
