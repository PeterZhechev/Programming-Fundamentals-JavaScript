function asciiSumator(input) {

    let [firstChar, secondChar, str] = input;

    let firstCharAsciiCode = firstChar.charCodeAt();
    let secondCharAsciiCode = secondChar.charCodeAt();
    let sum = 0;

    if (firstCharAsciiCode < secondCharAsciiCode) {
        for (let ch of str) {
            if (ch.charCodeAt() > firstCharAsciiCode && ch.charCodeAt() < secondCharAsciiCode) {
                sum += ch.charCodeAt();
            }
        }
    } else {
        for (let ch of str) {
            if (ch.charCodeAt() < firstCharAsciiCode && ch.charCodeAt() > secondCharAsciiCode) {
                sum += ch.charCodeAt();
            }
        }
    }

    return sum;
}

console.log(asciiSumator(['.', '@', 'dsg12gr5653feee5']));

console.log(asciiSumator(['?', 'E', '@ABCEF']));

console.log(asciiSumator(['a', '1', 'jfe392$#@j24ui9ne#@$']));
