function sumEvenNumbers(inputArr) {

    let currentNum = '';
    let sumNumbers = 0;

    for (let i = 0; i < inputArr.length; i++) {
        currentNum = Number(inputArr[i]);
        if (currentNum % 2 === 0) {
            sumNumbers += currentNum;
        }
    }
    console.log(sumNumbers);
}

sumEvenNumbers(['2', '4', '6', '8', '10']);