function englishName(input) {

    let number = Number(input);
    let lastDigit = number % 10;
    let name = "";

    if (lastDigit === 0) {
        name = "zero";
    } else if (lastDigit === 1) {
        name = "one";
    } else if (lastDigit === 2) {
        name = "two";
    } else if (lastDigit === 3) {
        name = "three";
    } else if (lastDigit === 4) {
        name = "four";
    } else if (lastDigit === 5) {
        name = "five";
    } else if (lastDigit === 6) {
        name = "six";
    } else if (lastDigit === 7) {
        name = "seven";
    } else if (lastDigit === 8) {
        name = "eight";
    } else if (lastDigit === 9) {
        name = "nine";
    }

    console.log(name);

}

englishName(59);