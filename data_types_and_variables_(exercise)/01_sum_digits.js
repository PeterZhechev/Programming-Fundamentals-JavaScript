function sumDigits(inputNumber) {

    let inputArr = '' + inputNumber;
    let sum = 0;
    let count = 0;

    for (let i = 0; i < inputArr.length; i++) {
        count = Number(inputArr[i]);
        sum += count;
    }
    console.log(sum);
}

sumDigits(97561);