function cutAndReverse(input) {

    let textLength = input.length;

    let firstHalf = input
        .substring(0, textLength / 2)
        .split('')
        .reverse()
        .join('');

    let secondHalf = input
        .substring(textLength / 2, input.length)
        .split('')
        .reverse()
        .join('');

    return firstHalf.concat('\n' + secondHalf);
}

console.log(cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI'));