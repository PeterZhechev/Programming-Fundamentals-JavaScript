function integerAndFload(firstNum, secondNum, thirdNum) {

    let sum = firstNum + secondNum + thirdNum;
    let type = '';

    if (sum % 1 === 0) {
        type = 'Integer';
    } else {
        type = 'Float';
    }

    console.log(`${sum} - ${type}`);

}

integerAndFload(9, 100, 1);