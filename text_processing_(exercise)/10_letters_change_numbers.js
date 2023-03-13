function lettersChangeNumbers(input) {

    let splitted = input.split(' ');
    let sum = 0;

    for (let el of splitted) {
        if (el === '') continue;
        let splittedEl = el.split('');
        let firsLetter = splittedEl.shift();
        let lastLetter = splittedEl.pop();
        let num = Number(splittedEl.join(''));
        let currentLetterPosition = 0;

        if (firsLetter.charCodeAt() >= 65 && firsLetter.charCodeAt() <= 90) {
            currentLetterPosition = firsLetter.charCodeAt() - 64;
            num /= currentLetterPosition;
        } else if (firsLetter.charCodeAt() >= 97 && firsLetter.charCodeAt() <= 122) {
            currentLetterPosition = firsLetter.charCodeAt() - 96;
            num *= currentLetterPosition;
        }

        if (lastLetter.charCodeAt() >= 65 && lastLetter.charCodeAt() <= 90) {
            currentLetterPosition = lastLetter.charCodeAt() - 64;
            num -= currentLetterPosition;
        } else if (lastLetter.charCodeAt() >= 97 && lastLetter.charCodeAt() <= 122) {
            currentLetterPosition = lastLetter.charCodeAt() - 96;
            num += currentLetterPosition;
        }

        sum += num;
    }

    return sum.toFixed(2);
}

console.log(lettersChangeNumbers('A12b s17G'));

console.log(lettersChangeNumbers('P34562Z q2576f   H456z'));

console.log(lettersChangeNumbers('a1A'));
