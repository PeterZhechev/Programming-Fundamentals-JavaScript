function valueOfAString(input) {

    let str = input[0];
    let command = input[1];
    let sum = 0;

    if (command === 'LOWERCASE') {
        for (let ch of str) {
            if (ch.charCodeAt() >= 97 && ch.charCodeAt() <= 122) {
                sum += ch.charCodeAt();
            }
        }
    } else if (command === 'UPPERCASE') {
        for (let ch of str) {
            if (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90) {
                sum += ch.charCodeAt();
            }
        }
    }

    return `The total sum is: ${sum}`;
}

console.log(valueOfAString([
    'HelloFromMyAwesomePROGRAM',
    'LOWERCASE']));

    console.log(valueOfAString(['AC/DC',
    'UPPERCASE']));