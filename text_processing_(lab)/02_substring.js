function substring(str, startIndex, count) {
    let outputWord = str.substring(startIndex, count + startIndex);
    return outputWord;
}

console.log(substring('SkipWord', 4, 7));