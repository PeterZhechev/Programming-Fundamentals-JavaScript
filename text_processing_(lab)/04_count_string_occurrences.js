function countStringOccurrences(string, searchWord) {

    const splittedString = string.split(' ');
    let repeats = 0;

    for (const word of splittedString) {
        if (word === searchWord) {
            repeats++;
        }
    }

    return repeats;
}

console.log(countStringOccurrences('softuni is great place for learning new programming languages', 'softuni'));